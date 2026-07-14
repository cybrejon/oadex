import { V as attr_class, a5 as clsx, X as ensure_array_like, $ as attr_style } from "./index2.js";
import { I as Icon } from "./Icon.js";
import { e as escape_html } from "./context.js";
function Toggles($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      buttons = [],
      anchor_direction,
      toggle_icon,
      no_collapse = false,
      collapsed = false,
      iconOnly = false,
      iconOnlyToggleStyle,
      iconOnlyButtonStyle
    } = $$props;
    let rootClass = "toggles-wrapper";
    let mobileTogleClass = "toggles-mobile-wrapper";
    if (no_collapse) {
      rootClass = "toggles-wrapper--no-collapse";
    }
    if (collapsed) {
      rootClass = "toggles-wrapper--collapsed";
      mobileTogleClass = "toggles-mobile-wrapper toggles-mobile-wrapper--collapsed";
    }
    $$renderer2.push(`<div${attr_class(clsx(rootClass), "svelte-1et4fnk")}><div class="toggles-container svelte-1et4fnk"><!--[-->`);
    const each_array = ensure_array_like(buttons);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let btn = each_array[$$index];
      if (iconOnly) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<button class="mobile-toggle-button svelte-1et4fnk"${attr_style(iconOnlyButtonStyle)} type="button">`);
        Icon($$renderer2, {
          icon: toggle_icon,
          style: iconOnlyToggleStyle ? iconOnlyToggleStyle : "font-size: 24px;"
        });
        $$renderer2.push(`<!----></button>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<button${attr_class(clsx(btn.active_indicator === btn.active_value && "active-toggle"), "svelte-1et4fnk")}>${escape_html(btn.name)}</button>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div> `);
    if (!no_collapse) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attr_class(clsx(mobileTogleClass), "svelte-1et4fnk")}><!--[-->`);
      const each_array_1 = ensure_array_like(buttons);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let btn = each_array_1[$$index_1];
        if (btn.active_indicator === btn.active_value) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<button class="mobile-toggle-button svelte-1et4fnk" type="button">`);
          Icon($$renderer2, {
            icon: toggle_icon,
            style: "font-size: 24px; margin-right: 5px;"
          });
          $$renderer2.push(`<!---->${escape_html(btn.name)}</button>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--> `);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  Toggles as T
};
