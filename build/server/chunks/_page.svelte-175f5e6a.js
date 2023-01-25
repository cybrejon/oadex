import { c as create_ssr_component, b as subscribe, o as onDestroy, v as validate_component, d as add_attribute, h as each, e as escape, f as null_to_empty, i as compute_rest_props, j as spread, k as escape_attribute_value, l as escape_object } from './index-8bfb30f2.js';
import { r as role_config, h as hasBeenLeft, i as isAscending, s as shikiga_data, a as active_role, b as images } from './store-539b4fa8.js';
import Fuse from 'fuse.js';
import './index2-d3de44d4.js';
import './images-97e4a5af.js';

const css$1 = {
  code: ".toggles-wrapper.svelte-88slbc{display:flex;justify-content:flex-end;align-items:center}.toggles-container.svelte-88slbc{transition:.2s;display:flex;justify-content:center;align-items:center;column-gap:10px;border-radius:10px}button.svelte-88slbc{background-color:rgba(255, 255, 255, 0.118);font-family:'Montserrat', sans-serif;font-weight:800;color:#ffffffad;border-radius:6px;padding:7px 7px 5px 7px;border:3px solid transparent;transition:.1s}button.svelte-88slbc:hover{background-color:#ffffff46;border-color:#ffffff31}button.svelte-88slbc:active{background-color:#ccfe0533;border-color:transparent;color:#CDFE05}.active-toggle.svelte-88slbc{background-color:#CDFE05;color:#282A2F;pointer-events:none}",
  map: null
};
const Toggles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { buttons = [] } = $$props;
  if ($$props.buttons === void 0 && $$bindings.buttons && buttons !== void 0)
    $$bindings.buttons(buttons);
  $$result.css.add(css$1);
  return `<div class="${"toggles-wrapper svelte-88slbc"}"><div class="${"toggles-container svelte-88slbc"}">${each(buttons, (btn) => {
    return `<button class="${escape(null_to_empty(btn.active_indicator === btn.active_value && "active-toggle"), true) + " svelte-88slbc"}">${escape(btn.name)}</button>`;
  })}</div>
</div>`;
});
const LazyImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cssClass;
  let $$restProps = compute_rest_props($$props, ["placeholder", "src", "alt", "options"]);
  let { placeholder } = $$props;
  let { src } = $$props;
  let { alt } = $$props;
  let { options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0
  } } = $$props;
  let imgElement;
  let path;
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  path = placeholder;
  cssClass = $$props.class || "";
  return `<img${spread(
    [
      { src: escape_attribute_value(path) },
      { alt: escape_attribute_value(alt) },
      escape_object($$restProps),
      {
        class: "svelte-lazy-image " + escape(cssClass, true)
      }
    ],
    {
      classes: ""
    }
  )}${add_attribute("this", imgElement, 0)}>`;
});
const css = {
  code: "@keyframes svelte-7kuowm-fade{from{opacity:.5;filter:brightness(.8);box-shadow:0 0 #282A2F}to{opacity:1;filter:brightness(1);box-shadow:0 8px #282A2F}}.shiki-card-anchor.svelte-7kuowm{text-decoration:none}.shiki-card.svelte-7kuowm{overflow:hidden;border:4px solid #585A5F;background-color:#42444A;box-shadow:0 8px #282A2F;border-radius:10px;width:100px;height:140px;transition:.1s;animation:svelte-7kuowm-fade .3s}.shiki-card.svelte-7kuowm:hover{transform:translateY(-5px);box-shadow:0 13px #282A2F;background-color:#585A5F;border-color:#73757c}.shiki-card.svelte-7kuowm:active{transform:translateY(8px);box-shadow:none;border-color:transparent;background-color:#585A5F}.sc-image-container.svelte-7kuowm{transition:.2s;padding:5px 5px 0 5px}.sc-text-container.svelte-7kuowm{display:flex;justify-content:center;align-items:center;height:45px}.shikigami-name.svelte-7kuowm{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:80px;font-weight:900;color:#fff;font-size:.8rem;text-align:center}",
  map: null
};
const ShikiCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slug } = $$props;
  let { src } = $$props;
  let { shiki_name } = $$props;
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.shiki_name === void 0 && $$bindings.shiki_name && shiki_name !== void 0)
    $$bindings.shiki_name(shiki_name);
  $$result.css.add(css);
  return `<a href="${"/shikigami/" + escape(slug, true)}" class="${"shiki-card-anchor svelte-7kuowm"}"><div class="${"shiki-card svelte-7kuowm"}"><div class="${"sc-image-container svelte-7kuowm"}">
      ${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      class: "shikigami-image",
      alt: "shikigami portrait",
      src
    },
    {},
    {}
  )}</div>
    <div class="${"sc-text-container svelte-7kuowm"}"><p class="${"shikigami-name svelte-7kuowm"}">${escape(shiki_name)}</p></div></div>
</a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let role;
  let $role_config, $$unsubscribe_role_config;
  let $hasBeenLeft, $$unsubscribe_hasBeenLeft;
  let $isAscending, $$unsubscribe_isAscending;
  let $shikiga_data, $$unsubscribe_shikiga_data;
  let $active_role, $$unsubscribe_active_role;
  let $images, $$unsubscribe_images;
  $$unsubscribe_role_config = subscribe(role_config, (value) => $role_config = value);
  $$unsubscribe_hasBeenLeft = subscribe(hasBeenLeft, (value) => $hasBeenLeft = value);
  $$unsubscribe_isAscending = subscribe(isAscending, (value) => $isAscending = value);
  $$unsubscribe_shikiga_data = subscribe(shikiga_data, (value) => $shikiga_data = value);
  $$unsubscribe_active_role = subscribe(active_role, (value) => $active_role = value);
  $$unsubscribe_images = subscribe(images, (value) => $images = value);
  const shiki_names = Object.keys($shikiga_data).sort();
  const toggleRole = (r) => () => {
    r === "all" ? role = shiki_names.sort() : role = shiki_names.filter((shiki) => $shikiga_data[shiki].式神定位[0] === r).sort();
    active_role.update((role2) => r);
    search_value = "";
    $isAscending ? role = role.sort() : role = role.sort().reverse();
    role_config.update((roles) => role);
    hasBeenLeft.update((bool) => false);
  };
  let search_value;
  new Fuse(shiki_names);
  function sortAscend() {
    $hasBeenLeft ? role_config.update((c) => c = c.sort()) : role = role.sort();
    role = role.sort();
    isAscending.update((bool) => true);
    search_value = "";
  }
  function sortDescend() {
    $hasBeenLeft ? role_config.update((c) => c = c.sort().reverse()) : role = role.sort().reverse();
    isAscending.update((bool) => false);
    search_value = "";
  }
  onDestroy(() => {
    !$role_config.length == 0 ? hasBeenLeft.update((bool) => true) : hasBeenLeft.update((bool) => false);
  });
  role = shiki_names;
  $$unsubscribe_role_config();
  $$unsubscribe_hasBeenLeft();
  $$unsubscribe_isAscending();
  $$unsubscribe_shikiga_data();
  $$unsubscribe_active_role();
  $$unsubscribe_images();
  return `<div class="${"shiki-selection-header"}">${validate_component(Toggles, "Toggles").$$render(
    $$result,
    {
      buttons: [
        {
          name: "ALL",
          active_indicator: $active_role,
          active_value: "all",
          fn: toggleRole("all")
        },
        {
          name: "SAMURAI",
          active_indicator: $active_role,
          active_value: "侍",
          fn: toggleRole("侍")
        },
        {
          name: "NINJA",
          active_indicator: $active_role,
          active_value: "忍",
          fn: toggleRole("忍")
        },
        {
          name: "MARKSMAN",
          active_indicator: $active_role,
          active_value: "射",
          fn: toggleRole("射")
        },
        {
          name: "TANK",
          active_indicator: $active_role,
          active_value: "守",
          fn: toggleRole("守")
        },
        {
          name: "MAGE",
          active_indicator: $active_role,
          active_value: "巫",
          fn: toggleRole("巫")
        },
        {
          name: "SUPPORT",
          active_indicator: $active_role,
          active_value: "祝",
          fn: toggleRole("祝")
        }
      ]
    },
    {},
    {}
  )}
    <div class="${"filter-container"}"><input id="${"filter-input"}" class="${"filter-input"}" type="${"text"}" placeholder="${"Filter"}"${add_attribute("value", search_value, 0)}></div>
    ${validate_component(Toggles, "Toggles").$$render(
    $$result,
    {
      buttons: [
        {
          name: "A-Z",
          active_indicator: $isAscending,
          active_value: true,
          fn: sortAscend
        },
        {
          name: "Z-A",
          active_indicator: $isAscending,
          active_value: false,
          fn: sortDescend
        }
      ]
    },
    {},
    {}
  )}</div>


<div class="${"shiki-selection-container"}">${$hasBeenLeft ? `${each($role_config, (shiki) => {
    return `${validate_component(ShikiCard, "ShikiCard").$$render(
      $$result,
      {
        slug: $shikiga_data[shiki].式神ID,
        src: $images[$shikiga_data[shiki].式神方头像],
        shiki_name: shiki
      },
      {},
      {}
    )}`;
  })}` : `${each(role, (shiki) => {
    return `${validate_component(ShikiCard, "ShikiCard").$$render(
      $$result,
      {
        slug: $shikiga_data[shiki].式神ID,
        src: $images[$shikiga_data[shiki].式神方头像],
        shiki_name: shiki
      },
      {},
      {}
    )}`;
  })}`}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-175f5e6a.js.map
