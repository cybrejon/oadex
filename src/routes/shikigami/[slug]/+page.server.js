import shikiIndex from '$lib/data/shikigami/_index.js';
import allShiki from '$lib/data/shikigami_all.js';
import biosLookup from '$lib/data/bios.js';
import onmyodosData from '$lib/data/onmyodos.js';
import spellsData from '$lib/data/spells.js';
import guidesIndex from '$lib/data/guides_index.js';
import wrAll from '$lib/data/wr/all.js';
import wrBan from '$lib/data/wr/ban.js';
import wrNoban from '$lib/data/wr/noban.js';
import wrFogban from '$lib/data/wr/fogban.js';

export function load({ params }) {
  const shikiEntry = Object.entries(shikiIndex).find(
    ([_, v]) => String(v['式神ID']) === params.slug
  );

  if (!shikiEntry) {
    throw new Error(`Shikigami with ID ${params.slug} not found`);
  }

  const shikiName = shikiEntry[0];
  const sdata = allShiki[shikiName];

  // Bios
  const bio = biosLookup[shikiName];
  let bioData;
  try {
    bioData = {
      bio1: bio?.bio1,
      bio2: bio?.bio2,
      bio3: bio?.bio3,
      bio4: bio?.bio4,
      bio5: bio?.bio5,
      contributor: bio?.contributor
    };
  } catch (error) {
    console.log("[bios] could not load one of the bios; no bio data found");
  }

  // Guide list
  let guide_list;
  try {
    guide_list = guidesIndex[shikiName] || [];
  } catch (error) {
    console.log(error);
  }

  // Performance from wr data
  const perfModes = { all: wrAll, noban: wrNoban, ban: wrBan, fogban: wrFogban };
  const performance = { kda: {}, avg_kills: {}, win_rate: {}, pick_rate: {} };

  for (const [mode, data] of Object.entries(perfModes)) {
    const entry = data.find(item => String(item.hero_id) === params.slug);
    if (entry) {
      performance.kda[mode] = entry.kda;
      performance.avg_kills[mode] = entry.avg_kill_cnt;
      performance.win_rate[mode] = (entry.win_rate * 100).toFixed(2);
      performance.pick_rate[mode] = (entry.battle_rate * 100).toFixed(2);
    } else {
      performance.kda[mode] = 'reload';
      performance.avg_kills[mode] = 'reload';
      performance.win_rate[mode] = 'reload';
      performance.pick_rate[mode] = 'reload';
    }
  }

  // Recommended onmyodos
  const recOnmyodoIds = sdata['推荐阴阳术'] || [];
  const onmyodos = recOnmyodoIds
    .map(id => onmyodosData[String(id)])
    .filter(Boolean);

  // Recommended spells
  const recSpellIds = sdata['推荐灵咒'] || [];
  const spells = recSpellIds
    .map(id => spellsData[String(id)])
    .filter(Boolean);

  return {
    guide_list,
    performance,
    sdata,
    bioData,
    onmyodos,
    spells
  };
}
