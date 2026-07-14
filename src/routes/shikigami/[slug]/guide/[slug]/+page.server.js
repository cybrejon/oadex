import guidesIndex from '$lib/data/guides_index.js';
import remarkParse from 'remark-parse';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export async function load({ params, url }) {
  const shikigami_name = url.searchParams.get('shikigami_name');
  const guideList = guidesIndex[shikigami_name] || [];
  const guideMeta = guideList.find(g => g.filename === params.slug);

  if (!guideMeta) {
    throw new Error(`Guide "${params.slug}" not found for ${shikigami_name}`);
  }

  const guideModule = await import(`$lib/data/guides/${guideMeta.folder}/${params.slug}.js`);
  const guide_data = guideModule.default;

  async function parseMarkdown(i) {
    const file = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(i);
    return String(file);
  }

  const markdown = await parseMarkdown(guide_data.md);

  return { guide_data, markdown };
}
