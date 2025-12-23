import { $ as attr_style, V as attr_class, W as attr } from "./index2.js";
import { I as Icon } from "./Icon.js";
function Button2($$renderer, $$props) {
  let {
    type = "button",
    icon,
    fn,
    link,
    active = false,
    disabled = false,
    styles,
    children
  } = $$props;
  if (type === "button") {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<button${attr_style(styles)} type="button"${attr_class("svelte-fthbn2", void 0, {
      "iconless-padding": !icon,
      "active": active,
      "disabled": disabled
    })}>`);
    if (icon) {
      $$renderer.push("<!--[-->");
      Icon($$renderer, { icon, style: "font-size: 24px;" });
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--> `);
    children?.($$renderer);
    $$renderer.push(`<!----></button>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> `);
  if (type === "link") {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<a${attr_style(styles)}${attr("href", link)}${attr_class("svelte-fthbn2", void 0, {
      "iconless-padding": !icon,
      "active": active,
      "disabled": disabled
    })}>`);
    if (icon) {
      $$renderer.push("<!--[-->");
      Icon($$renderer, { icon, style: "font-size: 24px;" });
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--> `);
    children?.($$renderer);
    $$renderer.push(`<!----></a>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]-->`);
}
export {
  Button2 as B
};
