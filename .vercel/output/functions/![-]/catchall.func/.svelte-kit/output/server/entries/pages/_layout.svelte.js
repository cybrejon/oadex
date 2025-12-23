import { V as attr_class, W as attr, X as ensure_array_like, Y as store_get, Z as unsubscribe_stores, _ as head } from "../../chunks/index2.js";
import { I as Icon } from "../../chunks/Icon.js";
import Fuse from "fuse.js";
import { T as Toggles } from "../../chunks/Toggles.js";
import { e as escape_html } from "../../chunks/context.js";
import { p as page } from "../../chunks/index3.js";
import { w as writable } from "../../chunks/index.js";
import "clsx";
import { B as Button2 } from "../../chunks/Button2.js";
import { i as isLoading } from "../../chunks/store.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "../../chunks/client.js";
const favicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABY5JREFUWEetl39M1GUcx1/f730vfpieYBBJNMJIQdeaxtaSYsrS6RQOZSSBSySYLFjdNGQpYkuziZnOdCmQiG2IEmm4hhq0amw6x0odijllVFhGGAgCAnff9nyPu+PyDu+wz1933+d5Pu/35/fzSDjkSeBdIAEIA3Sj1v6PnxbgT+A0sB24IpRKI5pfAWqAKQ+DFBERQWZmJvHx8YSFhTE4OEhzczM1NTUcOXKEvr4+m3rxYxVwTBB4ArgABI0XXFEUCgsLyc/Px9fX16Wa1tZWsrKyqK+vt60PAC8KAsXAuvGC+/j4UFlZSVJS0gNVDA0NkZOTQ1lZmW1vtSBwGYh64GkXGwS4cK3RaLSvCrc3NDQgLI6MjCQuLg69Xm9fFyQSEhKoq6sT3+4KAv8Ak70l4Aq8qamJ9PR0Wlpa7Oqio6OpqKhgzpw59m/t7e1ERUXR09OjJWEXYPCGgCvws2fPsmjRIrq6hDpnMRgMnDlzhpiYGPuCyWRi165d3hOQJImjR4+SnJxsV9bR0aFZ1NnZ6daOadOmcenSJfz8/LQ9jY2NxMbGek9AHE5LS+PgwYNOsd23bx95eXlYLKLcXUtVVRUpKSnaYnd3N4GBgZ4TeMQHcrfJNH2n8uM3KqkrvCdRVFTE5s2bNQKiJwQEBHhGQIB/WKljnlHWDv9yQaVih5lg/euUHPDcE6WlpVqjEtLW1kZ4eLhnBDaV6khcbQUfLb9eU1FvpWJ8uQwJR6m5CkdISIhWHSIhhZSXl5ORkeEZgZVrZd4pdj8aAkglXCp1S8Lf35/a2lrmz5+vgYs8mTt3LqJyPCrDCRPh6xsKk6dYR8fQICh6kGyTBHBHoqCggOrqahYsWGB3XklJCdnZ2dp/twQkGR4LgcBgibs9KokZMqvfs3phoA8+NpkxZsrMjJHsI80VCdF0QkND7eCiSy5ZsoT+/n7XBHz94bVcGeNqmbBIyW7lvX7wsZawJtWfWfgo10zsYok3N+qYNULEFQnbGQGemJhIb2+vXY+TByJmShQf0xE+Y5Rv70s964d7A7A8aog/2mDGbInS7xX8JljXXJFwBe4Ugohoif0NOs3lnorwQs0BC3tP6QgIsp7ruKny23WV+Ng0wmVrYroDtxPw8cPwxXkFQcImV39WOV5q4a+bKpHPSSRlyjwe5kxucAD67qr25BTgOa+aaW1RiZknsX5TOpOH0zEalzu5fbSBWghS35YN6z5xlNnJCgtbss1atttEVMKG/ToWrri/H9gs18CvqI74SqBTZIaH3LdnjUDVRcXwzCyrddebVdJfGGbw3v2B0Ongg8P3k7BbPgrc0zBKhil0nb6pN4i6FrJ7vZmKYveMJ0yC6maF4FBHOKr2WtieZ/YU02mf9FQkXV9d1dvvA0WrzIgQjCVZhTJr3neErL8XjM8O8be483opUmAwXXXteoNwr5DK3WZ2mMYmEJcgsfO44gRVvt3MnoKxz7niJu4XXSeuKYbQCKtL79xWSZ45TOct96YkZcls3O88G36otWBK9D4MWhK+tUU22NqsgD1Xb8GUYEZ0v/+KosDnjYq1BY/I+QYLJqMZEQpvRSMQGIzhyyt6JgU4jp/71sLGlWZuj/KESNT1n+pYluUoRbFv7bLxgQs0QUBcYacvTJXYelhBDCGbdN9WOXnIwuUmVet0S9+Qmf68w/Lfr6ukzh6mr8dbu+37+4S2nYBJfFpVIJO7Vec0Zt2p7ulSWRNvpuUnR+MZB40TgoB4lF7UZgiwOE0if4/CxDFeCqLXF6Q8NLhodS/Z/CmuKuJxqvWDoKmQZpK1ths01TqSxWW3/YZK7SELlbst9I0j4UZ5SLwLxY3k8Ojp8jSwAVgKBIvNsgxBofCoAe50ojUa9aE8rj2CTgHbRh7E/Atdqxbmgn+vJAAAAABJRU5ErkJggg==";
const banner = "/_app/immutable/assets/banner4.DDMH2LIo.webp";
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { active_path, routeId, type } = $$props;
    if (type === "mobile") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mobile-nav svelte-11lpkcp"><div id="nav-overlay" class="overlay svelte-11lpkcp"></div> <button class="mobile-nav-toggle svelte-11lpkcp" type="button">`);
      Icon($$renderer2, {
        icon: "icon-park-outline:hamburger-button",
        style: "font-size: 24px;"
      });
      $$renderer2.push(`<!----></button> <ul id="mn" class="mobile-nav-ul svelte-11lpkcp"><li><a${attr_class(active_path === "/" || routeId === "/shikigami/[slug]" ? "nav-item nav-item--active" : "nav-item", "svelte-11lpkcp")} href="/">SHIKIS</a></li> <li><a${attr_class(active_path === "/items" ? "nav-item nav-item--active" : "nav-item", "svelte-11lpkcp")} href="/items">ITEMS</a></li> <li><a${attr_class(active_path === "/chart" ? "nav-item nav-item--active" : "nav-item", "svelte-11lpkcp")} href="/chart?mode=all">CHART</a></li></ul></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<ul class="desktop-nav svelte-11lpkcp"><li><a${attr_class(active_path === "/" || routeId === "/shikigami/[slug]" ? "nav-item nav-item--active" : "nav-item", "svelte-11lpkcp")} href="/">SHIKIS</a></li> <li><a${attr_class(active_path === "/items" ? "nav-item nav-item--active" : "nav-item", "svelte-11lpkcp")} href="/items">ITEMS</a></li> <li><a${attr_class(active_path === "/chart" ? "nav-item nav-item--active" : "nav-item", "svelte-11lpkcp")} href="/chart?mode=all">CHART</a></li></ul>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Search($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { searchIndex } = $$props;
    new Fuse(searchIndex, { keys: ["name", "keywords", "id"] });
    let searchValue = void 0;
    let results = [];
    let searchModalElement = void 0;
    function closeModal() {
      searchModalElement.close();
      searchValue = "";
    }
    $$renderer2.push(`<div class="search-toggle-container svelte-lm2811"><div class="search-icon-container svelte-lm2811">`);
    Icon($$renderer2, { icon: "iconamoon:search-fill", style: "font-size: 18px;" });
    $$renderer2.push(`<!----></div> <button class="search-modal-toggle svelte-lm2811" type="button"><span class="search-toggle-search-text svelte-lm2811">Search</span><span class="hint hint--toggle svelte-lm2811">Press <span class="key-code svelte-lm2811">/</span> to open search</span></button></div> <dialog class="svelte-lm2811"><div id="nav-overlay" class="overlay svelte-lm2811"></div> <div class="results svelte-lm2811"><div class="modal-searchbar-container svelte-lm2811"><div class="modal-searchbar-icon-container svelte-lm2811">`);
    Icon($$renderer2, {
      icon: "iconamoon:search-fill",
      style: "font-size: 22px; color: #ffffffe6;"
    });
    $$renderer2.push(`<!----></div> <input placeholder="Search" type="text"${attr("value", searchValue)} class="svelte-lm2811"/></div> <p class="hint svelte-lm2811">Press <span class="key-code svelte-lm2811">Escape</span> or <span class="key-code svelte-lm2811">/</span> to close search</p> <div class="results-list svelte-lm2811">`);
    if (results) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(results);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let result = each_array[$$index];
        $$renderer2.push(`<a${attr("href", result.item.path)} data-sveltekit-reload="" class="svelte-lm2811"><div class="result svelte-lm2811"><div class="result-icon-container svelte-lm2811"><img class="result-image svelte-lm2811"${attr("src", result.item.image)} alt="result thumbnail"/></div> <div class="result-text-container"><p class="result-name svelte-lm2811">${escape_html(result.item.name)}</p> <p class="result-type svelte-lm2811">${escape_html(result.item.type)} | ID: ${escape_html(result.item.id)}</p></div></div></a>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="close-button-wrapper svelte-lm2811">`);
    Toggles($$renderer2, {
      iconOnly: "true",
      iconOnlyButtonStyle: "padding: 10px; box-shadow: 0 8px #282a2f; border: 2px solid rgba(255, 255, 255, 0.189);",
      iconOnlyToggleStyle: "font-size: 30px;",
      no_collapse: "true",
      toggle_icon: "ic:round-close",
      anchor_direction: "left",
      buttons: [
        {
          name: "a",
          active_indicator: "a",
          active_value: "a",
          fn: () => closeModal()
        }
      ]
    });
    $$renderer2.push(`<!----></div></div></dialog>`);
  });
}
let isSideBarOpen = writable(false);
function SideBar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { children } = $$props;
    $$renderer2.push(`<button type="button" class="sidebar-toggle svelte-1y4dzmg">`);
    Icon($$renderer2, { icon: "heroicons-outline:menu", style: "font-size: 24px;" });
    $$renderer2.push(`<!----></button> `);
    if (store_get($$store_subs ??= {}, "$isSideBarOpen", isSideBarOpen)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="sidebar svelte-1y4dzmg"><div class="sidebar-content svelte-1y4dzmg"><div class="banner-container svelte-1y4dzmg"><a class="banner-anchor" href="/"><img class="banner svelte-1y4dzmg"${attr("src", banner)} alt="banner"/></a></div> <nav class="svelte-1y4dzmg"><a href="/"${attr_class("svelte-1y4dzmg", void 0, { "active": page.url.pathname === "/" })}>`);
      Icon($$renderer2, { icon: "ph:scroll-fill", style: "font-size: 24px;" });
      $$renderer2.push(`<!----> Shikigamis</a> <a href="/items"${attr_class("svelte-1y4dzmg", void 0, { "active": page.url.pathname === "/items" })}>`);
      Icon($$renderer2, { icon: "game-icons:spiral-bottle", style: "font-size: 24px;" });
      $$renderer2.push(`<!----> Items</a> <a href="/chart?mode=all"${attr_class("svelte-1y4dzmg", void 0, { "active": page.url.pathname === "/chart" })}>`);
      Icon($$renderer2, { icon: "tabler:table-filled", style: "font-size: 24px;" });
      $$renderer2.push(`<!----> Chart</a></nav> `);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div> <div contenteditable="false" class="sidebar-close-area"></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Header($$renderer, $$props) {
  let { active_path, routeId, searchIndex } = $$props;
  $$renderer.push(`<div class="main-header svelte-zne36e"><div class="main-header--inner svelte-zne36e"><div class="banner-container header-item"><a class="banner-anchor svelte-zne36e" href="/"><img${attr("src", banner)} alt="banner" class="svelte-zne36e"/></a></div> `);
  Search($$renderer, { searchIndex });
  $$renderer.push(`<!----> `);
  SideBar($$renderer, {});
  $$renderer.push(`<!----> <div class="desktop-nav-visibility-wrapper svelte-zne36e">`);
  Navbar($$renderer, { active_path, routeId });
  $$renderer.push(`<!----></div></div></div>`);
}
function Footer($$renderer) {
  $$renderer.push(`<div class="footer svelte-jz8lnl"><div class="footer-block svelte-jz8lnl"><div class="footer-links svelte-jz8lnl">`);
  Button2($$renderer, {
    icon: "mingcute:discord-fill",
    type: "link",
    link: "http://discord.gg/KGsaAet"
  });
  $$renderer.push(`<!----> `);
  Button2($$renderer, {
    icon: "mdi:github",
    type: "link",
    link: "https://github.com/cybrejon/oadex"
  });
  $$renderer.push(`<!----> `);
  Button2($$renderer, {
    icon: "tabler:api",
    type: "link",
    link: "https://github.com/cybrejon/onmyoji-arena-wiki-api"
  });
  $$renderer.push(`<!----></div> <p style="font-weight: 600;">OADex 2024, All rights reserved.</p></div></div>`);
}
function LoadingBar($$renderer) {
  var $$store_subs;
  if (store_get($$store_subs ??= {}, "$isLoading", isLoading)) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="container svelte-11l0deb"><div class="progressbar svelte-11l0deb"></div></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
var name = "@vercel/analytics";
var version = "1.5.0";
var initQueue = () => {
  if (window.va) return;
  window.va = function a(...params) {
    (window.vaq = window.vaq || []).push(params);
  };
};
function isBrowser() {
  return typeof window !== "undefined";
}
function detectEnvironment() {
  try {
    const env = process.env.NODE_ENV;
    if (env === "development" || env === "test") {
      return "development";
    }
  } catch (e) {
  }
  return "production";
}
function setMode(mode = "auto") {
  if (mode === "auto") {
    window.vam = detectEnvironment();
    return;
  }
  window.vam = mode;
}
function getMode() {
  const mode = isBrowser() ? window.vam : detectEnvironment();
  return mode || "production";
}
function isDevelopment() {
  return getMode() === "development";
}
function getScriptSrc(props) {
  if (props.scriptSrc) {
    return props.scriptSrc;
  }
  if (isDevelopment()) {
    return "https://va.vercel-scripts.com/v1/script.debug.js";
  }
  if (props.basePath) {
    return `${props.basePath}/insights/script.js`;
  }
  return "/_vercel/insights/script.js";
}
function inject(props = {
  debug: true
}) {
  var _a;
  if (!isBrowser()) return;
  setMode(props.mode);
  initQueue();
  if (props.beforeSend) {
    (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
  }
  const src = getScriptSrc(props);
  if (document.head.querySelector(`script[src*="${src}"]`)) return;
  const script = document.createElement("script");
  script.src = src;
  script.defer = true;
  script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
  script.dataset.sdkv = version;
  if (props.disableAutoTrack) {
    script.dataset.disableAutoTrack = "1";
  }
  if (props.endpoint) {
    script.dataset.endpoint = props.endpoint;
  } else if (props.basePath) {
    script.dataset.endpoint = `${props.basePath}/insights`;
  }
  if (props.dsn) {
    script.dataset.dsn = props.dsn;
  }
  script.onerror = () => {
    const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
    console.log(
      `[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`
    );
  };
  if (isDevelopment() && props.debug === false) {
    script.dataset.debug = "false";
  }
  document.head.appendChild(script);
}
function WarningStrip($$renderer) {
  let is_visible = true;
  $$renderer.push(`<div${attr_class("container svelte-1z00ngy", void 0, { "visible": is_visible })}>`);
  Icon($$renderer, { icon: "mingcute:alert-line" });
  $$renderer.push(`<!----> <p>OADex is experiencing problems. Please expect broken features and slow
    performance.</p> <button type="button" class="svelte-1z00ngy">Dismiss.</button></div>`);
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, children } = $$props;
    inject({ mode: "production" });
    const searchIndex = data.searchIndex;
    let curr_page = page.url.pathname;
    let routeId = page.route.id;
    head($$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="icon"${attr("href", favicon)}/>`);
    });
    WarningStrip($$renderer2);
    $$renderer2.push(`<!----> `);
    LoadingBar($$renderer2);
    $$renderer2.push(`<!----> <div class="main-container">`);
    Header($$renderer2, { active_path: curr_page, routeId, searchIndex });
    $$renderer2.push(`<!----> `);
    children?.($$renderer2);
    $$renderer2.push(`<!----> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _layout as default
};
