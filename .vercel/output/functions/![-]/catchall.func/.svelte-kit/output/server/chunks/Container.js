import { W as attr, V as attr_class, $ as attr_style, a5 as clsx } from "./index2.js";
function Container($$renderer, $$props) {
  let { area_name, style, styles, id, children } = $$props;
  $$renderer.push(`<div${attr("id", id)}${attr_class(clsx(style === "transparent" ? "container--alt" : "container"), "svelte-11pzuwo")}${attr_style(styles, { "grid-area": area_name })}>`);
  children?.($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  Container as C
};
