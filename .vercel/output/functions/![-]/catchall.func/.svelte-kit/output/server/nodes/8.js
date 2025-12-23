import * as universal from '../entries/pages/shikigami/_slug_/_page.js';
import * as server from '../entries/pages/shikigami/_slug_/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shikigami/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/shikigami/[slug]/+page.js";
export { server };
export const server_id = "src/routes/shikigami/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/8.CcjGRdLp.js","_app/immutable/chunks/UTS93b5k.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/dFMN_GVM.js","_app/immutable/chunks/BrFr0L3w.js","_app/immutable/chunks/CEfj8WPo.js","_app/immutable/chunks/_2SifPp6.js","_app/immutable/chunks/yYI0xxPb.js","_app/immutable/chunks/DBPYeusg.js","_app/immutable/chunks/BFpQL-B-.js","_app/immutable/chunks/C36o_Hkx.js","_app/immutable/chunks/gKH1QK7V.js","_app/immutable/chunks/BGpGMQK8.js","_app/immutable/chunks/Dwgt5C8H.js","_app/immutable/chunks/ChwsZu27.js","_app/immutable/chunks/d0wzp1Li.js","_app/immutable/chunks/c9QO9OK7.js"];
export const stylesheets = ["_app/immutable/assets/Toggles.TrEvI05A.css","_app/immutable/assets/Note.DOiQaKC3.css","_app/immutable/assets/Container.D_2-Ckm_.css","_app/immutable/assets/Button2.C4PHUGOs.css","_app/immutable/assets/Dropdown.tfmSJsU2.css","_app/immutable/assets/ButtonGroup.Dig3pBGf.css","_app/immutable/assets/8.CzC-MClj.css"];
export const fonts = [];
