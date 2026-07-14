import { $ as attr_style } from "./index2.js";
import { I as Icon } from "./Icon.js";
import { e as escape_html } from "./context.js";
function Note($$renderer, $$props) {
  let { text, area_name, styles, noIcon, container_margin } = $$props;
  $$renderer.push(`<div class="container svelte-1ulfomc"${attr_style("", { "grid-area": area_name, margin: container_margin })}>`);
  if (!noIcon) {
    $$renderer.push("<!--[-->");
    Icon($$renderer, { icon: "ic:round-warning", style: "font-size: 24px;" });
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> `);
  if (text) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<p${attr_style(styles)}>${escape_html(text)}</p>`);
  } else {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`<p>Soon!</p>`);
  }
  $$renderer.push(`<!--]--></div>`);
}
export {
  Note as N
};
