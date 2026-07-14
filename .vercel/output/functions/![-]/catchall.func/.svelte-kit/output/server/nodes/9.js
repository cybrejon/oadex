import * as server from '../entries/pages/shikigami/_slug_/guide/_slug_/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shikigami/_slug_/guide/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/shikigami/[slug]/guide/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/9.CxZV35_-.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/SffS3sds.js","_app/immutable/chunks/Gn3FEbkU.js","_app/immutable/chunks/CV5_jdq4.js","_app/immutable/chunks/Dw2f25QA.js","_app/immutable/chunks/sEF-ui_Z.js","_app/immutable/chunks/3Sc1NNGx.js","_app/immutable/chunks/BhYdA1ew.js"];
export const stylesheets = ["_app/immutable/assets/Container.D_2-Ckm_.css","_app/immutable/assets/Button2.C4PHUGOs.css","_app/immutable/assets/ButtonGroup.Dig3pBGf.css","_app/immutable/assets/9.DaEz-vzo.css"];
export const fonts = [];
