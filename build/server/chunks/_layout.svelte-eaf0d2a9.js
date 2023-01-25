import { c as create_ssr_component, b as subscribe, v as validate_component, d as add_attribute, e as escape, f as null_to_empty } from './index-8bfb30f2.js';
import { p as page } from './stores-45468398.js';

const banner = "/_app/immutable/assets/banner4-8b315b00.png";
const css = {
  code: ".banner-anchor.svelte-16o26wo{display:block}img.svelte-16o26wo{width:250px;filter:drop-shadow(-60px 0 60px #ccfe0516)}.main-header.svelte-16o26wo{padding-top:20px}.main-header--inner.svelte-16o26wo{display:flex;align-items:center;justify-content:space-between}ul.svelte-16o26wo{list-style-type:none;display:flex;column-gap:10px}.nav-item.svelte-16o26wo{background-color:rgba(255, 255, 255, 0.118);border:2px solid rgba(255, 255, 255, 0.189);box-shadow:0 8px #282a2f;border-radius:10px;text-decoration:none;display:block;color:#ffffffad;padding:10px 20px 8px 20px;font-weight:800;transition:.1s}.nav-item.svelte-16o26wo:hover{background-color:#CDFE05;color:#282a2f;border-color:transparent}.nav-item.svelte-16o26wo:active{box-shadow:none;transform:translateY(8px)}.nav-item--active.svelte-16o26wo{pointer-events:none;transform:translateY(8px);background-color:#2e3035;border-color:transparent;box-shadow:none}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active_path } = $$props;
  if ($$props.active_path === void 0 && $$bindings.active_path && active_path !== void 0)
    $$bindings.active_path(active_path);
  $$result.css.add(css);
  return `<div class="${"main-header svelte-16o26wo"}"><div class="${"main-header--inner svelte-16o26wo"}"><div class="${"banner-container header-item"}"><a class="${"banner-anchor svelte-16o26wo"}" href="${"/"}"><img${add_attribute("src", banner, 0)} alt="${"banner"}" class="${"svelte-16o26wo"}"></a></div>
    <ul class="${"header-item svelte-16o26wo"}"><li><a class="${escape(
    null_to_empty(active_path === "/" ? "nav-item nav-item--active" : "nav-item"),
    true
  ) + " svelte-16o26wo"}" href="${"/"}">SHIKIS</a></li>
      <li><a class="${escape(
    null_to_empty(active_path === "/items" ? "nav-item nav-item--active" : "nav-item"),
    true
  ) + " svelte-16o26wo"}" href="${"/items"}">ITEMS</a></li>
      <li><a class="${escape(
    null_to_empty(active_path === "/onmyodos" ? "nav-item nav-item--active" : "nav-item"),
    true
  ) + " svelte-16o26wo"}" href="${"/onmyodos"}">ONMYODOS</a></li>
      <li><a class="${escape(
    null_to_empty(active_path === "/spells" ? "nav-item nav-item--active" : "nav-item"),
    true
  ) + " svelte-16o26wo"}" href="${"/spells"}">SPELLS</a></li></ul></div>
</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let curr_page;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  curr_page = $page.url.pathname;
  $$unsubscribe_page();
  return `<div class="${"main-container"}">${validate_component(Header, "Header").$$render($$result, { active_path: curr_page }, {}, {})}
  ${slots.default ? slots.default({}) : ``}</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-eaf0d2a9.js.map
