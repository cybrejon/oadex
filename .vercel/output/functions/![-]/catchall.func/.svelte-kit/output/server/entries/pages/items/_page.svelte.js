import { W as attr, V as attr_class, X as ensure_array_like, a3 as stringify, _ as head, a4 as build_title, Y as store_get, a6 as spread_props, Z as unsubscribe_stores } from "../../../chunks/index2.js";
import { p as placeholderImage } from "../../../chunks/shikis.js";
import { T as Toggles } from "../../../chunks/Toggles.js";
import { L as LazyImage } from "../../../chunks/LazyImage.js";
import { e as escape_html } from "../../../chunks/context.js";
import { I as Icon, h as html } from "../../../chunks/Icon.js";
import Fuse from "fuse.js";
import "clsx";
import { h as highlight } from "../../../chunks/highlighting.js";
import { C as Container } from "../../../chunks/Container.js";
import { B as Button2 } from "../../../chunks/Button2.js";
import { B as ButtonGroup } from "../../../chunks/ButtonGroup.js";
import { w as writable } from "../../../chunks/index.js";
import { D as Dropdown } from "../../../chunks/Dropdown.js";
function ItemCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      src,
      itemName,
      itemPrice,
      fn,
      utilFn,
      activeItem,
      abilities,
      attributes
    } = $$props;
    $$renderer2.push(`<a class="item-anchor svelte-1mlzb80"${attr("href", `/items?i=${itemName}`)} data-sveltekit-noscroll="" data-sveltekit-preload-data="tap"><div${attr_class("item-card svelte-1mlzb80", void 0, { "item-card--active": activeItem == itemName })}><div class="sc-image-container svelte-1mlzb80">`);
    LazyImage($$renderer2, {
      class: "ic-item-image",
      alt: "item image",
      src,
      placeholder: placeholderImage
    });
    $$renderer2.push(`<!----></div> <div class="sc-text-container svelte-1mlzb80"><p class="ic-item-name svelte-1mlzb80">`);
    if (abilities?.active) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`[A]`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> ${escape_html(itemName)}</p> <p class="ic-item-price svelte-1mlzb80">${escape_html(itemPrice)}</p> `);
    if (attributes) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="attributes svelte-1mlzb80"><!--[-->`);
      const each_array = ensure_array_like(attributes);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let attribute = each_array[$$index];
        if (attribute.includes("Crit Rate")) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="ic-item-extra crit svelte-1mlzb80">CRIT</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (attribute.includes("Armor Penetration")) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="ic-item-extra pen svelte-1mlzb80">Arm Pen</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (attribute.includes("Attack Speed")) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="ic-item-extra attack-speed svelte-1mlzb80">Atk Spd</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (attribute.includes("Life Steal")) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="ic-item-extra life-steal svelte-1mlzb80">Life Steal</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (attribute.includes("HP") && !attribute.includes("HP Regen") && !attribute.includes("Bonus HP")) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="ic-item-extra hp svelte-1mlzb80">HP</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (attribute.includes("HP Regen")) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="ic-item-extra hp-regen svelte-1mlzb80">HP Regen</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (attribute.includes("Cooldown Reduction") && !attribute.includes("Spell Cooldown Reduction")) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="ic-item-extra cdr svelte-1mlzb80">CDR</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (attribute.includes("Magic Resist")) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="ic-item-extra mres svelte-1mlzb80">MRes</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (attribute.includes("MP") && !attribute.includes("MP Regen")) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="ic-item-extra mp svelte-1mlzb80">MP</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (attribute.includes("MP Regen")) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="ic-item-extra mp-regen svelte-1mlzb80">MP Regen</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (attribute.includes("Armor")) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="ic-item-extra armor svelte-1mlzb80">Armor</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (attribute.includes("Magic Penetration")) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="ic-item-extra mpen svelte-1mlzb80">M-Pen</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (abilities) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="abilities svelte-1mlzb80"><!--[-->`);
      const each_array_1 = ensure_array_like(abilities.passive);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let passive = each_array_1[$$index_1];
        if (passive.includes("Pierce")) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="ic-item-extra pen svelte-1mlzb80">Arm Pen</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></a>`);
  });
}
function Note2($$renderer, $$props) {
  let { headerText, icon = "tabler:bulb-filled", children } = $$props;
  $$renderer.push(`<div class="note svelte-bh95qm">`);
  {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="note-header svelte-bh95qm">`);
    Icon($$renderer, { icon, style: "font-size: 30px;" });
    $$renderer.push(`<!----><p class="svelte-bh95qm">${escape_html(headerText)}</p></div>`);
  }
  $$renderer.push(`<!--]--> <p class="text svelte-bh95qm">`);
  children?.($$renderer);
  $$renderer.push(`<!----></p></div>`);
}
const itemNotes = {
  "Gold Hachiman Do": "'+5% Movement Speed' is a unique attribute and it has it's own ability name, titled 'Feathers'. Unique attributes do not stack unlike normal attributes.",
  "World Compass": "Possibly old item.",
  "Spiked Maul": "Possibly old item.",
  Naginata: "Possibly old item.",
  "Blade-Shattering Soul": "Light Assault: +10 Armor Penetration. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Demon Splitter": "Claws: +15% Armor Penetration. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  Tsurumaru: "Claws: +30% Armor Penetration. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  Mikazuki: "Claws: +20% Armor Penetration. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Chibiki Sword": "Chibiki: +10% Cooldown Reduction. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Chidori Twin Swords": "Feathers: +5% Movement Speed. It is a unique attribute and does not stack with other similarly named or valued attr,ibutes.",
  "Feather Bow": "Feathers: +5% Movement Speed. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Redmark Katar": "Blood Lick: +7% Attack HP Steal. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  Onimaru: "Fury: +15% Attack Damage. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Dark Fang Yomotsu": "Fury: +15% Attack Damage. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  Juzumaru: "Nightwing: +10% Life Steal. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Heaven's Thunder": "Nightwing: +10% Life Steal. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Omoikane's Bow": "Nightwing: +10% Spell Vampire. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Chiyo's Sword": "Nightwing: +20% Spell Vampire. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Mandala Sutra": "Yatagarasu: +8% Movement Speed, +15 Magic Penetration. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Shichimen Tennyo": "Yatagarasu: +8% Movement Speed. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Yatagarasu Feather": "Yatagarasu: +5% Movement Speed. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Eight Trigrams": "Trigram: +40% Magic Penetration. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Shadow Fan": "Trigram: +35% Magic Penetration. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Sylph's Harp": "Stardust: +30 Magic Penetration. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Buddha Beads": "Stardust: +30 Magic Penetration. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Celestial Weave": "Stardust: +10 Magic Penetration. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Kojiki Scroll": "History: +10% Cooldown Reduction. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Silver Bracer": "Silver: +10% Cooldown Reduction. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Swift boots": "Movement: +25 Movement speed. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Boots of Fury": "Movement: +60 Movement speed, +35% Reduce Slow Effect. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Takemikazuchi boots": "Movement: +45 Movement speed, and Takemikazuchi: +30% Control Reduction. Both are considered as unique attribute and does not stack with other similarly named or valued attributes.",
  "Demonic Boots": "Movement: +45 Movement speed, and Demonic Strike: +30 Magic Penetration. Both are considered as unique attribute and does not stack with other similarly named or valued attributes.",
  "Boots of Purity": "Movement: +45 Movement speed, and Purity: +10% Cooldown Reduction, +10% spell Cooldown Reduction. Both are considered as unique attribute and does not stack with other similarly named or valued attributes.",
  "Hagakure Boots": "Movement: +45 Movement speed. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Wind Walkers": "Movement: +45 Movement speed. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  "Flexible Kogake": "Movement: +45 Movement speed. It is a unique attribute and does not stack with other similarly named or valued attributes.",
  Orochibane: "Demon Encounter exclusive.",
  "Signet Shield": "Demon Encounter exclusive.",
  "Dai-doro": "Demon Encounter exclusive.",
  "Hateful Tachi": "This item was removed from the game at the start of season 22"
};
function ItemPreview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      name,
      id,
      image,
      type,
      tier,
      price,
      abilities,
      attributes,
      requiredItems,
      specialAbility,
      itemData,
      previewItem
    } = $$props;
    let composites = requiredItems && itemData.filter((item) => requiredItems.includes(item.name));
    $$renderer2.push(`<div class="sticky-container svelte-jtas44"><div class="head svelte-jtas44"><img class="item-image svelte-jtas44"${attr("src", image)} alt="item"/> <span class="svelte-jtas44"><h3 class="item-name svelte-jtas44">${escape_html(name)}</h3> <p class="item-price svelte-jtas44">💰 ${escape_html(price)}</p> <p class="item-type svelte-jtas44">⚔️ ${escape_html(type)}</p> <p class="item-tier svelte-jtas44">📊 ${escape_html(tier)}</p> <p class="item-tier svelte-jtas44">🔖 ID: ${escape_html(id)}</p></span></div> <div class="body svelte-jtas44">`);
    if (abilities.active) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h3>Active Abilities</h3> <p class="ability-text svelte-jtas44">${html(highlight(abilities.active))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (abilities.passive) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h3>Passive Abilities</h3> <!--[-->`);
      const each_array = ensure_array_like(abilities.passive);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let passive = each_array[$$index];
        $$renderer2.push(`<p class="ability-text svelte-jtas44">${html(highlight(passive))}</p>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (attributes.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h3>Attributes</h3> <div class="attributes-container svelte-jtas44"><!--[-->`);
      const each_array_1 = ensure_array_like(attributes);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let attribute = each_array_1[$$index_1];
        $$renderer2.push(`<span class="attribute svelte-jtas44">${escape_html(attribute)}</span>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (itemNotes[name]) {
      $$renderer2.push("<!--[-->");
      Note2($$renderer2, {
        headerText: "Correction",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(itemNotes[name])}`);
        }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (requiredItems) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h3>Required Items</h3> <div class="required-items-container svelte-jtas44"><!--[-->`);
      const each_array_2 = ensure_array_like(composites);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let item = each_array_2[$$index_2];
        ItemCard($$renderer2, {
          src: item.image,
          itemName: item.name,
          itemPrice: `💰 ${stringify(item.price)}`,
          itemId: item.id,
          fn: previewItem(item.name, { isGlobal: true })
        });
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (specialAbility) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h3>Special Ability</h3> <p>${html(highlight(specialAbility))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
let currentTier = writable("All");
let currentType = writable("All");
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    const itemData = data.itemData;
    const itemQuery = data.itemQuery;
    let tier_dropdown_toggle = void 0;
    let type_dropdown_toggle = void 0;
    let isOpen_itemDrawer = false;
    const toggleMobileItemSelection = () => () => {
      isOpen_itemDrawer = !isOpen_itemDrawer;
    };
    itemData.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    let mainIterable = itemData;
    const filterItemsByType = (type, cTier, isBeingMounted = false) => () => {
      if (cTier == "All") {
        mainIterable = itemData.filter((item) => item.type == type);
      } else {
        mainIterable = itemData.filter((item) => item.type == type && item.tier == cTier);
      }
      currentType.update((t) => type);
      if (!isBeingMounted) {
        type_dropdown_toggle.toggle();
      }
    };
    const resetTypeToAll = (isBeingMounted = false) => () => {
      if (store_get($$store_subs ??= {}, "$currentTier", currentTier) == "All") {
        mainIterable = itemData;
      } else {
        mainIterable = itemData.filter((item) => [
          "Weapon",
          "Magic",
          "Defense",
          "Jungle",
          "Movement",
          "Support"
        ].includes(item.type) && item.tier == store_get($$store_subs ??= {}, "$currentTier", currentTier));
      }
      currentType.update((t) => "All");
      if (!isBeingMounted) {
        type_dropdown_toggle.toggle();
      }
    };
    const filterItemsByTier = (tier, cType, isBeingMounted = false) => () => {
      if (cType == "All") {
        mainIterable = itemData.filter((item) => item.tier == tier);
      } else {
        mainIterable = itemData.filter((item) => item.tier == tier && item.type == cType);
      }
      currentTier.update((t) => tier);
      if (!isBeingMounted) {
        tier_dropdown_toggle.toggle();
      }
    };
    function resetTierToAll(isBeingMounted = false) {
      if (store_get($$store_subs ??= {}, "$currentType", currentType) == "All") {
        mainIterable = itemData;
      } else {
        mainIterable = itemData.filter((item) => ["Advanced", "Intermediate", "Basic"].includes(item.tier) && item.type == store_get($$store_subs ??= {}, "$currentType", currentType));
      }
      currentTier.update((t) => "All");
      if (!isBeingMounted) {
        tier_dropdown_toggle.toggle();
      }
    }
    new Fuse(mainIterable, { keys: ["name", "id"] });
    let previewData = {};
    let activeItem = void 0;
    if (itemQuery) {
      const queryItemProps = mainIterable.filter((item) => item.name == itemQuery)[0];
      activeItem = queryItemProps.name;
      previewData = {
        name: queryItemProps.name,
        id: queryItemProps.id,
        image: queryItemProps.image,
        type: queryItemProps.type,
        tier: queryItemProps.tier,
        price: queryItemProps.price,
        abilities: queryItemProps.abilities,
        attributes: queryItemProps.attributes,
        requiredItems: queryItemProps.requiredItems,
        specialAbility: queryItemProps.specialAbility
      };
      currentTier.update((t) => queryItemProps.tier);
      currentType.update((t) => queryItemProps.type);
    } else {
      previewData = {
        name: mainIterable[0].name,
        id: mainIterable[0].id,
        image: mainIterable[0].image,
        type: mainIterable[0].type,
        tier: mainIterable[0].tier,
        price: mainIterable[0].price,
        abilities: mainIterable[0].abilities,
        attributes: mainIterable[0].attributes,
        requiredItems: mainIterable[0].requiredItems,
        specialAbility: mainIterable[0].specialAbility
      };
      activeItem = mainIterable[0].name;
    }
    const previewItem = (name, options) => () => {
      const { isGlobal } = options || 0;
      let item;
      if (isGlobal) {
        item = itemData.filter((item2) => item2.name == name)[0];
        resetTierToAll(true);
        resetTypeToAll(true)();
      } else {
        item = mainIterable.filter((item2) => item2.name == name)[0];
      }
      previewData = {
        name: item.name,
        id: item.id,
        image: item.image,
        type: item.type,
        tier: item.tier,
        price: item.price,
        abilities: item.abilities,
        attributes: item.attributes,
        requiredItems: item.requiredItems,
        specialAbility: item.specialAbility
      };
      activeItem = item.name;
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head($$renderer3, ($$renderer4) => {
        build_title($$renderer4, () => {
          $$renderer4.push(`<title>OADex | Items - ${escape_html(previewData.name)}</title>`);
        });
      });
      {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="shiki-selection-header svelte-rk8na7">`);
        Dropdown($$renderer3, {
          label: typeof store_get($$store_subs ??= {}, "$currentTier", currentTier) === "number" ? "Special Items" : store_get($$store_subs ??= {}, "$currentTier", currentTier),
          icon: "streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow",
          children: ($$renderer4) => {
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentTier", currentTier) === "All",
              fn: resetTierToAll,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->All`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentTier", currentTier) === "Advanced",
              fn: filterItemsByTier("Advanced", store_get($$store_subs ??= {}, "$currentType", currentType)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Tier 0`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentTier", currentTier) === "Intermediate",
              fn: filterItemsByTier("Intermediate", store_get($$store_subs ??= {}, "$currentType", currentType)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Tier 1`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentTier", currentTier) === "Basic",
              fn: filterItemsByTier("Basic", store_get($$store_subs ??= {}, "$currentType", currentType)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Tier 2`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentTier", currentTier) === 4,
              fn: filterItemsByTier(4, store_get($$store_subs ??= {}, "$currentType", currentType)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Special 1`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentTier", currentTier) === 5,
              fn: filterItemsByTier(5, store_get($$store_subs ??= {}, "$currentType", currentType)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Special 2`);
              }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <div class="desktop-item-type-switcher-wrapper svelte-rk8na7">`);
        ButtonGroup($$renderer3, {
          children: ($$renderer4) => {
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === "ALL",
              fn: resetTypeToAll(),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->ALL`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === "Weapon",
              fn: filterItemsByType("Weapon", store_get($$store_subs ??= {}, "$currentTier", currentTier)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->WEAPONS`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === "Defense",
              fn: filterItemsByType("Defense", store_get($$store_subs ??= {}, "$currentTier", currentTier)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->DEFENSE`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === "Magic",
              fn: filterItemsByType("Magic", store_get($$store_subs ??= {}, "$currentTier", currentTier)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->MAGIC`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === "Jungle",
              fn: filterItemsByType("Jungle", store_get($$store_subs ??= {}, "$currentTier", currentTier)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->JUNGLE`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === "Movement",
              fn: filterItemsByType("Movement", store_get($$store_subs ??= {}, "$currentTier", currentTier)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->MOVEMENT`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === "Support",
              fn: filterItemsByType("Support", store_get($$store_subs ??= {}, "$currentTier", currentTier)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->SUPPORT`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === 0,
              fn: filterItemsByType(0, store_get($$store_subs ??= {}, "$currentTier", currentTier)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->T2 OLD`);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----></div> <div class="mobile-item-type-switcher-wrapper svelte-rk8na7">`);
        Dropdown($$renderer3, {
          label: typeof store_get($$store_subs ??= {}, "$currentType", currentType) === "number" ? "Tier 2 Old" : store_get($$store_subs ??= {}, "$currentType", currentType),
          children: ($$renderer4) => {
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === "ALL",
              fn: resetTypeToAll(),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->ALL`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === "Weapon",
              fn: filterItemsByType("Weapon", store_get($$store_subs ??= {}, "$currentTier", currentTier)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->WEAPONS`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === "Defense",
              fn: filterItemsByType("Defense", store_get($$store_subs ??= {}, "$currentTier", currentTier)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->DEFENSE`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === "Magic",
              fn: filterItemsByType("Magic", store_get($$store_subs ??= {}, "$currentTier", currentTier)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->MAGIC`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === "Jungle",
              fn: filterItemsByType("Jungle", store_get($$store_subs ??= {}, "$currentTier", currentTier)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->JUNGLE`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === "Movement",
              fn: filterItemsByType("Movement", store_get($$store_subs ??= {}, "$currentTier", currentTier)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->MOVEMENT`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === "Support",
              fn: filterItemsByType("Support", store_get($$store_subs ??= {}, "$currentTier", currentTier)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->SUPPORT`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button2($$renderer4, {
              active: store_get($$store_subs ??= {}, "$currentType", currentType) === 0,
              fn: filterItemsByType(0, store_get($$store_subs ??= {}, "$currentTier", currentTier)),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->T2 OLD`);
              }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div></div>`);
      }
      $$renderer3.push(`<!--]--> `);
      {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <div class="main-wrapper svelte-rk8na7"><span${attr_class("svelte-rk8na7", void 0, { "items-container-wrapper": !isOpen_itemDrawer })}>`);
      Container($$renderer3, {
        styles: "background-color: transparent; display: block; padding: 0; border: none; box-shadow: none;",
        children: ($$renderer4) => {
          $$renderer4.push(`<div${attr_class("svelte-rk8na7", void 0, {
            "items-container": !isOpen_itemDrawer,
            "items-container--visible": isOpen_itemDrawer
          })}><!--[-->`);
          const each_array = ensure_array_like(mainIterable);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let item = each_array[$$index];
            ItemCard($$renderer4, {
              src: item.image,
              itemName: item.name,
              itemPrice: `💰 ${stringify(item.price)}`,
              fn: previewItem(item.name),
              utilFn: isOpen_itemDrawer && toggleMobileItemSelection(),
              activeItem,
              itemId: item.id,
              abilities: item.abilities,
              attributes: item.attributes
            });
          }
          $$renderer4.push(`<!--]--></div>`);
        }
      });
      $$renderer3.push(`<!----></span> `);
      if (!isOpen_itemDrawer) {
        $$renderer3.push("<!--[-->");
        Container($$renderer3, {
          styles: "display: block;",
          children: ($$renderer4) => {
            ItemPreview($$renderer4, spread_props([previewData, { itemData, previewItem }]));
          }
        });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="mobile-item-chooser-toggle svelte-rk8na7">`);
      Toggles($$renderer3, {
        iconOnly: "true",
        iconOnlyButtonStyle: "border-radius: 20px; padding: 10px; border: 3px solid #64676D; box-shadow: 0 8px #282A2F;",
        iconOnlyToggleStyle: "font-size: 40px;",
        no_collapse: "true",
        toggle_icon: "ep:menu",
        anchor_direction: "left",
        buttons: [
          {
            name: "a",
            active_indicator: "a",
            active_value: "a",
            fn: toggleMobileItemSelection()
          }
        ]
      });
      $$renderer3.push(`<!----></div>`);
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
export {
  _page as default
};
