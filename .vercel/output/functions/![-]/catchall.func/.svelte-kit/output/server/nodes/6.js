import * as universal from '../entries/pages/items/_slug_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/items/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/items/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/6.CJczclA9.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CV5_jdq4.js","_app/immutable/chunks/SffS3sds.js","_app/immutable/chunks/LhokJS7y.js","_app/immutable/chunks/Dw2f25QA.js","_app/immutable/chunks/Gn3FEbkU.js"];
export const stylesheets = ["_app/immutable/assets/Note.DOiQaKC3.css"];
export const fonts = [];
