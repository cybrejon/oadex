import * as server from '../entries/pages/shikigami/_slug_/guide/_slug_/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shikigami/_slug_/guide/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/shikigami/[slug]/guide/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/9.BnbqRDQe.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/dFMN_GVM.js","_app/immutable/chunks/_2SifPp6.js","_app/immutable/chunks/yYI0xxPb.js","_app/immutable/chunks/BrFr0L3w.js","_app/immutable/chunks/gKH1QK7V.js","_app/immutable/chunks/Dwgt5C8H.js","_app/immutable/chunks/d0wzp1Li.js"];
export const stylesheets = ["_app/immutable/assets/Container.D_2-Ckm_.css","_app/immutable/assets/Button2.C4PHUGOs.css","_app/immutable/assets/ButtonGroup.Dig3pBGf.css","_app/immutable/assets/9.DaEz-vzo.css"];
export const fonts = [];
