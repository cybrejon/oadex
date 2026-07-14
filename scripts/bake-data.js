import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

function jsString(v) {
  if (typeof v === 'string') return JSON.stringify(v);
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (v === null) return 'null';
  if (Array.isArray(v)) return `[${v.map(jsString).join(',')}]`;
  if (typeof v === 'object') {
    const keys = Object.keys(v);
    return `{${keys.map(k => `${JSON.stringify(k)}:${jsString(v[k])}`).join(',')}}`;
  }
  return JSON.stringify(v);
}

function writeJS(filePath, data, exportName = 'default') {
  const code = `export ${exportName === 'default' ? 'default ' : `const ${exportName} = `}${jsString(data)};\n`;
  writeFileSync(filePath, code);
  console.log(`  Wrote ${filePath}`);
}

function readJSON(p) {
  return JSON.parse(readFileSync(p, 'utf8'));
}

// 1. Split data.json → individual shikigami files + index + all-in-one
console.log('\n--- Splitting data.json ---');
const allShiki = readJSON(resolve(root, 'db/data.json')).data;
const shikiNames = Object.keys(allShiki);
const dest = resolve(root, 'src/lib/data/shikigami');

mkdirSync(dest, { recursive: true });

// Also write a combined file for the detail page (single import, no dynamic loading needed)
writeJS(resolve(root, 'src/lib/data/shikigami_all.js'), allShiki);

const indexFields = ['式神名称', '式神定位', '式神方头像', '式神基础属性', '式神属性成长', '式神ID', '新式神'];
const shikiIndex = {};
for (const name of shikiNames) {
  const safe = name.replace(/[^a-zA-Z0-9_]/g, '_');
  writeJS(resolve(dest, `${safe}.js`), allShiki[name]);
  const entry = {};
  for (const f of indexFields) {
    entry[f] = allShiki[name][f];
  }
  shikiIndex[name] = entry;
}
writeJS(resolve(dest, '_index.js'), shikiIndex);

// 2. Damage types (computed from skill descriptions)
console.log('\n--- Computing damage_types ---');
const dtResults = [];
for (const name of shikiNames) {
  const s = allShiki[name];
  const desc = (s.式神技能?.天生被动?.技能描述 || '') +
    (s.式神技能?.一技能?.技能描述 || '') +
    (s.式神技能?.二技能?.技能描述 || '') +
    (s.式神技能?.三技能?.技能描述 || '') +
    (s.式神技能?.四技能?.技能描述 || '');
  const types = ["magic damage", "physical damage", "true damage"].filter(d => desc.toLowerCase().includes(d));
  dtResults.push({ name, damage_types: types });
}
writeJS(resolve(root, 'src/lib/data/damage_types.js'), dtResults);

// 3. Items (raw + transformed)
console.log('\n--- Converting items.json ---');
const itemsRaw = readJSON(resolve(root, 'db/items.json')).data;
writeJS(resolve(root, 'src/lib/data/items.js'), itemsRaw);

// Also write a transformed version matching the API format
const itemNames = Object.keys(itemsRaw);
const itemsTransformed = itemNames.map(n => ({
  id: itemsRaw[n].装备ID,
  name: n,
  image: itemsRaw[n].图标路径,
  specialAbility: itemsRaw[n].装备额外描述 == null ? undefined : itemsRaw[n].装备额外描述,
  type: itemsRaw[n].装备类型,
  requiredItems: itemsRaw[n].子物品,
  abilities: {
    passive: itemsRaw[n].装备被动技能 == null ? undefined : itemsRaw[n].装备被动技能,
    active: itemsRaw[n].装备主动技能 == null ? undefined : itemsRaw[n].装备主动技能
  },
  attributes: itemsRaw[n].装备属性,
  tier: itemsRaw[n].装备等级,
  price: itemsRaw[n].装备价格
}));
writeJS(resolve(root, 'src/lib/data/items_transformed.js'), itemsTransformed);

// 3. Spells
console.log('\n--- Converting spells.json ---');
const spells = readJSON(resolve(root, 'db/spells.json'));
writeJS(resolve(root, 'src/lib/data/spells.js'), spells.data);

// 4. Onmyodos
console.log('\n--- Converting onmyodos.json ---');
const onmyodos = readJSON(resolve(root, 'db/onmyodos.json'));
writeJS(resolve(root, 'src/lib/data/onmyodos.js'), onmyodos.data);

// 5. Search index
console.log('\n--- Converting search_index.json ---');
const si = readJSON(resolve(root, 'db/search_index.json'));
writeJS(resolve(root, 'src/lib/data/search_index.js'), si);

// 6. Images (merge images.json + images2.json)
console.log('\n--- Merging images ---');
const img1 = readJSON(resolve(root, 'db/images.json'));
const img2 = readJSON(resolve(root, 'db/images2.json'));
const merged = { ...img1.path_dict, ...img2.path_dict };
writeJS(resolve(root, 'src/lib/data/images.js'), merged);

// 7. Bios
console.log('\n--- Converting bios.json ---');
const bios = readJSON(resolve(root, 'db/bios.json'));
// Build a lookup by oa_name
const biosLookup = {};
for (const row of bios.rows) {
  biosLookup[row.fields.oa_name] = row.fields;
}
writeJS(resolve(root, 'src/lib/data/bios.js'), biosLookup);

// 8. Win rates
console.log('\n--- Converting wr/*.json ---');
const wrDir = resolve(root, 'src/lib/data/wr');
mkdirSync(wrDir, { recursive: true });
for (const mode of ['all', 'ban', 'noban', 'fogban']) {
  const wr = readJSON(resolve(root, `db/wr/${mode}.json`));
  writeJS(resolve(wrDir, `${mode}.js`), wr.data);
}

// 9. Guides
console.log('\n--- Converting shikigami_guides ---');
const guidesSrc = resolve(root, 'db/shikigami_guides');
const guidesDest = resolve(root, 'src/lib/data/guides');
const guidesByShiki = {};
if (existsSync(guidesSrc)) {
  function copyGuides(dir, relativePath = '') {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = resolve(dir, entry.name);
      const relPath = relativePath ? `${relativePath}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        mkdirSync(resolve(guidesDest, relPath), { recursive: true });
        copyGuides(fullPath, relPath);
      } else if (entry.name.endsWith('.json')) {
        const data = readJSON(fullPath);
        const outName = entry.name.replace('.json', '.js');
        const outPath = resolve(guidesDest, relPath.replace(entry.name, outName));
        mkdirSync(dirname(outPath), { recursive: true });
        writeJS(outPath, data);
        // Also collect for combined lookup
        const sn = data.shikigami_name;
        const dirName = relativePath.split('/')[0]; // e.g. 'Tanuki'
        if (!guidesByShiki[sn]) guidesByShiki[sn] = [];
        guidesByShiki[sn].push({ title: data.title, filename: entry.name.replace('.json', ''), folder: dirName });
      }
    }
  }
  const { readdirSync } = await import('fs');
  copyGuides(guidesSrc);
}
writeJS(resolve(root, 'src/lib/data/guides_index.js'), guidesByShiki);

console.log('\n✅ All data baked into src/lib/data/');
