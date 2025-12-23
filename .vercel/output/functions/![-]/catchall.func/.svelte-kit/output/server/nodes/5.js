import * as server from '../entries/pages/items/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/items/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/items/+page.server.js";
export const imports = ["_app/immutable/nodes/5.DUO78kjV.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/dFMN_GVM.js","_app/immutable/chunks/BrFr0L3w.js","_app/immutable/chunks/CEfj8WPo.js","_app/immutable/chunks/_2SifPp6.js","_app/immutable/chunks/yYI0xxPb.js","_app/immutable/chunks/DBPYeusg.js","_app/immutable/chunks/DhPtNDAQ.js","_app/immutable/chunks/BkIYt_2v.js","_app/immutable/chunks/BT__Ry0k.js","_app/immutable/chunks/Ch1WBRTM.js","_app/immutable/chunks/BGpGMQK8.js","_app/immutable/chunks/gKH1QK7V.js","_app/immutable/chunks/Dwgt5C8H.js","_app/immutable/chunks/d0wzp1Li.js","_app/immutable/chunks/ChwsZu27.js"];
export const stylesheets = ["_app/immutable/assets/Toggles.TrEvI05A.css","_app/immutable/assets/shikis.CkLxvOPB.css","_app/immutable/assets/Container.D_2-Ckm_.css","_app/immutable/assets/Button2.C4PHUGOs.css","_app/immutable/assets/ButtonGroup.Dig3pBGf.css","_app/immutable/assets/Dropdown.tfmSJsU2.css","_app/immutable/assets/5.CYLmQLqA.css"];
export const fonts = [];
