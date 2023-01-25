import { d as data, p as path_dict } from './images-97e4a5af.js';

const scores = {
  "1": "D",
  "2": "C",
  "3": "B",
  "4": "A",
  "5": "S"
};
const roles = {
  "射": "MARKSMAN",
  "忍": "NINJA",
  "守": "TANK",
  "侍": "SAMURAI",
  "巫": "MAGE",
  "祝": "SUPPORT"
};
const roles_numeral = {
  "1": "SAMURAI",
  "2": "MAGE",
  "3": "MARKSMAN",
  "4": "NINJA",
  "5": "TANK",
  "6": "SUPPORT"
};
const lanes = {
  "中": "Mid Laner",
  "辅": "Bottom Laner Support",
  "上": "Top Laner",
  "野": "Jungler/Gank",
  "下": "Bottom Laner Marksman"
};
function load() {
  return {
    data,
    path_dict,
    dictionary: {
      scores,
      roles,
      roles_numeral,
      lanes
    }
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
const component = async () => (await import('./_page.svelte-31a0886f.js')).default;
const file = '_app/immutable/components/pages/shikigami/_slug_/_page.svelte-19f400a9.js';
const imports = ["_app/immutable/components/pages/shikigami/_slug_/_page.svelte-19f400a9.js","_app/immutable/chunks/index-83802678.js","_app/immutable/chunks/stores-5d9ed85c.js","_app/immutable/chunks/singletons-982258d7.js","_app/immutable/chunks/index-4ca4e11a.js","_app/immutable/chunks/store-ba968658.js","_app/immutable/chunks/images-e6ed2aa7.js","_app/immutable/modules/pages/shikigami/_slug_/_page.js-bdf66d3b.js","_app/immutable/chunks/images-e6ed2aa7.js","_app/immutable/chunks/_page-2c5178b3.js"];
const stylesheets = ["_app/immutable/assets/_page-0a7cf42f.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=5-1bae8abe.js.map
