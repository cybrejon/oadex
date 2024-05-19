import { PRIVATE_HOST_IP } from '$env/static/private';
import remarkParse from 'remark-parse';
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export async function load({ params, url, fetch }) {
  const shikigami_name = url.searchParams.get('shikigami_name');
  // const raw_guide_data = await fetch(`http://localhost:3001/cms/api/guide?shiki_id=${shikigami_name}&filename=${params.slug}`);
  const raw_guide_data = await fetch(`${PRIVATE_HOST_IP}/cms/api/guide?shiki_id=${shikigami_name}&filename=${params.slug}`);
  const guide_data = await raw_guide_data.json();

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

  return {
    guide_data,
    markdown
  }
}