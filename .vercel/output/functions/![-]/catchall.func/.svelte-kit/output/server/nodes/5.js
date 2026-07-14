import * as server from '../entries/pages/items/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/items/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/items/+page.server.js";
export const imports = ["_app/immutable/nodes/5.BW0emI7Y.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/SffS3sds.js","_app/immutable/chunks/Dw2f25QA.js","_app/immutable/chunks/BPm4_kW0.js","_app/immutable/chunks/Gn3FEbkU.js","_app/immutable/chunks/CV5_jdq4.js","_app/immutable/chunks/DRIsRtSV.js","_app/immutable/chunks/DhPtNDAQ.js","_app/immutable/chunks/BsPL3Er6.js","_app/immutable/chunks/DtDPACC_.js","_app/immutable/chunks/Ch1WBRTM.js","_app/immutable/chunks/BGpGMQK8.js","_app/immutable/chunks/sEF-ui_Z.js","_app/immutable/chunks/3Sc1NNGx.js","_app/immutable/chunks/BhYdA1ew.js","_app/immutable/chunks/OgvRs744.js"];
export const stylesheets = ["_app/immutable/assets/Toggles.TrEvI05A.css","_app/immutable/assets/shikis.CkLxvOPB.css","_app/immutable/assets/Container.D_2-Ckm_.css","_app/immutable/assets/Button2.C4PHUGOs.css","_app/immutable/assets/ButtonGroup.Dig3pBGf.css","_app/immutable/assets/Dropdown.tfmSJsU2.css","_app/immutable/assets/5.CYLmQLqA.css"];
export const fonts = [];
