import "clsx";
import { $ as attr_style, W as attr } from "../../../chunks/index2.js";
import { I as Icon } from "../../../chunks/Icon.js";
function Section($$renderer, $$props) {
  let { styles, children } = $$props;
  $$renderer.push(`<div${attr_style(styles)} class="svelte-7a8mnf">`);
  children?.($$renderer);
  $$renderer.push(`<!----></div>`);
}
function SectionCard($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<div class="svelte-1ni0iet">`);
  children?.($$renderer);
  $$renderer.push(`<!----></div>`);
}
const yoto = "/_app/immutable/assets/yoto.DJKCxiqh.png";
const yasha = "/_app/immutable/assets/yasha.yPa9odMH.png";
function Hero($$renderer) {
  $$renderer.push(`<img class="hero-image svelte-tc3uts" alt="yoto hime"${attr("src", yoto)}/> <div class="hero svelte-tc3uts"><div class="hero-visuals"><img class="hero-image--alt svelte-tc3uts" alt="yasha"${attr("src", yasha)}/></div> <div class="text svelte-tc3uts"><span class="hero-text-wrapper-1 svelte-tc3uts"><h1 class="hero-text svelte-tc3uts">Unleash the Spirits Master the Battle</h1></span> <span class="hero-description-wrapper-1 svelte-tc3uts"><h2 class="hero-description svelte-tc3uts">Dive into the World of Japanese Mythology in the Ultimate MOBA Experience</h2></span> <div class="platforms svelte-tc3uts">`);
  Icon($$renderer, { icon: "bxl:play-store", style: "font-size: 30px;" });
  $$renderer.push(`<!----> `);
  Icon($$renderer, { icon: "mingcute:appstore-fill", style: "font-size: 30px;" });
  $$renderer.push(`<!----> <a href="https://play.google.com/store/apps/details?id=com.netease.g78na.gb" class="download svelte-tc3uts">DOWNLOAD</a></div></div></div>`);
}
const skin1 = "/_app/immutable/assets/skin1.B1VuYnEh.png";
const skin2 = "/_app/immutable/assets/skin2.BwfUVWMS.png";
const skin4 = "/_app/immutable/assets/skin4.D9UaRDLX.png";
function Art($$renderer) {
  $$renderer.push(`<div class="skins svelte-13kv58j"><div class="skins-text svelte-13kv58j"><h1 class="hero-text svelte-13kv58j">Beautiful Skins</h1> <h2 class="hero-description svelte-13kv58j">Onmyoji Arena: Unveil a World of Aesthetic Mastery</h2></div> <div class="skins-gallery svelte-13kv58j"><div class="skin svelte-13kv58j"><img class="skin-image-glow svelte-13kv58j"${attr("src", skin1)} alt="skin"/> <img class="skin-image svelte-13kv58j"${attr("src", skin1)} alt="skin"/></div> <div class="skin svelte-13kv58j"><img class="skin-image-glow svelte-13kv58j"${attr("src", skin2)} alt="skin"/> <img class="skin-image svelte-13kv58j"${attr("src", skin2)} alt="skin"/></div> <div class="skin svelte-13kv58j"><img class="skin-image-glow svelte-13kv58j"${attr("src", skin4)} alt="skin"/> <img class="skin-image svelte-13kv58j"${attr("src", skin4)} alt="skin"/></div></div></div>`);
}
function _page($$renderer) {
  $$renderer.push(`<div class="grow-this-shit-on-mobile svelte-1j6ictg"></div> `);
  Section($$renderer, {
    styles: "position: relative;",
    children: ($$renderer2) => {
      SectionCard($$renderer2, {
        children: ($$renderer3) => {
          Hero($$renderer3);
        }
      });
    }
  });
  $$renderer.push(`<!----> <div class="grow-this-shit-on-mobile svelte-1j6ictg"></div> `);
  Section($$renderer, {
    children: ($$renderer2) => {
      Art($$renderer2);
    }
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
