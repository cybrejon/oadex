import { $ as attr_style, W as attr, a0 as bind_props, Y as store_get, Z as unsubscribe_stores, X as ensure_array_like, a1 as store_mutate, a2 as store_set, a3 as stringify, V as attr_class, _ as head, a4 as build_title } from "../../chunks/index2.js";
import { r as roles_reversed, a as roles } from "../../chunks/dictionary.js";
import { w as writable } from "../../chunks/index.js";
import { B as ButtonGroup } from "../../chunks/ButtonGroup.js";
import { B as Button2 } from "../../chunks/Button2.js";
import { N as Note } from "../../chunks/Note.js";
import { D as Dropdown } from "../../chunks/Dropdown.js";
import { e as escape_html } from "../../chunks/context.js";
import "clsx";
import { T as Toggles } from "../../chunks/Toggles.js";
import { I as Icon, o as onDestroy } from "../../chunks/Icon.js";
import { L as LazyImage } from "../../chunks/LazyImage.js";
import { p as placeholderImage } from "../../chunks/shikis.js";
import { r as role_config, h as hasBeenLeft, a as isAscending, b as active_role, c as isTableMode } from "../../chunks/store.js";
import { g as goto } from "../../chunks/client.js";
let currentRole = writable("ALL");
let currentStatValues = writable("base");
let currentLevelSliderValue = writable(0);
let visibleColumns = writable({
  names: true,
  role: false,
  patk: true,
  atkspd: true,
  hp: true,
  hpregen: false,
  mp: true,
  mpregen: false,
  parmor: true,
  marmor: true,
  mspeed: true
});
let tableSorting = writable({
  lastSorted: "",
  lastProp: "",
  sorting: {
    patk: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    },
    hp: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    },
    hpregen: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    },
    mp: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    },
    mpregen: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    },
    parmor: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    },
    marmor: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    },
    movement: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    }
  }
});
function Slider($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = void 0,
      max,
      min,
      fn,
      status,
      styles,
      disabled = false,
      children
    } = $$props;
    $$renderer2.push(`<div class="slider svelte-oyl6e3"${attr_style(styles)}><p>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></p> <input${attr("disabled", disabled, true)} type="range"${attr("value", value)}${attr("min", min)}${attr("max", max)} id="range" class="svelte-oyl6e3"/> <p class="status svelte-oyl6e3">${escape_html(status)}</p></div>`);
    bind_props($$props, { value });
  });
}
function Checkbox($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { checked = void 0, children } = $$props;
    $$renderer2.push(`<label class="svelte-136uhkj">`);
    children?.($$renderer2);
    $$renderer2.push(`<!----> <input${attr("checked", checked, true)} type="checkbox" class="svelte-136uhkj"/> <span class="svelte-136uhkj"></span></label>`);
    bind_props($$props, { checked });
  });
}
function Accordion($$renderer, $$props) {
  let { children } = $$props;
  let isOpen = false;
  function toggle() {
    isOpen = !isOpen;
  }
  $$renderer.push(`<div class="accordion svelte-13t9qfq">`);
  Toggles($$renderer, {
    iconOnly: "true",
    iconOnlyButtonStyle: "border-radius: 20px; padding: 10px; border: 3px solid #64676D; box-shadow: 0 8px #282A2F;",
    iconOnlyToggleStyle: "font-size: 40px;",
    no_collapse: "true",
    toggle_icon: "icon-park-outline:setting-config",
    anchor_direction: "left",
    buttons: [
      {
        name: "a",
        active_indicator: "a",
        active_value: "a",
        fn: toggle
      }
    ]
  });
  $$renderer.push(`<!----> `);
  if (isOpen) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="pop-up svelte-13t9qfq">`);
    children?.($$renderer);
    $$renderer.push(`<!----></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div>`);
}
function AccordionItem($$renderer, $$props) {
  let { active, fn, styles, name, content } = $$props;
  $$renderer.push(`<div class="accordion-item svelte-1rwoi5h"><div class="toggle svelte-1rwoi5h">`);
  Icon($$renderer, {
    icon: active ? "akar-icons:radio-fill" : "akar-icons:radio",
    style: "font-size: 16px"
  });
  $$renderer.push(`<!----> <p class="toggle-text svelte-1rwoi5h">`);
  name?.($$renderer);
  $$renderer.push(`<!----></p></div> `);
  if (active) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="accordion-item-content svelte-1rwoi5h"${attr_style(styles)}>`);
    content?.($$renderer);
    $$renderer.push(`<!----></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div>`);
}
function StatSheet($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data, images } = $$props;
    let roleNames = Object.keys(roles_reversed);
    let mobileAccordionIndex = 1;
    let baseIterable = (() => {
      return Object.keys(data).map((key) => data[key]);
    })();
    let mainIterable = (() => {
      const currentRoleValue = store_get($$store_subs ??= {}, "$currentRole", currentRole);
      store_get($$store_subs ??= {}, "$currentStatValues", currentStatValues);
      store_get($$store_subs ??= {}, "$currentLevelSliderValue", currentLevelSliderValue);
      let filteredData = currentRoleValue === "ALL" ? [...baseIterable] : baseIterable.filter((shiki) => shiki.式神定位.includes(roles_reversed[currentRoleValue]));
      return filteredData;
    })();
    function switchRoles(role, closeOnMount = false) {
      store_set(currentRole, role);
    }
    function switchValues(mode) {
      store_set(currentStatValues, mode);
    }
    function modifyLevel(level) {
      store_set(currentLevelSliderValue, level);
    }
    function toggleMobileControlAccordion(index) {
      mobileAccordionIndex = index;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Accordion($$renderer3, {
        children: ($$renderer4) => {
          {
            let name = function($$renderer5) {
              $$renderer5.push(`<!---->Role`);
            }, content = function($$renderer5) {
              Button2($$renderer5, {
                active: store_get($$store_subs ??= {}, "$currentRole", currentRole) === "ALL",
                fn: () => switchRoles("ALL"),
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->ALL`);
                }
              });
              $$renderer5.push(`<!----> <!--[-->`);
              const each_array = ensure_array_like(roleNames);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let role = each_array[$$index];
                Button2($$renderer5, {
                  active: store_get($$store_subs ??= {}, "$currentRole", currentRole) === role,
                  fn: () => switchRoles(role),
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(role)}`);
                  }
                });
              }
              $$renderer5.push(`<!--]-->`);
            };
            AccordionItem($$renderer4, {
              styles: "align-items: unset",
              active: mobileAccordionIndex === 1,
              fn: () => toggleMobileControlAccordion(1),
              name,
              content
            });
          }
          $$renderer4.push(`<!----> `);
          {
            let name = function($$renderer5) {
              $$renderer5.push(`<!---->Visible Columns`);
            }, content = function($$renderer5) {
              Checkbox($$renderer5, {
                get checked() {
                  return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).names;
                },
                set checked($$value) {
                  store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).names = $$value);
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Names`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Checkbox($$renderer5, {
                get checked() {
                  return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).role;
                },
                set checked($$value) {
                  store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).role = $$value);
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Role`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Checkbox($$renderer5, {
                get checked() {
                  return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).patk;
                },
                set checked($$value) {
                  store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).patk = $$value);
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->P. ATK`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Checkbox($$renderer5, {
                get checked() {
                  return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).atkspd;
                },
                set checked($$value) {
                  store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).atkspd = $$value);
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->ATK SPEED`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Checkbox($$renderer5, {
                get checked() {
                  return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).hp;
                },
                set checked($$value) {
                  store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).hp = $$value);
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->HP`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Checkbox($$renderer5, {
                get checked() {
                  return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).hpregen;
                },
                set checked($$value) {
                  store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).hpregen = $$value);
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->HP Regen`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Checkbox($$renderer5, {
                get checked() {
                  return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mp;
                },
                set checked($$value) {
                  store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mp = $$value);
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->MP`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Checkbox($$renderer5, {
                get checked() {
                  return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mpregen;
                },
                set checked($$value) {
                  store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mpregen = $$value);
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->MP Regen`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Checkbox($$renderer5, {
                get checked() {
                  return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).parmor;
                },
                set checked($$value) {
                  store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).parmor = $$value);
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->P. Armor`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Checkbox($$renderer5, {
                get checked() {
                  return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).marmor;
                },
                set checked($$value) {
                  store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).marmor = $$value);
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->M. Armor`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Checkbox($$renderer5, {
                get checked() {
                  return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mspeed;
                },
                set checked($$value) {
                  store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mspeed = $$value);
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->MSpeed`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!---->`);
            };
            AccordionItem($$renderer4, {
              styles: "gap: 10px; align-items: unset",
              active: mobileAccordionIndex === 2,
              fn: () => toggleMobileControlAccordion(2),
              name,
              content
            });
          }
          $$renderer4.push(`<!----> `);
          {
            let name = function($$renderer5) {
              $$renderer5.push(`<!---->Shikigami Level &amp; Table Mode`);
            }, content = function($$renderer5) {
              ButtonGroup($$renderer5, {
                children: ($$renderer6) => {
                  Button2($$renderer6, {
                    active: store_get($$store_subs ??= {}, "$currentStatValues", currentStatValues) === "base",
                    fn: () => switchValues("base"),
                    icon: "ph:plant-fill"
                  });
                  $$renderer6.push(`<!----> `);
                  Button2($$renderer6, {
                    active: store_get($$store_subs ??= {}, "$currentStatValues", currentStatValues) === "growth",
                    fn: () => switchValues("growth"),
                    icon: "uil:arrow-growth"
                  });
                  $$renderer6.push(`<!---->`);
                }
              });
              $$renderer5.push(`<!----> `);
              Slider($$renderer5, {
                status: store_get($$store_subs ??= {}, "$currentLevelSliderValue", currentLevelSliderValue) + 1,
                fn: () => modifyLevel(store_get($$store_subs ??= {}, "$currentLevelSliderValue", currentLevelSliderValue)),
                min: "0",
                max: "17",
                disabled: store_get($$store_subs ??= {}, "$currentStatValues", currentStatValues) === "growth",
                get value() {
                  return store_get($$store_subs ??= {}, "$currentLevelSliderValue", currentLevelSliderValue);
                },
                set value($$value) {
                  store_set(currentLevelSliderValue, $$value);
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Level`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!---->`);
            };
            AccordionItem($$renderer4, {
              styles: "gap: 10px; align-items: flex-end",
              active: mobileAccordionIndex === 3,
              fn: () => toggleMobileControlAccordion(3),
              name,
              content
            });
          }
          $$renderer4.push(`<!---->`);
        }
      });
      $$renderer3.push(`<!----> <div class="navigation svelte-5jeiv1">`);
      Dropdown($$renderer3, {
        label: "Role:",
        activeLabel: store_get($$store_subs ??= {}, "$currentRole", currentRole),
        children: ($$renderer4) => {
          Button2($$renderer4, {
            active: store_get($$store_subs ??= {}, "$currentRole", currentRole) === "ALL",
            fn: () => switchRoles("ALL"),
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->ALL`);
            }
          });
          $$renderer4.push(`<!----> <!--[-->`);
          const each_array_1 = ensure_array_like(roleNames);
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let role = each_array_1[$$index_1];
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentRole", currentRole) === role,
              fn: () => switchRoles(role),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(role)}`);
              }
            });
          }
          $$renderer4.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      Dropdown($$renderer3, {
        label: "Columns",
        children: ($$renderer4) => {
          Checkbox($$renderer4, {
            get checked() {
              return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).names;
            },
            set checked($$value) {
              store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).names = $$value);
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->Names`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          Checkbox($$renderer4, {
            get checked() {
              return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).role;
            },
            set checked($$value) {
              store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).role = $$value);
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->Role`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          Checkbox($$renderer4, {
            get checked() {
              return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).patk;
            },
            set checked($$value) {
              store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).patk = $$value);
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->P. ATK`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          Checkbox($$renderer4, {
            get checked() {
              return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).atkspd;
            },
            set checked($$value) {
              store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).atkspd = $$value);
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->ATK SPEED`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          Checkbox($$renderer4, {
            get checked() {
              return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).hp;
            },
            set checked($$value) {
              store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).hp = $$value);
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->HP`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          Checkbox($$renderer4, {
            get checked() {
              return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).hpregen;
            },
            set checked($$value) {
              store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).hpregen = $$value);
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->HP Regen`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          Checkbox($$renderer4, {
            get checked() {
              return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mp;
            },
            set checked($$value) {
              store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mp = $$value);
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->MP`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          Checkbox($$renderer4, {
            get checked() {
              return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mpregen;
            },
            set checked($$value) {
              store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mpregen = $$value);
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->MP Regen`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          Checkbox($$renderer4, {
            get checked() {
              return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).parmor;
            },
            set checked($$value) {
              store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).parmor = $$value);
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->P. Armor`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          Checkbox($$renderer4, {
            get checked() {
              return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).marmor;
            },
            set checked($$value) {
              store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).marmor = $$value);
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->M. Armor`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          Checkbox($$renderer4, {
            get checked() {
              return store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mspeed;
            },
            set checked($$value) {
              store_mutate($$store_subs ??= {}, "$visibleColumns", visibleColumns, store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mspeed = $$value);
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->MSpeed`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      ButtonGroup($$renderer3, {
        children: ($$renderer4) => {
          $$renderer4.push(`<!--[-->`);
          const each_array_2 = ensure_array_like([
            { name: "base", icon: "ic:round-minus" },
            { name: "growth", icon: "uil:arrow-growth" }
          ]);
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let btn = each_array_2[$$index_2];
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentStatValues", currentStatValues) === btn.name,
              fn: () => switchValues(btn.name),
              icon: btn.icon
            });
          }
          $$renderer4.push(`<!--]-->`);
        }
      });
      $$renderer3.push(`<!----> `);
      Slider($$renderer3, {
        status: store_get($$store_subs ??= {}, "$currentLevelSliderValue", currentLevelSliderValue) + 1,
        fn: () => modifyLevel(store_get($$store_subs ??= {}, "$currentLevelSliderValue", currentLevelSliderValue)),
        min: "0",
        max: "17",
        disabled: store_get($$store_subs ??= {}, "$currentStatValues", currentStatValues) === "growth",
        get value() {
          return store_get($$store_subs ??= {}, "$currentLevelSliderValue", currentLevelSliderValue);
        },
        set value($$value) {
          store_set(currentLevelSliderValue, $$value);
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->Level`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div> <div class="stat-sheet svelte-5jeiv1"><table class="svelte-5jeiv1"><thead class="svelte-5jeiv1"><tr class="svelte-5jeiv1"><th class="svelte-5jeiv1">#</th><th class="svelte-5jeiv1">📝</th><!--[-->`);
      const each_array_3 = ensure_array_like([
        {
          name: "Role",
          column_id: store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).role
        },
        {
          name: "P. ATK",
          column_id: store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).patk,
          metadata: { en: "patk", cn: "物理伤害" }
        },
        {
          name: "ATK Speed",
          column_id: store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).atkspd
        },
        {
          name: "HP",
          column_id: store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).hp,
          metadata: { en: "hp", cn: "生命值" }
        },
        {
          name: "HP Regen",
          column_id: store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).hpregen,
          metadata: { en: "hpregen", cn: "生命恢复" }
        },
        {
          name: "MP",
          column_id: store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mp,
          metadata: { en: "mp", cn: "魔法上限" }
        },
        {
          name: "MP Regen",
          column_id: store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mpregen,
          metadata: { en: "mpregen", cn: "魔法回复" }
        },
        {
          name: "P. Armor",
          column_id: store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).parmor,
          metadata: { en: "parmor", cn: "护甲" }
        },
        {
          name: "M. Armor",
          column_id: store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).marmor,
          metadata: { en: "marmor", cn: "魔抗" }
        },
        {
          name: "M-Speed",
          column_id: store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mspeed,
          metadata: { en: "movement", cn: "移动速度" }
        }
      ]);
      for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
        let th = each_array_3[$$index_3];
        if (th.column_id) {
          $$renderer3.push("<!--[-->");
          if (th.metadata) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<th${attr_style(`cursor: pointer; ${stringify(store_get($$store_subs ??= {}, "$currentStatValues", currentStatValues) === "growth" && "cursor: not-allowed;")}`)} class="svelte-5jeiv1"><span class="svelte-5jeiv1">`);
            if (store_get($$store_subs ??= {}, "$tableSorting", tableSorting).lastSorted === th.metadata.en) {
              $$renderer3.push("<!--[-->");
              Icon($$renderer3, {
                icon: "fa:sort",
                style: `font-size: 16px; ${stringify(store_get($$store_subs ??= {}, "$currentStatValues", currentStatValues) === "growth" && "opacity: .2;")}`
              });
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> ${escape_html(th.name)}</span></th>`);
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<th class="svelte-5jeiv1">${escape_html(th.name)}</th>`);
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!--]--></tr></thead><tbody contenteditable="false"><!--[-->`);
      const each_array_4 = ensure_array_like(mainIterable);
      for (let index = 0, $$length = each_array_4.length; index < $$length; index++) {
        let shiki = each_array_4[index];
        const shiki_roles = shiki.式神定位.map((role) => roles[role]).join(", ");
        const avatar = images[shiki.式神方头像];
        const base = shiki.式神基础属性;
        const growth = shiki.式神属性成长;
        const attack = base.物理伤害;
        const attack_growth = growth.物理伤害;
        const attack_speed = (base.攻击速度 * (1 + base.攻速加成)).toFixed(2);
        const hp = base.生命值;
        const hp_growth = growth.生命值;
        const hp_regen = base.生命恢复;
        const hp_regen_growth = growth.生命恢复;
        const mana = base.魔法上限;
        const mana_growth = growth.魔法上限;
        const mp_regen = base.魔法回复;
        const mp_regen_growth = growth.魔法回复;
        const parmor = base.护甲;
        const parmor_growth = growth.护甲;
        const marmor = base.魔抗;
        const marmor_growth = growth.魔抗;
        const mvsc_count = base.移动速度.toString().split("").length;
        const base_movement_speed = mvsc_count >= 3 ? base.移动速度.toString().slice(0, 2) + base.移动速度.toString().slice(1, 2) : `${base.移动速度.toString()}0`;
        $$renderer3.push(`<tr class="svelte-5jeiv1">`);
        if (store_get($$store_subs ??= {}, "$currentStatValues", currentStatValues) === "base") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<td class="svelte-5jeiv1">${escape_html(index + 1)}.</td> <td class="svelte-5jeiv1"><img${attr("src", avatar)} alt="shikigami" class="svelte-5jeiv1"/> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).names) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<a data-sveltekit-preload-data="tap"${attr("href", `/shikigami/${stringify(shiki.式神ID)}`)}>${escape_html(shiki.式神名称)}</a>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></td> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).role) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">${escape_html(shiki_roles)}</td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).patk) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">${escape_html((attack + attack_growth * store_get($$store_subs ??= {}, "$currentLevelSliderValue", currentLevelSliderValue)).toFixed(2))}</td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).atkspd) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">${escape_html(attack_speed)} <span class="unit svelte-5jeiv1">ATK /s</span></td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).hp) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">${escape_html((hp + hp_growth * store_get($$store_subs ??= {}, "$currentLevelSliderValue", currentLevelSliderValue)).toFixed(2))} <span class="unit svelte-5jeiv1">HP</span></td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).hpregen) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">+ ${escape_html((hp_regen + hp_regen_growth * store_get($$store_subs ??= {}, "$currentLevelSliderValue", currentLevelSliderValue)).toFixed(2))} <span class="unit svelte-5jeiv1">HP /s</span></td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mp) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">${escape_html(mana + mana_growth * store_get($$store_subs ??= {}, "$currentLevelSliderValue", currentLevelSliderValue))} <span class="unit svelte-5jeiv1">MP</span></td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mpregen) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">+ ${escape_html((mp_regen + mp_regen_growth * store_get($$store_subs ??= {}, "$currentLevelSliderValue", currentLevelSliderValue)).toFixed())} <span class="unit svelte-5jeiv1">MP /s</span></td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).parmor) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">${escape_html((parmor + parmor_growth * store_get($$store_subs ??= {}, "$currentLevelSliderValue", currentLevelSliderValue)).toFixed())}</td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).marmor) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">${escape_html(marmor + marmor_growth * store_get($$store_subs ??= {}, "$currentLevelSliderValue", currentLevelSliderValue))}</td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mspeed) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">${escape_html(base_movement_speed)}</td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
        if (store_get($$store_subs ??= {}, "$currentStatValues", currentStatValues) === "growth") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<td class="svelte-5jeiv1">${escape_html(index + 1)}.</td> <td class="svelte-5jeiv1"><img${attr("src", avatar)} alt="shikigami" class="svelte-5jeiv1"/> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).names) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<a data-sveltekit-preload-data="tap"${attr("href", `/shikigami/${stringify(shiki.式神ID)}`)}>${escape_html(shiki.式神名称)}</a>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></td> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).role) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">${escape_html(shiki_roles)}</td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).patk) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">+ ${escape_html(attack_growth)} <span class="unit svelte-5jeiv1">/lvl</span></td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).atkspd) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1"><span class="unit svelte-5jeiv1">need research</span></td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).hp) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">+ ${escape_html(hp_growth)} <span class="unit svelte-5jeiv1">HP /lvl</span></td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).hpregen) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">+ ${escape_html(hp_regen_growth)} <span class="unit svelte-5jeiv1">HP /lvl</span></td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mp) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">+ ${escape_html(mana_growth ? mana_growth : "n/a")} <span class="unit svelte-5jeiv1">MP /lvl</span></td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mpregen) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">+ ${escape_html(mp_regen_growth ? mp_regen_growth : "n/a")} <span class="unit svelte-5jeiv1">MP/s /lvl</span></td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).parmor) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">+ ${escape_html(parmor_growth)} <span class="unit svelte-5jeiv1">/lvl</span></td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).marmor) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">+ ${escape_html(marmor_growth)} <span class="unit svelte-5jeiv1">/lvl</span></td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$visibleColumns", visibleColumns).mspeed) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<td class="svelte-5jeiv1">${escape_html(base_movement_speed)}</td>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></tr>`);
      }
      $$renderer3.push(`<!--]--></tbody></table></div> `);
      Note($$renderer3, {
        noIcon: "True",
        text: `Number of shikigamis shown - ${mainIterable.length}.`,
        styles: "font-size: .8rem; text-align: center;",
        container_margin: "50px 0 0 0"
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function ShikiCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let labels = {
      "physical damage": "P",
      "magic damage": "M",
      "true damage": "T"
    };
    let { slug, src, shiki_name, new_shiki, in_rotation, dtype } = $$props;
    let d_names = dtype[0].damage_types;
    $$renderer2.push(`<a${attr("href", `/shikigami/${stringify(slug)}`)} class="shiki-card-anchor svelte-z9cswv" data-sveltekit-preload-data="tap"><div class="shiki-card svelte-z9cswv"><div class="sc-image-container svelte-z9cswv">`);
    LazyImage($$renderer2, {
      class: "shikigami-image",
      alt: "shikigami portrait",
      src,
      placeholder: placeholderImage
    });
    $$renderer2.push(`<!----></div> <div class="sc-text-container svelte-z9cswv"><p class="shikigami-name svelte-z9cswv">${escape_html(shiki_name)}</p></div> `);
    if (new_shiki) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="tag new-tag svelte-z9cswv">RECENT</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (in_rotation) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="tag free-tag svelte-z9cswv">FREE</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="tags svelte-z9cswv"><!--[-->`);
    const each_array = ensure_array_like(d_names);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let damage = each_array[$$index];
      $$renderer2.push(`<p${attr_class("tag svelte-z9cswv", void 0, {
        "damage-physical-tag": damage === "physical damage",
        "damage-magic-tag": damage === "magic damage",
        "damage-true-tag": damage === "true damage"
      })}>${escape_html(labels[damage])}</p>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></a>`);
  });
}
function Shikigamis($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { shikiga_data, damage_types, images } = $$props;
    const shiki_names = Object.keys(shikiga_data).sort();
    const shikiIDs = [];
    shiki_names.forEach((name) => shikiIDs.push(shikiga_data[name].式神ID));
    let mobile_role_switcher_toggle = void 0;
    let role = [...shiki_names];
    const toggleRole = (r) => () => {
      let filteredRole;
      r === "all" ? filteredRole = [...shiki_names] : filteredRole = shiki_names.filter((shiki) => shikiga_data[shiki].式神定位.includes(r));
      active_role.update((role2) => r);
      store_get($$store_subs ??= {}, "$isAscending", isAscending) ? role = [...filteredRole].sort() : role = [...filteredRole].sort().reverse();
      role_config.update((roles2) => [...role]);
      hasBeenLeft.update((bool) => false);
      mobile_role_switcher_toggle.toggle();
    };
    function sortAscend() {
      if (store_get($$store_subs ??= {}, "$hasBeenLeft", hasBeenLeft)) {
        role_config.update((c) => [...c].sort());
        role = store_get($$store_subs ??= {}, "$role_config", role_config);
      } else {
        role = [...role].sort();
      }
      isAscending.update((bool) => true);
    }
    function sortDescend() {
      if (store_get($$store_subs ??= {}, "$hasBeenLeft", hasBeenLeft)) {
        role_config.update((c) => [...c].sort().reverse());
        role = store_get($$store_subs ??= {}, "$role_config", role_config);
      } else {
        role = [...role].sort().reverse();
      }
      isAscending.update((bool) => false);
    }
    function randomShikigami() {
      goto();
      mobile_role_switcher_toggle.toggle();
    }
    let numberOfShikisCurrentlyShown = store_get($$store_subs ??= {}, "$role_config", role_config).length === 0 ? role.length : store_get($$store_subs ??= {}, "$role_config", role_config).length;
    onDestroy(() => {
      !store_get($$store_subs ??= {}, "$role_config", role_config).length == 0 ? hasBeenLeft.update((bool) => true) : hasBeenLeft.update((bool) => false);
    });
    $$renderer2.push(`<div class="shiki-selection-header svelte-1lhix0b">`);
    ButtonGroup($$renderer2, {
      children: ($$renderer3) => {
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$isAscending", isAscending) === true,
          fn: () => sortAscend(),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->A-Z`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$isAscending", isAscending) === false,
          fn: () => sortDescend(),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Z-A`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
    $$renderer2.push(`<!----> <div class="desktop-role-switcher-wrapper svelte-1lhix0b">`);
    Button2($$renderer2, {
      fn: () => randomShikigami(),
      styles: "fonqt-weight: 800;",
      icon: "ion:dice"
    });
    $$renderer2.push(`<!----> `);
    ButtonGroup($$renderer2, {
      children: ($$renderer3) => {
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$active_role", active_role) === "all",
          fn: toggleRole("all"),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->ALL`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$active_role", active_role) === "侍",
          fn: toggleRole("侍"),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->SAMURAI`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$active_role", active_role) === "忍",
          fn: toggleRole("忍"),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->NINJA`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$active_role", active_role) === "射",
          fn: toggleRole("射"),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->MARKSMAN`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$active_role", active_role) === "守",
          fn: toggleRole("守"),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->TANK`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$active_role", active_role) === "巫",
          fn: toggleRole("巫"),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->MAGE`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$active_role", active_role) === "祝",
          fn: toggleRole("祝"),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->SUPPORT`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
    $$renderer2.push(`<!----></div> <div class="mobile-role-switcher-wrapper svelte-1lhix0b">`);
    Dropdown($$renderer2, {
      label: roles[store_get($$store_subs ??= {}, "$active_role", active_role)] || "ALL",
      children: ($$renderer3) => {
        Button2($$renderer3, { fn: () => randomShikigami(), icon: "ion:dice" });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$active_role", active_role) === "all",
          fn: toggleRole("all"),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->ALL`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$active_role", active_role) === "侍",
          fn: toggleRole("侍"),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->SAMURAI`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$active_role", active_role) === "忍",
          fn: toggleRole("忍"),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->NINJA`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$active_role", active_role) === "射",
          fn: toggleRole("射"),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->MARKSMAN`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$active_role", active_role) === "守",
          fn: toggleRole("守"),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->TANK`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$active_role", active_role) === "巫",
          fn: toggleRole("巫"),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->MAGE`);
          }
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$active_role", active_role) === "祝",
          fn: toggleRole("祝"),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->SUPPORT`);
          }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div> <div class="shiki-selection-container">`);
    if (store_get($$store_subs ??= {}, "$hasBeenLeft", hasBeenLeft)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$role_config", role_config));
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let shiki = each_array[$$index];
        const dtype = damage_types.filter((damage) => damage.name === shiki);
        ShikiCard($$renderer2, {
          dtype,
          slug: shikiga_data[shiki].式神ID,
          src: images[shikiga_data[shiki].式神方头像],
          shiki_name: shiki,
          new_shiki: shikiga_data[shiki].新式神
        });
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(role);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let shiki = each_array_1[$$index_1];
        const dtype = damage_types.filter((damage) => damage.name === shiki);
        ShikiCard($$renderer2, {
          dtype,
          slug: shikiga_data[shiki].式神ID,
          src: images[shikiga_data[shiki].式神方头像],
          shiki_name: shiki,
          new_shiki: shikiga_data[shiki].新式神
        });
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Note($$renderer2, {
      noIcon: "True",
      text: `Number of shikigamis shown - ${numberOfShikisCurrentlyShown}.`,
      styles: "font-size: .8rem; text-align: center;",
      container_margin: "50px 0 0 0"
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    const shikiga_data = data.shikiga_data;
    const damage_types = data.damage_types;
    const images = data.images;
    function toggleTableMode(mode) {
      mode === "table" ? store_set(isTableMode, true) : store_set(isTableMode, false);
    }
    head($$renderer2, ($$renderer3) => {
      build_title($$renderer3, () => {
        $$renderer3.push(`<title>OADex</title>`);
      });
      $$renderer3.push(`<meta description="The unofficial wiki for Onmyoji Arena."/>`);
    });
    $$renderer2.push(`<div class="extra-buttons svelte-1uha8ag">`);
    ButtonGroup($$renderer2, {
      children: ($$renderer3) => {
        Button2($$renderer3, {
          active: !store_get($$store_subs ??= {}, "$isTableMode", isTableMode),
          icon: "fluent:grid-24-filled",
          fn: () => toggleTableMode("icon")
        });
        $$renderer3.push(`<!----> `);
        Button2($$renderer3, {
          active: store_get($$store_subs ??= {}, "$isTableMode", isTableMode),
          icon: "ph:table-fill",
          fn: () => toggleTableMode("table"),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->STATS`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
    $$renderer2.push(`<!----></div> `);
    if (!store_get($$store_subs ??= {}, "$isTableMode", isTableMode)) {
      $$renderer2.push("<!--[-->");
      Shikigamis($$renderer2, { shikiga_data, damage_types, images });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (store_get($$store_subs ??= {}, "$isTableMode", isTableMode)) {
      $$renderer2.push("<!--[-->");
      StatSheet($$renderer2, { images, data: shikiga_data });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
