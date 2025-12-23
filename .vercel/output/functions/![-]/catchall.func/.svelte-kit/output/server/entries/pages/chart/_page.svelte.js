import { V as attr_class, a5 as clsx, X as ensure_array_like, W as attr, a3 as stringify, _ as head, a4 as build_title } from "../../../chunks/index2.js";
import { L as LazyImage } from "../../../chunks/LazyImage.js";
import { T as Toggles } from "../../../chunks/Toggles.js";
import { e as escape_html } from "../../../chunks/context.js";
function WinRates($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { wdata, mode, images, shikiName } = $$props;
    let _wdata = wdata;
    let classCurrentTab = "all";
    const filterByClass = (shikiClass) => () => {
      classCurrentTab = shikiClass;
      if (shikiClass == "all") {
        _wdata = wdata;
      } else {
        _wdata = wdata.filter((shiki) => {
          return shiki.shikiClass.includes(shikiClass);
        });
      }
    };
    let thText_wr = "⬆️ WR";
    let thText_pr = "PR";
    let thText_kda = "KDA";
    let thText_kills = "KILLS";
    const selectMode = (mode2) => () => {
      window.location = `/chart?mode=${mode2}`;
      thText_wr = "⬆️ WR";
      thText_pr = "PR";
      thText_kda = "KDA";
      thText_kills = "KILLS";
      classCurrentTab = "all";
    };
    $$renderer2.push(`<div class="wr-main-container svelte-lib2k4"><div${attr_class(clsx("main-header"), "svelte-lib2k4")}>`);
    {
      $$renderer2.push("<!--[-->");
      Toggles($$renderer2, {
        toggle_icon: "iconoir:nav-arrow-down",
        anchor_direction: "right",
        buttons: [
          {
            name: "ALL MODES",
            active_indicator: mode,
            active_value: "all",
            fn: selectMode("all")
          },
          {
            name: "NORMAL",
            active_indicator: mode,
            active_value: "noban",
            fn: selectMode("noban")
          },
          {
            name: "BAN",
            active_indicator: mode,
            active_value: "ban",
            fn: selectMode("ban")
          },
          {
            name: "FOGBAN",
            active_indicator: mode,
            active_value: "fogban",
            fn: selectMode("fogban")
          }
        ]
      });
      $$renderer2.push(`<!----> `);
      Toggles($$renderer2, {
        collapsed: "true",
        toggle_icon: "fluent:tag-question-mark-32-filled",
        anchor_direction: "right",
        buttons: [
          {
            name: "ALL",
            active_indicator: classCurrentTab,
            active_value: "all",
            fn: filterByClass("all")
          },
          {
            name: "SAMURAI",
            active_indicator: classCurrentTab,
            active_value: "侍",
            fn: filterByClass("侍")
          },
          {
            name: "NINJA",
            active_indicator: classCurrentTab,
            active_value: "忍",
            fn: filterByClass("忍")
          },
          {
            name: "MARKSMAN",
            active_indicator: classCurrentTab,
            active_value: "射",
            fn: filterByClass("射")
          },
          {
            name: "TANK",
            active_indicator: classCurrentTab,
            active_value: "守",
            fn: filterByClass("守")
          },
          {
            name: "MAGE",
            active_indicator: classCurrentTab,
            active_value: "巫",
            fn: filterByClass("巫")
          },
          {
            name: "SUPPORT",
            active_indicator: classCurrentTab,
            active_value: "祝",
            fn: filterByClass("祝")
          }
        ]
      });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="content"><table class="svelte-lib2k4"><thead class="svelte-lib2k4"><tr class="svelte-lib2k4"><th class="svelte-lib2k4">#</th><th class="svelte-lib2k4">📝</th><th class="th-toggle svelte-lib2k4">${escape_html(thText_wr)} <span class="nth svelte-lib2k4">- nth</span></th><th class="th-toggle svelte-lib2k4">${escape_html(thText_pr)}</th><th class="th-toggle svelte-lib2k4">${escape_html(thText_kda)}</th><th class="th-toggle svelte-lib2k4">${escape_html(thText_kills)}</th></tr></thead><tbody><!--[-->`);
      const each_array = ensure_array_like(_wdata);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let data = each_array[i];
        $$renderer2.push(`<tr${attr_class(clsx(shikiName === data.name ? "shiki-name-active" : ""), "svelte-lib2k4")}><td class="svelte-lib2k4">${escape_html(i + 1)}.</td><td class="shiki-name svelte-lib2k4">`);
        LazyImage($$renderer2, {
          class: "wr-shikigami-image",
          alt: "shikigami portrait",
          src: images[data.image]
        });
        $$renderer2.push(`<!----><a${attr("href", `/shikigami/${stringify(data.id)}`)} target="_blank" class="svelte-lib2k4">${escape_html(data.name)}</a></td><td${attr_class("svelte-lib2k4", void 0, {
          "red": data.wr < 50,
          "yellow": data.wr >= 50 && data.wr <= 51,
          "blue": data.wr >= 51
        })}>${escape_html(data.wr)}% <span class="nth svelte-lib2k4">- ${escape_html(data.number == 1 ? "🏆" : `${data.number}.`)}</span></td><td class="svelte-lib2k4">${escape_html(data.pickRate)}%</td><td class="svelte-lib2k4">${escape_html(data.kda)}</td><td class="svelte-lib2k4">${escape_html(data.kills)}</td></tr>`);
      }
      $$renderer2.push(`<!--]--></tbody></table></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let wrData = data.wrData;
    let images = data.images;
    let mode = data.mode;
    head($$renderer2, ($$renderer3) => {
      build_title($$renderer3, () => {
        $$renderer3.push(`<title>OADex | Chart</title>`);
      });
    });
    WinRates($$renderer2, { wdata: wrData, images, mode });
  });
}
export {
  _page as default
};
