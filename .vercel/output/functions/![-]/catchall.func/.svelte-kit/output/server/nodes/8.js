import * as universal from '../entries/pages/shikigami/_slug_/_page.js';
import * as server from '../entries/pages/shikigami/_slug_/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shikigami/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/shikigami/[slug]/+page.js";
export { server };
export const server_id = "src/routes/shikigami/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/8.BrJ3BKaO.js","_app/immutable/chunks/UTS93b5k.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/SffS3sds.js","_app/immutable/chunks/Dw2f25QA.js","_app/immutable/chunks/BPm4_kW0.js","_app/immutable/chunks/Gn3FEbkU.js","_app/immutable/chunks/CV5_jdq4.js","_app/immutable/chunks/DRIsRtSV.js","_app/immutable/chunks/CtXNMgMi.js","_app/immutable/chunks/LhokJS7y.js","_app/immutable/chunks/sEF-ui_Z.js","_app/immutable/chunks/BGpGMQK8.js","_app/immutable/chunks/3Sc1NNGx.js","_app/immutable/chunks/OgvRs744.js","_app/immutable/chunks/BhYdA1ew.js","_app/immutable/chunks/DsgxeJwW.js"];
export const stylesheets = ["_app/immutable/assets/Toggles.TrEvI05A.css","_app/immutable/assets/Note.DOiQaKC3.css","_app/immutable/assets/Container.D_2-Ckm_.css","_app/immutable/assets/Button2.C4PHUGOs.css","_app/immutable/assets/Dropdown.tfmSJsU2.css","_app/immutable/assets/ButtonGroup.Dig3pBGf.css","_app/immutable/assets/8.CzC-MClj.css"];
export const fonts = [];
