import { X as ensure_array_like, V as attr_class, a3 as stringify, W as attr, $ as attr_style, Y as store_get, _ as head, Z as unsubscribe_stores, a4 as build_title } from "../../../../chunks/index2.js";
import { g as getContext, e as escape_html } from "../../../../chunks/context.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "clsx";
import "../../../../chunks/client.js";
import { N as Note } from "../../../../chunks/Note.js";
import { C as Container } from "../../../../chunks/Container.js";
import { h as highlight } from "../../../../chunks/highlighting.js";
import { B as Button2 } from "../../../../chunks/Button2.js";
import { D as Dropdown } from "../../../../chunks/Dropdown.js";
import { h as html, I as Icon } from "../../../../chunks/Icon.js";
import { T as Toggles } from "../../../../chunks/Toggles.js";
import { B as ButtonGroup } from "../../../../chunks/ButtonGroup.js";
import { p as page$1 } from "../../../../chunks/index3.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Card($$renderer, $$props) {
  let { title, content = [], children } = $$props;
  $$renderer.push(`<div class="card svelte-97fktp">`);
  if (title) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<p class="card-title svelte-97fktp">${escape_html(title)}</p>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <ul class="card-ul svelte-97fktp"><!--[-->`);
  const each_array = ensure_array_like(content);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    if (item) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<li class="card-li svelte-97fktp">${escape_html(item)}</li>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]--> `);
  children?.($$renderer);
  $$renderer.push(`<!----></ul></div>`);
}
function Basic($$renderer, $$props) {
  let { data, children } = $$props;
  let { name, classification, voices, lane, specialty } = data;
  $$renderer.push(`<div class="name-container"><p${attr_class(`name ${stringify(classification[0].toLowerCase())}-name`, "svelte-ylc7qx")}>📝 ${escape_html(name)}</p></div> <ul class="classification-ul svelte-ylc7qx"><!--[-->`);
  const each_array = ensure_array_like(classification);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let role = each_array[$$index];
    $$renderer.push(`<li${attr_class(`c-li ${stringify(role.toLowerCase())}`, "svelte-ylc7qx")}>${escape_html(role)}</li>`);
  }
  $$renderer.push(`<!--]--></ul> `);
  Card($$renderer, { title: "📍 LANE POSITION", content: [lane] });
  $$renderer.push(`<!----> `);
  Card($$renderer, { title: "⚖️ SPECIALTY", content: [specialty] });
  $$renderer.push(`<!----> `);
  Card($$renderer, {
    title: "Voice Actors",
    children: ($$renderer2) => {
      if (voices[0]) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<li class="vas-li svelte-ylc7qx"><span class="language svelte-ylc7qx">JP</span> - ${escape_html(voices[0])}</li>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (voices[1]) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<li class="vas-li svelte-ylc7qx"><span class="language svelte-ylc7qx">CN</span> - ${escape_html(voices[1])}</li>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (voices[2]) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<li class="vas-li svelte-ylc7qx"><span class="language svelte-ylc7qx">EN</span> - ${escape_html(voices[2])}</li>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (voices[3]) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<li class="vas-li svelte-ylc7qx"><span class="language svelte-ylc7qx">KR</span> - ${escape_html(voices[3])}</li>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
  });
  $$renderer.push(`<!----> `);
  children?.($$renderer);
  $$renderer.push(`<!---->`);
}
function Basic2($$renderer, $$props) {
  let { data, children } = $$props;
  let { difficulty, dps, cc, sustain, buffs, agility } = data;
  Card($$renderer, {
    content: [
      `${difficulty} - 🪜 Difficulty`,
      `${dps} - ⚔️ DPS Rating`,
      `${cc} - ⚓ CC Rating`,
      `${sustain} - 💪🏽 SUSTAIN Rating`,
      `${buffs} - 💊 BUFF Rating`,
      `${agility} - 🏃‍♀️ AGILITY Rating`
    ]
  });
  $$renderer.push(`<!----> `);
  children?.($$renderer);
  $$renderer.push(`<!---->`);
}
function Button($$renderer, $$props) {
  let { link, children } = $$props;
  {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<a rel="noreferrer" target="_blank"${attr("href", link)} class="btn svelte-18sv61c">`);
    children?.($$renderer);
    $$renderer.push(`<!----></a>`);
  }
  $$renderer.push(`<!--]-->`);
}
function Gallery($$renderer, $$props) {
  let { area_name, data, link } = $$props;
  let { image_url, image_alt } = data;
  Container($$renderer, {
    area_name,
    children: ($$renderer2) => {
      $$renderer2.push(`<img class="shiki-2d-art svelte-1vx56xt"${attr("alt", image_alt)}${attr("src", image_url)} onload="this.__e=event" onerror="this.__e=event"/> `);
      Button($$renderer2, {
        link,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->OPEN`);
        }
      });
      $$renderer2.push(`<!---->`);
    }
  });
}
function Stats($$renderer, $$props) {
  let { area_name, children } = $$props;
  Container($$renderer, {
    area_name,
    children: ($$renderer2) => {
      children?.($$renderer2);
      $$renderer2.push(`<!---->`);
    }
  });
}
function StatCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data = { property, value, grid_area } } = $$props;
    $$renderer2.push(`<div class="stat-card svelte-1s5op1f"${attr_style(`grid-area: ${stringify(data.grid_area && data.grid_area)};`)}><div class="stat-card-value-wrapper svelte-1s5op1f"><p class="stat-card-value svelte-1s5op1f">${escape_html(data.value)}</p></div> <div class="stat-card-property-wrapper svelte-1s5op1f"><p class="stat-card-property svelte-1s5op1f">${escape_html(data.property)}</p></div></div>`);
  });
}
function Skills($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { images, curr_shiki_obj } = $$props;
    let shikigami_skills = Object.keys(curr_shiki_obj.式神技能);
    let skills_data = shikigami_skills.map((skill) => {
      return {
        skill_name: curr_shiki_obj.式神技能[skill].技能名称,
        image: images[curr_shiki_obj.式神技能[skill].图标路径],
        description: curr_shiki_obj.式神技能[skill].技能描述,
        properties: curr_shiki_obj.式神技能[skill].技能成长
      };
    });
    let skill_name = curr_shiki_obj.式神技能.天生被动.技能名称;
    let skill_image = images[curr_shiki_obj.式神技能.天生被动.图标路径];
    let skill_description = highlight(curr_shiki_obj.式神技能.天生被动.技能描述);
    let skill_properties = curr_shiki_obj.式神技能.天生被动.技能成长;
    let skill_tab_indicator = 0;
    const changeSkillDisplayed = (i) => () => {
      skillsDropdown.toggle();
      skill_tab_indicator = i;
      skill_name = skills_data[i].skill_name;
      skill_image = skills_data[i].image;
      skill_properties = skills_data[i].properties;
      skill_description = highlight(skills_data[i].description);
    };
    let skill_prop_names = Object.keys(skill_properties);
    let skill_prop_names_unique = skill_prop_names.filter((char) => char != "冷却" && char != "消耗");
    let skill_properties_unique = skill_prop_names_unique.map((char) => {
      return { name: char, value: skill_properties[char] };
    });
    let skillsDropdown = void 0;
    let skill_position_name = { 0: "TRAIT", 1: "S2", 2: "ULTIMATE", 3: "PASSIVE", 4: "S3" };
    $$renderer2.push(`<div class="skill-tab-container svelte-1bvdq8h"><h3 class="stats-header">🔨 Skills</h3> `);
    Dropdown($$renderer2, {
      label: skill_position_name[skill_tab_indicator],
      children: ($$renderer3) => {
        Button2($$renderer3, {
          fn: changeSkillDisplayed(0),
          active: skill_tab_indicator === 0,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->TRAIT`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          fn: changeSkillDisplayed(3),
          active: skill_tab_indicator === 3,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->S1 / PASSIVE`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          fn: changeSkillDisplayed(1),
          active: skill_tab_indicator === 1,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->S2`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          fn: changeSkillDisplayed(4),
          active: skill_tab_indicator === 4,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->S3`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          fn: changeSkillDisplayed(2),
          active: skill_tab_indicator === 2,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->ULTIMATE`);
          }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <div class="skill-container svelte-1bvdq8h"><div class="skill-info-header-container svelte-1bvdq8h"><img class="skill-image svelte-1bvdq8h"${attr("src", skill_image)} alt="skill"/> <div class="skill-aux-info-wrapper svelte-1bvdq8h"><p class="skill-name svelte-1bvdq8h">${escape_html(skill_name)}</p> <div class="what-do-i-call-this-shit-now svelte-1bvdq8h"><div class="skill-aux-info svelte-1bvdq8h">`);
    if (skill_properties.冷却.length || !skill_properties.冷却[0] === null) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="aux-info-name">Ability Cooldown:</p> <p class="aux-info-values svelte-1bvdq8h">${escape_html(skill_properties.冷却.join(", "))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="skill-aux-info svelte-1bvdq8h">`);
    if (!skill_properties.消耗.every((cost) => cost === null)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="aux-info-name">Ability Mana Cost:</p> <p class="aux-info-values svelte-1bvdq8h">${escape_html(skill_properties.消耗.join(", "))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></div></div> <p class="skill-description svelte-1bvdq8h">${html(skill_description)}</p> <div class="skill-properties-container svelte-1bvdq8h"><!--[-->`);
    const each_array = ensure_array_like(skill_properties_unique);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let skill_prop = each_array[$$index_1];
      $$renderer2.push(`<div class="skill-property svelte-1bvdq8h"><p class="skill-property-name svelte-1bvdq8h">${escape_html(skill_prop.name)}</p> <div class="skill-property-values-container svelte-1bvdq8h"><!--[-->`);
      const each_array_1 = ensure_array_like(skill_prop.value);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let prop_value = each_array_1[$$index];
        $$renderer2.push(`<p class="skill-property-value"><span class="skill-property-value-lvl svelte-1bvdq8h">Lvl ${escape_html(skill_prop.value.indexOf(prop_value) + 1)}</span> <span class="skill-property-value-digit svelte-1bvdq8h">${escape_html(prop_value)}</span></p>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function Spells($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { spellData, images } = $$props;
    $$renderer2.push(`<div class="spells svelte-1vmdg2y"><!--[-->`);
    const each_array = ensure_array_like(spellData);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let spell = each_array[$$index];
      $$renderer2.push(`<div class="spell svelte-1vmdg2y"><div class="image-container svelte-1vmdg2y"><img${attr("src", images[spell.图标路径])} alt="spell" class="svelte-1vmdg2y"/></div> <div class="text-container"><p class="spell-name svelte-1vmdg2y">${escape_html(spell.灵咒名称)}</p> <p class="spell-description svelte-1vmdg2y">${html(highlight(spell.灵咒技能描述))}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function DamageTypePill($$renderer, $$props) {
  let { damage_type, children } = $$props;
  $$renderer.push(`<div${attr_class("container svelte-t8dbji", void 0, {
    "physical": damage_type === "physical",
    "magic": damage_type === "magic",
    "true": damage_type === "true"
  })}><p class="svelte-t8dbji">`);
  children?.($$renderer);
  $$renderer.push(`<!----></p></div>`);
}
function GuidesList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { guide_list } = $$props;
    let shiki_id = page$1.url.pathname.slice(11);
    $$renderer2.push(`<div class="list svelte-1dq07bj">`);
    if (guide_list) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(guide_list.list);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let guide = each_array[$$index];
        $$renderer2.push(`<a${attr("href", `${shiki_id}/guide/${guide.file_name.replace(".json", "")}?shikigami_name=${guide.shikigami_name}`)} class="svelte-1dq07bj"><div class="guide svelte-1dq07bj"><div class="guide--title-container svelte-1dq07bj">`);
        Icon($$renderer2, { icon: "lets-icons:book-fill", style: "font-size: 1.3rem;" });
        $$renderer2.push(`<!----> <p>${escape_html(guide.title)}</p></div></div></a>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p>No guides for this Shikigami yet. Join our <a href="http://discord.gg/KGsaAet" class="svelte-1dq07bj">Discord</a> server to submit a guide.</p>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let shiki_id = store_get($$store_subs ??= {}, "$page", page).url.pathname.slice(11);
    let { data } = $$props;
    const { dictionary } = data;
    const guide_list = data.guide_list;
    const shikiga_data = data.shikiga_data;
    const bioData = data.bioData;
    const images = data.images;
    const performance = data.performance;
    data.onmyodos;
    const spellData = data.spells;
    const curr_shiki_obj = shikiga_data;
    const scores = curr_shiki_obj.评分;
    const usage = curr_shiki_obj.式神攻略.replace(/#r/gi, "<br>");
    const mvsc_count = curr_shiki_obj.式神基础属性.移动速度.toString().split("").length;
    let base_movement_speed;
    mvsc_count >= 3 ? base_movement_speed = curr_shiki_obj.式神基础属性.移动速度.toString().slice(0, 2) + curr_shiki_obj.式神基础属性.移动速度.toString().slice(1, 2) : base_movement_speed = `${curr_shiki_obj.式神基础属性.移动速度.toString()}0`;
    const atk_speed = curr_shiki_obj.式神基础属性.攻击速度 * (1 + curr_shiki_obj.式神基础属性.攻速加成);
    const base_atk_speed = atk_speed.toFixed(2);
    const _growth_atk_speed = curr_shiki_obj.式神基础属性.攻速加成 + curr_shiki_obj.式神属性成长.攻速加成;
    _growth_atk_speed.toFixed(2);
    const stats = {
      atk: {
        base: curr_shiki_obj.式神基础属性.物理伤害,
        growth: curr_shiki_obj.式神属性成长.物理伤害
      },
      atk_speed: { base: base_atk_speed },
      mana: {
        base: curr_shiki_obj.式神基础属性.魔法上限,
        growth: curr_shiki_obj.式神属性成长.魔法上限
      },
      mana_regen: {
        base: curr_shiki_obj.式神基础属性.魔法回复,
        growth: curr_shiki_obj.式神属性成长.魔法回复
      },
      magic_armor: {
        base: curr_shiki_obj.式神基础属性.魔抗,
        growth: curr_shiki_obj.式神属性成长.魔抗
      },
      hp: {
        base: curr_shiki_obj.式神基础属性.生命值,
        growth: curr_shiki_obj.式神属性成长.生命值
      },
      hp_regen: {
        base: curr_shiki_obj.式神基础属性.生命恢复,
        growth: curr_shiki_obj.式神属性成长.生命恢复
      },
      physical_armor: {
        base: curr_shiki_obj.式神基础属性.护甲,
        growth: curr_shiki_obj.式神属性成长.护甲
      },
      movespeed: { base: base_movement_speed }
    };
    const skill_order_data = curr_shiki_obj.推荐加点顺序;
    let current_page = 1;
    const performancePagination = (page2) => () => {
      current_page = page2;
    };
    let basicPage = 1;
    const basicStatsPagination = (page2) => () => {
      basicPage = page2;
    };
    let is_order_visible = false;
    const orderDisplayToggle = () => () => {
      is_order_visible = !is_order_visible;
    };
    let isSpellsShown = false;
    const spellsDisplayToggle = () => () => {
      isSpellsShown = !isSpellsShown;
    };
    function getDamageType() {
      const skill_descriptions = curr_shiki_obj.式神技能.天生被动.技能描述 + curr_shiki_obj.式神技能.二技能.技能描述 + curr_shiki_obj.式神技能.四技能.技能描述 + curr_shiki_obj.式神技能.一技能.技能描述 + curr_shiki_obj.式神技能.三技能.技能描述;
      const damage_types = ["magic damage", "physical damage", "true damage"];
      return damage_types.filter((damage) => skill_descriptions.toLowerCase().includes(damage));
    }
    try {
      let disqus_config = function() {
        this.page.url = window.location.href;
        this.page.identifier = shiki_id;
      };
      (function() {
        let d = document;
        let s = d.createElement("script");
        s.src = "https://oadex.disqus.com/embed.js";
        (d.head || d.body).appendChild(s);
      })();
    } catch (error) {
      console.log("[cybrejon] could not load Disqus, this is expected during development");
    }
    head($$renderer2, ($$renderer3) => {
      build_title($$renderer3, () => {
        $$renderer3.push(`<title>OADex | ${escape_html(curr_shiki_obj.式神名称)}</title>`);
      });
    });
    $$renderer2.push(`<div class="container svelte-1gfy55l">`);
    Container($$renderer2, {
      area_name: "damage-type",
      styles: "align-items: center; flex-direction: row; gap: 10px; flex-wrap: wrap;",
      children: ($$renderer3) => {
        $$renderer3.push(`<p style="font-size: .9rem;">Damage type:</p> `);
        if (getDamageType().includes("physical damage")) {
          $$renderer3.push("<!--[-->");
          DamageTypePill($$renderer3, {
            damage_type: "physical",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Physical`);
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (getDamageType().includes("magic damage")) {
          $$renderer3.push("<!--[-->");
          DamageTypePill($$renderer3, {
            damage_type: "magic",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Magic`);
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (getDamageType().includes("true damage")) {
          $$renderer3.push("<!--[-->");
          DamageTypePill($$renderer3, {
            damage_type: "true",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->True`);
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
    $$renderer2.push(`<!----> `);
    Container($$renderer2, {
      area_name: "basic",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="performance-pager-container svelte-1gfy55l">`);
        ButtonGroup($$renderer3, {
          children: ($$renderer4) => {
            Button2($$renderer4, {
              fn: basicStatsPagination(1),
              active: basicPage === 1,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->BASIC`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              fn: basicStatsPagination(2),
              active: basicPage === 2,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->BIO`);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----></div> `);
        if (basicPage === 1) {
          $$renderer3.push("<!--[-->");
          Basic($$renderer3, {
            data: {
              name: curr_shiki_obj.式神名称,
              classification: curr_shiki_obj.式神定位.map((role) => dictionary.roles[role]),
              voices: curr_shiki_obj.cv名字,
              lane: dictionary.lanes[curr_shiki_obj.推荐分路],
              specialty: curr_shiki_obj.式神标签
            },
            children: ($$renderer4) => {
              Basic2($$renderer4, {
                data: {
                  difficulty: dictionary.difficulty[scores.难度],
                  dps: dictionary.scores[scores.输出],
                  cc: dictionary.scores[scores.控制],
                  sustain: dictionary.scores[scores.生存],
                  buffs: dictionary.scores[scores.增益],
                  agility: dictionary.scores[scores.敏捷]
                }
              });
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (basicPage === 2) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="bio-container svelte-1gfy55l">`);
          if (bioData) {
            $$renderer3.push("<!--[-->");
            if (bioData.bio1) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<div class="bio svelte-1gfy55l"><h3 class="bio-header svelte-1gfy55l">📔 Bio 1</h3> <p class="bio-text svelte-1gfy55l">${escape_html(bioData.bio1)}</p> <div class="bio-contributor-container svelte-1gfy55l">`);
              if (bioData.bio1 === "no bio yet") {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<p class="bio-contributor svelte-1gfy55l">Join <a href="http://discord.gg/KGsaAet">my discord</a> to submit
                    missing bios!</p>`);
              } else {
                $$renderer3.push("<!--[!-->");
                $$renderer3.push(`<p class="bio-contributor svelte-1gfy55l">Submitter: ${escape_html(bioData.contributor)}</p> <p class="bio-contributor svelte-1gfy55l">Source: <a href="https://onmyoji.fandom.com/wiki/Onmyoji_Wiki">onmyoji.fandom.com</a></p>`);
              }
              $$renderer3.push(`<!--]--></div></div>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (bioData.bio2) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<div class="bio svelte-1gfy55l"><h3 class="bio-header svelte-1gfy55l">📔 Bio 2</h3> <p class="bio-text svelte-1gfy55l">${escape_html(bioData.bio2)}</p> <div class="bio-contributor-container svelte-1gfy55l">`);
              if (bioData.bio2 === "no bio yet") {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<p class="bio-contributor svelte-1gfy55l">Join <a href="http://discord.gg/KGsaAet">my discord</a> to submit
                    missing bios!</p>`);
              } else {
                $$renderer3.push("<!--[!-->");
                $$renderer3.push(`<p class="bio-contributor svelte-1gfy55l">Submitter: ${escape_html(bioData.contributor)}</p> <p class="bio-contributor svelte-1gfy55l">Source: <a href="https://onmyoji.fandom.com/wiki/Onmyoji_Wiki">onmyoji.fandom.com</a></p>`);
              }
              $$renderer3.push(`<!--]--></div></div>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (bioData.bio3) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<div class="bio svelte-1gfy55l"><h3 class="bio-header svelte-1gfy55l">📔 Bio 3</h3> <p class="bio-text svelte-1gfy55l">${escape_html(bioData.bio3)}</p> <div class="bio-contributor-container svelte-1gfy55l">`);
              if (bioData.bio3 === "no bio yet") {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<p class="bio-contributor svelte-1gfy55l">Join <a href="http://discord.gg/KGsaAet">my discord</a> to submit
                    missing bios!</p>`);
              } else {
                $$renderer3.push("<!--[!-->");
                $$renderer3.push(`<p class="bio-contributor svelte-1gfy55l">Submitter: ${escape_html(bioData.contributor)}</p> <p class="bio-contributor svelte-1gfy55l">Source: <a href="https://onmyoji.fandom.com/wiki/Onmyoji_Wiki">onmyoji.fandom.com</a></p>`);
              }
              $$renderer3.push(`<!--]--></div></div>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (bioData.bio4) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<div class="bio svelte-1gfy55l"><h3 class="bio-header svelte-1gfy55l">📔 Bio 4</h3> <p class="bio-text svelte-1gfy55l">${escape_html(bioData.bio4)}</p> <div class="bio-contributor-container svelte-1gfy55l">`);
              if (bioData.bio4 === "no bio yet") {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<p class="bio-contributor svelte-1gfy55l">Join <a href="http://discord.gg/KGsaAet">my discord</a> to submit
                    missing bios!</p>`);
              } else {
                $$renderer3.push("<!--[!-->");
                $$renderer3.push(`<p class="bio-contributor svelte-1gfy55l">Submitter: ${escape_html(bioData.contributor)}</p> <p class="bio-contributor svelte-1gfy55l">Source: <a href="https://onmyoji.fandom.com/wiki/Onmyoji_Wiki">onmyoji.fandom.com</a></p>`);
              }
              $$renderer3.push(`<!--]--></div></div>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (bioData.bio5) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<div class="bio svelte-1gfy55l"><h3 class="bio-header svelte-1gfy55l">📔 Bio 5</h3> <p class="bio-text svelte-1gfy55l">${escape_html(bioData.bio5)}</p> <div class="bio-contributor-container svelte-1gfy55l">`);
              if (bioData.bio5 === "no bio yet") {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<p class="bio-contributor svelte-1gfy55l">Join <a href="http://discord.gg/KGsaAet">my discord</a> to submit
                    missing bios!</p>`);
              } else {
                $$renderer3.push("<!--[!-->");
                $$renderer3.push(`<p class="bio-contributor svelte-1gfy55l">Submitter: ${escape_html(bioData.contributor)}</p> <p class="bio-contributor svelte-1gfy55l">Source: <a href="https://onmyoji.fandom.com/wiki/Onmyoji_Wiki">onmyoji.fandom.com</a></p>`);
              }
              $$renderer3.push(`<!--]--></div></div>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]-->`);
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<div class="bio svelte-1gfy55l"><h3 class="bio-header svelte-1gfy55l">📔 Bio 1</h3> <p class="bio-text svelte-1gfy55l">No bio yet.</p> <div class="bio-contributor-container svelte-1gfy55l"><p class="bio-contributor svelte-1gfy55l">Join <a href="http://discord.gg/KGsaAet">my discord</a> to submit
                missing bios!</p></div></div>`);
          }
          $$renderer3.push(`<!--]--></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
    $$renderer2.push(`<!----> `);
    Gallery($$renderer2, {
      area_name: "gallery",
      link: images[curr_shiki_obj.式神全身像],
      data: {
        image_url: images[curr_shiki_obj.式神全身像],
        image_alt: curr_shiki_obj.式神名称
      }
    });
    $$renderer2.push(`<!----> `);
    Container($$renderer2, {
      area_name: "basic2",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="performance-pager-container svelte-1gfy55l">`);
        ButtonGroup($$renderer3, {
          children: ($$renderer4) => {
            Button2($$renderer4, {
              fn: performancePagination(1),
              active: current_page === 1,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->PERFORMANCE`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              fn: performancePagination(2),
              active: current_page === 2,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->KDA/KILLS`);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----></div> `);
        if (current_page === 1) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="grid-container svelte-1gfy55l">`);
          Note($$renderer3, {
            area_name: "1 / 1 / 2 / 5",
            text: "ALL MODES",
            styles: "font-size: .8rem; text-align: center;",
            noIcon: "True"
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "🏆 Win-rate",
              value: `${performance.win_rate.all}%`,
              grid_area: "2 / 1 / 3 / 3"
            }
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "🏅 Pick-rate",
              value: `${performance.pick_rate.all}%`,
              grid_area: "2 / 3 / 3 / 5"
            }
          });
          $$renderer3.push(`<!----></div> <div class="grid-container svelte-1gfy55l">`);
          Note($$renderer3, {
            area_name: "1 / 1 / 2 / 5",
            text: "PRE-ELITE",
            styles: "font-size: .8rem; text-align: center;",
            noIcon: "True"
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "🏆 Win-rate",
              value: `${performance.win_rate.noban}%`,
              grid_area: "2 / 1 / 3 / 3"
            }
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "🏅 Pick-rate",
              value: `${performance.pick_rate.noban}%`,
              grid_area: "2 / 3 / 3 / 5"
            }
          });
          $$renderer3.push(`<!----></div> <div class="grid-container svelte-1gfy55l">`);
          Note($$renderer3, {
            area_name: "1 / 1 / 2 / 5",
            text: "BAN MODE",
            styles: "font-size: .8rem; text-align: center;",
            noIcon: "True"
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "🏆 Win-rate",
              value: `${performance.win_rate.ban}%`,
              grid_area: "2 / 1 / 3 / 3"
            }
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "🏅 Pick-rate",
              value: `${performance.pick_rate.ban}%`,
              grid_area: "2 / 3 / 3 / 5"
            }
          });
          $$renderer3.push(`<!----></div> <div class="grid-container svelte-1gfy55l">`);
          Note($$renderer3, {
            area_name: "1 / 1 / 2 / 5",
            text: "FOG BAN MODE",
            styles: "font-size: .8rem; text-align: center;",
            noIcon: "True"
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "🏆 Win-rate",
              value: `${performance.win_rate.fogban}%`,
              grid_area: "2 / 1 / 3 / 3"
            }
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "🏅 Pick-rate",
              value: `${performance.pick_rate.fogban}%`,
              grid_area: "2 / 3 / 3 / 5"
            }
          });
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (current_page === 2) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="grid-container svelte-1gfy55l">`);
          Note($$renderer3, {
            area_name: "1 / 1 / 2 / 5",
            text: "ALL MODES",
            styles: "font-size: .8rem; text-align: center;",
            noIcon: "True"
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "AVG K/D/A",
              value: `${performance.kda.all}`,
              grid_area: "2 / 1 / 3 / 3"
            }
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "AVG KILLS",
              value: `${performance.avg_kills.all}`,
              grid_area: "2 / 3 / 3 / 5"
            }
          });
          $$renderer3.push(`<!----></div> <div class="grid-container svelte-1gfy55l">`);
          Note($$renderer3, {
            area_name: "1 / 1 / 2 / 5",
            text: "PRE-ELITE",
            styles: "font-size: .8rem; text-align: center;",
            noIcon: "True"
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "AVG K/D/A",
              value: `${performance.kda.noban}`,
              grid_area: "2 / 1 / 3 / 3"
            }
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "AVG KILLS",
              value: `${performance.avg_kills.noban}`,
              grid_area: "2 / 3 / 3 / 5"
            }
          });
          $$renderer3.push(`<!----></div> <div class="grid-container svelte-1gfy55l">`);
          Note($$renderer3, {
            area_name: "1 / 1 / 2 / 5",
            text: "BAN MODE",
            styles: "font-size: .8rem; text-align: center;",
            noIcon: "True"
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "AVG K/D/A",
              value: `${performance.kda.ban}`,
              grid_area: "2 / 1 / 3 / 3"
            }
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "AVG KILLS",
              value: `${performance.avg_kills.ban}`,
              grid_area: "2 / 3 / 3 / 5"
            }
          });
          $$renderer3.push(`<!----></div> <div class="grid-container svelte-1gfy55l">`);
          Note($$renderer3, {
            area_name: "1 / 1 / 2 / 5",
            text: "FOG BAN MODE",
            styles: "font-size: .8rem; text-align: center;",
            noIcon: "True"
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "AVG K/D/A",
              value: `${performance.kda.fogban}`,
              grid_area: "2 / 1 / 3 / 3"
            }
          });
          $$renderer3.push(`<!----> `);
          StatCard($$renderer3, {
            data: {
              property: "AVG KILLS",
              value: `${performance.avg_kills.fogban}`,
              grid_area: "2 / 3 / 3 / 5"
            }
          });
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        Note($$renderer3, {
          text: "Source: China server",
          styles: "font-size: .8rem; color: rgba(255, 255, 255, .7); text-align: center;",
          noIcon: "True"
        });
        $$renderer3.push(`<!---->`);
      }
    });
    $$renderer2.push(`<!----> `);
    Stats($$renderer2, {
      area_name: "stats-1",
      children: ($$renderer3) => {
        $$renderer3.push(`<h3 class="stats-header">🧬 Base Stats</h3> <table class="stats-table svelte-1gfy55l"><thead><tr><th class="svelte-1gfy55l">📄 Property</th><th class="svelte-1gfy55l">📝 Value</th><th class="svelte-1gfy55l">⏫ Growth</th></tr></thead><tbody><tr><td class="stat-property svelte-1gfy55l">⚔️ Attack damage</td><td class="stat-value svelte-1gfy55l">${escape_html(stats.atk.base)}</td><td class="stat-growth svelte-1gfy55l">+ ${escape_html(stats.atk.growth)} /lvl</td></tr><tr><td class="stat-property svelte-1gfy55l">⚔️ Attack speed</td><td class="stat-value svelte-1gfy55l">${escape_html(stats.atk_speed.base)} aa/s</td><td class="stat-growth svelte-1gfy55l">HELP</td></tr><tr><td class="stat-property svelte-1gfy55l">💫 Mana points</td><td class="stat-value svelte-1gfy55l">${escape_html(stats.mana.base)}</td><td class="stat-growth svelte-1gfy55l">+ ${escape_html(stats.mana.growth)} /lvl</td></tr><tr><td class="stat-property svelte-1gfy55l">💫 Mana Regen</td><td class="stat-value svelte-1gfy55l">${escape_html(stats.mana_regen.base)} mp/s</td><td class="stat-growth svelte-1gfy55l">+ ${escape_html(stats.mana_regen.growth)} /lvl</td></tr><tr><td class="stat-property svelte-1gfy55l">💫 Magic armor</td><td class="stat-value svelte-1gfy55l">${escape_html(stats.magic_armor.base)}</td><td class="stat-growth svelte-1gfy55l">+ ${escape_html(stats.magic_armor.growth)} /lvl</td></tr><tr><td class="stat-property svelte-1gfy55l">⚕️ Health points</td><td class="stat-value svelte-1gfy55l">${escape_html(stats.hp.base)} hp</td><td class="stat-growth svelte-1gfy55l">+ ${escape_html(stats.hp.growth)} /lvl</td></tr><tr><td class="stat-property svelte-1gfy55l">⚕️ HP regeneration</td><td class="stat-value svelte-1gfy55l">${escape_html(stats.hp_regen.base)} hp/s</td><td class="stat-growth svelte-1gfy55l">+ ${escape_html(stats.hp_regen.growth)} /lvl</td></tr><tr><td class="stat-property svelte-1gfy55l">⚕️ Physical armor</td><td class="stat-value svelte-1gfy55l">${escape_html(stats.physical_armor.base)}</td><td class="stat-growth svelte-1gfy55l">+ ${escape_html(stats.physical_armor.growth)} /lvl</td></tr><tr><td class="stat-property svelte-1gfy55l">🏃 Movement speed</td><td class="stat-value svelte-1gfy55l">${escape_html(stats.movespeed.base)}</td></tr></tbody></table>`);
      }
    });
    $$renderer2.push(`<!----> `);
    Container($$renderer2, {
      area_name: "skills",
      children: ($$renderer3) => {
        Skills($$renderer3, { curr_shiki_obj, images });
        $$renderer3.push(`<!----> <div class="skill-order-title-wrapper svelte-1gfy55l"><h3>🔢 Skill Order</h3> `);
        if (is_order_visible) {
          $$renderer3.push("<!--[-->");
          Toggles($$renderer3, {
            iconOnly: "true",
            no_collapse: "True",
            toggle_icon: "mdi:menu-up",
            anchor_direction: "right",
            buttons: [
              {
                name: "HIDE",
                active_indicator: "d",
                active_value: "",
                fn: orderDisplayToggle()
              }
            ]
          });
        } else {
          $$renderer3.push("<!--[!-->");
          Toggles($$renderer3, {
            iconOnly: "true",
            no_collapse: "True",
            toggle_icon: "mdi:menu-down",
            anchor_direction: "right",
            buttons: [
              {
                name: "SHOW",
                active_indicator: "d",
                active_value: "",
                fn: orderDisplayToggle()
              }
            ]
          });
        }
        $$renderer3.push(`<!--]--></div> `);
        if (is_order_visible) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="skill-order svelte-1gfy55l"><table class="svelte-1gfy55l"><thead><tr><td class="tr-skill-image-cell svelte-1gfy55l"><img loading="lazy"${attr("src", images[curr_shiki_obj.式神技能.一技能.图标路径])} alt="skill" class="svelte-1gfy55l"/></td><!--[-->`);
          const each_array = ensure_array_like(skill_order_data);
          for (let i = 0, $$length = each_array.length; i < $$length; i++) {
            let order = each_array[i];
            if (order === 1) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<td class="active svelte-1gfy55l">${escape_html(i + 1)}</td>`);
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push(`<td class="svelte-1gfy55l">${escape_html(i + 1)}</td>`);
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--></tr></thead><tbody><tr><td class="tr-skill-image-cell svelte-1gfy55l"><img loading="lazy"${attr("src", images[curr_shiki_obj.式神技能.二技能.图标路径])} alt="skill" class="svelte-1gfy55l"/></td><!--[-->`);
          const each_array_1 = ensure_array_like(skill_order_data);
          for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
            let order = each_array_1[i];
            if (order === 2) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<td class="active svelte-1gfy55l">${escape_html(i + 1)}</td>`);
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push(`<td class="svelte-1gfy55l">${escape_html(i + 1)}</td>`);
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--></tr><tr><td class="tr-skill-image-cell svelte-1gfy55l"><img loading="lazy"${attr("src", images[curr_shiki_obj.式神技能.三技能.图标路径])} alt="skill" class="svelte-1gfy55l"/></td><!--[-->`);
          const each_array_2 = ensure_array_like(skill_order_data);
          for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
            let order = each_array_2[i];
            if (order === 3) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<td class="active svelte-1gfy55l">${escape_html(i + 1)}</td>`);
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push(`<td class="svelte-1gfy55l">${escape_html(i + 1)}</td>`);
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--></tr><tr><td class="tr-skill-image-cell svelte-1gfy55l"><img loading="lazy"${attr("src", images[curr_shiki_obj.式神技能.四技能.图标路径])} alt="skill" class="svelte-1gfy55l"/></td><!--[-->`);
          const each_array_3 = ensure_array_like(skill_order_data);
          for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
            let order = each_array_3[i];
            if (order === 4) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<td class="active svelte-1gfy55l">${escape_html(i + 1)}</td>`);
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push(`<td class="svelte-1gfy55l">${escape_html(i + 1)}</td>`);
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--></tr></tbody></table></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
    $$renderer2.push(`<!----> `);
    Container($$renderer2, {
      area_name: "usage",
      children: ($$renderer3) => {
        $$renderer3.push(`<h3>💡 How to use</h3> <p class="usage-text svelte-1gfy55l">${html(usage)}</p>`);
      }
    });
    $$renderer2.push(`<!----> `);
    Container($$renderer2, {
      area_name: "guides",
      children: ($$renderer3) => {
        $$renderer3.push(`<h3>📚 Guides</h3> `);
        GuidesList($$renderer3, { guide_list });
        $$renderer3.push(`<!---->`);
      }
    });
    $$renderer2.push(`<!----> `);
    Container($$renderer2, {
      area_name: "spells",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="skill-order-title-wrapper svelte-1gfy55l"><h3>🪄 Recommended Spells</h3> `);
        if (isSpellsShown) {
          $$renderer3.push("<!--[-->");
          Toggles($$renderer3, {
            iconOnly: "true",
            no_collapse: "True",
            toggle_icon: "mdi:menu-up",
            anchor_direction: "right",
            buttons: [
              {
                name: "HIDE",
                active_indicator: "d",
                active_value: "",
                fn: spellsDisplayToggle()
              }
            ]
          });
        } else {
          $$renderer3.push("<!--[!-->");
          Toggles($$renderer3, {
            iconOnly: "true",
            no_collapse: "True",
            toggle_icon: "mdi:menu-down",
            anchor_direction: "right",
            buttons: [
              {
                name: "SHOW",
                active_indicator: "d",
                active_value: "",
                fn: spellsDisplayToggle()
              }
            ]
          });
        }
        $$renderer3.push(`<!--]--></div> `);
        if (isSpellsShown) {
          $$renderer3.push("<!--[-->");
          Spells($$renderer3, { spellData, images });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
    $$renderer2.push(`<!----> `);
    Container($$renderer2, {
      area_name: "disqus",
      children: ($$renderer3) => {
        $$renderer3.push(`<div id="disqus_thread"></div>`);
      }
    });
    $$renderer2.push(`<!----></div> `);
    Note($$renderer2, {
      text: "Information you see in this page is subject to change every Monday, Beijing Time. If you have any questions, please contact me at http://discord.gg/KGsaAet.",
      styles: "font-size: .8rem; text-align: center;"
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
