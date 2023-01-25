import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, h as each, d as add_attribute, p as add_styles } from './index-8bfb30f2.js';
import { p as page } from './stores-45468398.js';
import { s as shikiga_data, b as images } from './store-539b4fa8.js';
import './index2-d3de44d4.js';
import './images-97e4a5af.js';

const css$4 = {
  code: ".container.svelte-13v3to6{background-color:#40444B;padding:20px 15px 15px 15px;border-radius:10px;display:flex;justify-content:space-between;flex-direction:column;row-gap:10px;box-shadow:0 10px 10px #282a2f52,\n      0 30px 30px #282a2f52,\n      0 80px 60px #282a2f52}",
  map: null
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { area_name } = $$props;
  if ($$props.area_name === void 0 && $$bindings.area_name && area_name !== void 0)
    $$bindings.area_name(area_name);
  $$result.css.add(css$4);
  return `<div class="${"container svelte-13v3to6"}"${add_styles({ "grid-area": area_name })}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const css$3 = {
  code: ".name.svelte-1oxeg5d{font-size:1.6rem;font-weight:600}.classification-ul.svelte-1oxeg5d{display:flex;justify-content:start;align-items:center;column-gap:5px}.c-li.svelte-1oxeg5d{font-size:.7rem;font-weight:900;display:inline-block;border-radius:100px;padding:5px 10px}.vas.svelte-1oxeg5d{background-color:#3C3F46;border-radius:6px;padding:15px}.vas-ul.svelte-1oxeg5d{margin-top:10px;list-style-type:none;display:flex;flex-direction:column;row-gap:5px}.vas-li.svelte-1oxeg5d{font-size:.9rem}.vas-title.svelte-1oxeg5d{font-weight:800}.lane.svelte-1oxeg5d{font-weight:800}.ninja.svelte-1oxeg5d{background-color:rgba(218, 138, 25, 0.178)}.ninja-name.svelte-1oxeg5d{color:rgb(255, 215, 158)}.mage.svelte-1oxeg5d{background-color:rgba(25, 125, 218, 0.178)}.mage-name.svelte-1oxeg5d{color:rgb(148, 203, 255)}.support.svelte-1oxeg5d{background-color:rgba(25, 218, 25, 0.178)}.support-name.svelte-1oxeg5d{color:rgb(147, 255, 147)}.samurai.svelte-1oxeg5d{background-color:rgba(221, 86, 86, 0.267)}.samurai-name.svelte-1oxeg5d{color:rgb(255, 96, 96)}.tank.svelte-1oxeg5d{background-color:rgba(178, 97, 221, 0.322)}.tank-name.svelte-1oxeg5d{color:rgb(206, 150, 237)}.marksman.svelte-1oxeg5d{background-color:rgba(215, 218, 25, 0.178)}.marksman-name.svelte-1oxeg5d{color:rgb(231, 233, 135)}",
  map: null
};
const Basic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { area_name } = $$props;
  let { name, classification, voices, lane, specialty } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.area_name === void 0 && $$bindings.area_name && area_name !== void 0)
    $$bindings.area_name(area_name);
  $$result.css.add(css$3);
  return `${validate_component(Container, "Container").$$render($$result, { area_name }, {}, {
    default: () => {
      return `<div class="${"name-container"}"><p class="${"name " + escape(classification[0].toLowerCase(), true) + "-name svelte-1oxeg5d"}">🪪 ${escape(name)}</p></div>
  <ul class="${"classification-ul svelte-1oxeg5d"}">🏛️
    ${each(classification, (role) => {
        return `<li class="${"c-li " + escape(role.toLowerCase(), true) + " svelte-1oxeg5d"}">${escape(role)}</li>`;
      })}</ul>
  <p class="${"lane svelte-1oxeg5d"}">📍 ${escape(lane)}</p>
  <p class="${"lane svelte-1oxeg5d"}">⚖️ ${escape(specialty)}</p>
  <div class="${"vas svelte-1oxeg5d"}"><p class="${"vas-title svelte-1oxeg5d"}">Voice Actors</p>
    <ul class="${"vas-ul svelte-1oxeg5d"}">${voices[0] ? `<li class="${"vas-li svelte-1oxeg5d"}">🇯🇵 ${escape(voices[0])}</li>` : ``}
      ${voices[1] ? `<li class="${"vas-li svelte-1oxeg5d"}">🇨🇳 ${escape(voices[1])}</li>` : ``}
      ${voices[2] ? `<li class="${"vas-li svelte-1oxeg5d"}">🇺🇸 ${escape(voices[2])}</li>` : ``}
      ${voices[3] ? `<li class="${"vas-li svelte-1oxeg5d"}">🇰🇷 ${escape(voices[3])}</li>` : ``}</ul></div>`;
    }
  })}`;
});
const css$2 = {
  code: ".btn.svelte-95q0qc{text-decoration:none;text-align:center;border:none;font-size:1rem;padding:6px 10px 4px 10px;border-radius:4px;font-family:'Montserrat', sans-serif;background-color:transparent;font-weight:bold;color:#8b8e95;transition:.1s}.btn.svelte-95q0qc:hover{background-color:#585A5F;color:#c0c2c6}.btn.svelte-95q0qc:active{background-color:#CDFE05;color:#282A2F}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { button_type } = $$props;
  let { link } = $$props;
  if ($$props.button_type === void 0 && $$bindings.button_type && button_type !== void 0)
    $$bindings.button_type(button_type);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css$2);
  return `${button_type === "anchor" ? `<a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", link, 0)} class="${"btn svelte-95q0qc"}">${slots.default ? slots.default({}) : ``}</a>` : `<button class="${"btn svelte-95q0qc"}">${slots.default ? slots.default({}) : ``}</button>`}`;
});
const css$1 = {
  code: ".shiki-2d-art.svelte-1gr5tpr{width:100%}",
  map: null
};
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { area_name } = $$props;
  let { data } = $$props;
  let { link } = $$props;
  let { image_url, image_alt } = data;
  if ($$props.area_name === void 0 && $$bindings.area_name && area_name !== void 0)
    $$bindings.area_name(area_name);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css$1);
  return `${validate_component(Container, "Container").$$render($$result, { area_name }, {}, {
    default: () => {
      return `<img class="${"shiki-2d-art svelte-1gr5tpr"}"${add_attribute("alt", image_alt, 0)}${add_attribute("src", image_url, 0)}>
  ${validate_component(Button, "Button").$$render($$result, { button_type: "anchor", link }, {}, {
        default: () => {
          return `OPEN`;
        }
      })}`;
    }
  })}`;
});
const css = {
  code: '.container.svelte-1hz3sbb{margin-top:30px;display:grid;grid-template-columns:repeat(4, 1fr);grid-template-rows:repeat(3, 1fr);justify-content:flex-start;grid-template-areas:"basic gallery . ."\n      ". . . .";gap:20px;align-content:center;flex-wrap:wrap}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $shikiga_data, $$unsubscribe_shikiga_data;
  let $page, $$unsubscribe_page;
  let $images, $$unsubscribe_images;
  $$unsubscribe_shikiga_data = subscribe(shikiga_data, (value) => $shikiga_data = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_images = subscribe(images, (value) => $images = value);
  let shiki_id = $page.url.pathname.slice(11);
  let { data } = $$props;
  const { dictionary } = data;
  const shiki_names = Object.keys($shikiga_data);
  const selected_shiki_name = shiki_names.filter((name) => $shikiga_data[name].式神ID.toString() === shiki_id);
  const curr_shiki_obj = $shikiga_data[selected_shiki_name];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_shikiga_data();
  $$unsubscribe_page();
  $$unsubscribe_images();
  return `<div class="${"container svelte-1hz3sbb"}">${validate_component(Basic, "Basic").$$render(
    $$result,
    {
      area_name: "basic",
      data: {
        name: curr_shiki_obj.式神名称,
        classification: curr_shiki_obj.式神定位.map((role) => dictionary.roles[role]),
        voices: curr_shiki_obj.cv名字,
        lane: dictionary.lanes[curr_shiki_obj.推荐分路],
        specialty: curr_shiki_obj.式神标签
      }
    },
    {},
    {}
  )}

  ${validate_component(Gallery, "Gallery").$$render(
    $$result,
    {
      link: $images[curr_shiki_obj.式神全身像],
      area_name: "gallery",
      data: {
        image_url: $images[curr_shiki_obj.式神全身像],
        image_alt: curr_shiki_obj.式神名称
      }
    },
    {},
    {}
  )}

</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-31a0886f.js.map
