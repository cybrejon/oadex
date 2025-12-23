import * as universal from '../entries/pages/items/_slug_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/items/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/items/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/6.CZLLSWTH.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/yYI0xxPb.js","_app/immutable/chunks/dFMN_GVM.js","_app/immutable/chunks/C36o_Hkx.js","_app/immutable/chunks/BrFr0L3w.js","_app/immutable/chunks/_2SifPp6.js"];
export const stylesheets = ["_app/immutable/assets/Note.DOiQaKC3.css"];
export const fonts = [];
