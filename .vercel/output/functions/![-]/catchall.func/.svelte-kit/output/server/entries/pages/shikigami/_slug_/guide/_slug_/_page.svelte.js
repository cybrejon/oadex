import { e as escape_html } from "../../../../../../chunks/context.js";
import "clsx";
import { h as html } from "../../../../../../chunks/Icon.js";
import { C as Container } from "../../../../../../chunks/Container.js";
import { B as Button2 } from "../../../../../../chunks/Button2.js";
import { B as ButtonGroup } from "../../../../../../chunks/ButtonGroup.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    ButtonGroup($$renderer2, {
      area_name: "page-controls",
      styles: "justify-content: flex-start; flex-wrap: wrap; margin-bottom: 20px;",
      children: ($$renderer3) => {
        Button2($$renderer3, {
          icon: "ion:arrow-back",
          type: "button",
          fn: () => history.back()
        });
      }
    });
    $$renderer2.push(`<!----> `);
    Container($$renderer2, {
      styles: "padding: 30px 15px;",
      children: ($$renderer3) => {
        $$renderer3.push(`<article class="markdown-container markdown-body"><h1 class="title svelte-135solu">${escape_html(data.guide_data.title)}</h1> ${html(data.markdown)}</article>`);
      }
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
