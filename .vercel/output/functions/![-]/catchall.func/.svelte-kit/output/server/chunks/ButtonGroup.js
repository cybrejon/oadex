import { $ as attr_style } from "./index2.js";
function ButtonGroup($$renderer, $$props) {
  let { area_name, styles, children } = $$props;
  $$renderer.push(`<div${attr_style(styles, { "grid-area": area_name })} class="svelte-w49llb">`);
  children?.($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  ButtonGroup as B
};
