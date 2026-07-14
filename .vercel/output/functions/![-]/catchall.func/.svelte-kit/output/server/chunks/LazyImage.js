import { a7 as sanitize_props, a8 as rest_props, a9 as spread_attributes, a0 as bind_props, a3 as stringify } from "./index2.js";
import { f as fallback } from "./context.js";
function LazyImage($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["placeholder", "src", "alt", "options"]);
  $$renderer.component(($$renderer2) => {
    let cssClass;
    let placeholder = $$props["placeholder"];
    let src = $$props["src"];
    let alt = $$props["alt"];
    let options = fallback($$props["options"], () => ({ root: null, rootMargin: "0px 0px 0px 0px", threshold: 0 }), true);
    let path;
    let loaded = false;
    path = placeholder;
    cssClass = $$sanitized_props.class || "";
    $$renderer2.push(`<img${spread_attributes(
      {
        src: path,
        alt,
        ...$$restProps,
        class: `svelte-lazy-image ${stringify(cssClass)}`
      },
      null,
      { "svelte-lazy-image--loaded": loaded }
    )} onload="this.__e=event" onerror="this.__e=event"/>`);
    bind_props($$props, { placeholder, src, alt, options });
  });
}
export {
  LazyImage as L
};
