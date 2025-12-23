import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.DHSlR9zK.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/dFMN_GVM.js","_app/immutable/chunks/BrFr0L3w.js","_app/immutable/chunks/CEfj8WPo.js","_app/immutable/chunks/_2SifPp6.js","_app/immutable/chunks/yYI0xxPb.js","_app/immutable/chunks/DBPYeusg.js","_app/immutable/chunks/UTS93b5k.js","_app/immutable/chunks/d0wzp1Li.js","_app/immutable/chunks/Dwgt5C8H.js","_app/immutable/chunks/C36o_Hkx.js","_app/immutable/chunks/ChwsZu27.js","_app/immutable/chunks/BT__Ry0k.js","_app/immutable/chunks/B4EuJOt1.js","_app/immutable/chunks/BkIYt_2v.js","_app/immutable/chunks/DhPtNDAQ.js","_app/immutable/chunks/BFpQL-B-.js"];
export const stylesheets = ["_app/immutable/assets/Toggles.TrEvI05A.css","_app/immutable/assets/ButtonGroup.Dig3pBGf.css","_app/immutable/assets/Button2.C4PHUGOs.css","_app/immutable/assets/Note.DOiQaKC3.css","_app/immutable/assets/Dropdown.tfmSJsU2.css","_app/immutable/assets/shikis.CkLxvOPB.css","_app/immutable/assets/2.v7Sdl8aI.css"];
export const fonts = [];
