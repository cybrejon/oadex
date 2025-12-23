import { $ as attr_style, a0 as bind_props } from "./index2.js";
import { I as Icon } from "./Icon.js";
import { e as escape_html } from "./context.js";
function Dropdown($$renderer, $$props) {
  let {
    icon = "iconamoon:arrow-down-2-bold",
    label,
    activeLabel,
    styles,
    children
  } = $$props;
  let isOpen = false;
  function toggle() {
    isOpen = !isOpen;
  }
  $$renderer.push(`<div class="dropdown svelte-1fd3ybn"${attr_style(styles)}><button type="button" class="dropdown-toggle svelte-1fd3ybn">`);
  Icon($$renderer, { icon, style: "font-size: 24px;" });
  $$renderer.push(`<!----> `);
  if (label) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`${escape_html(label)}`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> `);
  if (activeLabel) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<span>${escape_html(activeLabel)}</span>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></button> `);
  if (isOpen) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="dropdown-items svelte-1fd3ybn">`);
    children?.($$renderer);
    $$renderer.push(`<!----></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { toggle });
}
export {
  Dropdown as D
};
