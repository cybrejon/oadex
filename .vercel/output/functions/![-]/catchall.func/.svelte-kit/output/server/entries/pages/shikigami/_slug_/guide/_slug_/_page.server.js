import { g as guidesIndex } from "../../../../../../chunks/guides_index.js";
import remarkParse from "remark-parse";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
async function load({ params, url }) {
  const shikigami_name = url.searchParams.get("shikigami_name");
  const guideList = guidesIndex[shikigami_name] || [];
  const guideMeta = guideList.find((g) => g.filename === params.slug);
  if (!guideMeta) {
    throw new Error(`Guide "${params.slug}" not found for ${shikigami_name}`);
  }
  const guideModule = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../../lib/data/guides/Mushishi/brief_mushishi_guide_by_maximus_111.js": () => import("../../../../../../chunks/brief_mushishi_guide_by_maximus_111.js"), "../../../../../lib/data/guides/Mushishi/test_brief_mushishi_guide_by_maximus_111.js": () => import("../../../../../../chunks/test_brief_mushishi_guide_by_maximus_111.js"), "../../../../../lib/data/guides/Tanuki/begginers_guide_for_tanuki.js": () => import("../../../../../../chunks/begginers_guide_for_tanuki.js"), "../../../../../lib/data/guides/Tanuki/begginers_guide_for_tanuki_(original).js": () => import("../../../../../../chunks/begginers_guide_for_tanuki_(original).js") }), `../../../../../lib/data/guides/${guideMeta.folder}/${params.slug}.js`, 10);
  const guide_data = guideModule.default;
  async function parseMarkdown(i) {
    const file = await unified().use(remarkParse).use(remarkRehype).use(rehypeSanitize).use(rehypeStringify).process(i);
    return String(file);
  }
  const markdown = await parseMarkdown(guide_data.md);
  return { guide_data, markdown };
}
export {
  load
};
