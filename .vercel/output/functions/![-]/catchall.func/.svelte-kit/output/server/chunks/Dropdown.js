import { $ as attr_style, a0 as bind_props } from "./index2.js";
import { o as onDestroy, I as Icon } from "./Icon.js";
import { e as escape_html } from "./context.js";
function Dropdown($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
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
    function handleClickOutside(event) {
    }
    onDestroy(() => {
      if (typeof document !== "undefined") {
        document.removeEventListener("click", handleClickOutside);
      }
    });
    $$renderer2.push(`<div class="dropdown svelte-1fd3ybn"${attr_style(styles)}><button type="button" class="dropdown-toggle svelte-1fd3ybn">`);
    Icon($$renderer2, { icon, style: "font-size: 24px;" });
    $$renderer2.push(`<!----> `);
    if (label) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`${escape_html(label)}`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (activeLabel) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span>${escape_html(activeLabel)}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></button> `);
    if (isOpen) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="dropdown-items svelte-1fd3ybn">`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { toggle });
  });
}
export {
  Dropdown as D
};
