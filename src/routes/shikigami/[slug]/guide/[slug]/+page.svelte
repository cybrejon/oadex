<script>
  export let data;

  import SvelteMarkdown from 'svelte-markdown'
  import BlockQuote from '$lib/components/renderers/BlockQuote.svelte';
  import HorizontalRule from '$lib/components/renderers/HorizontalRule.svelte';
  import Heading from '$lib/components/renderers/Heading.svelte';
  import List from '$lib/components/renderers/List.svelte';
  import Paragraph from '$lib/components/renderers/Paragraph.svelte';
  import Strong from '$lib/components/renderers/inline/Strong.svelte';

</script>

<div class="markdown-container">
  <h1 class="title">{data.guide_data.title}</h1>
  
  <SvelteMarkdown source={data.guide_data.md.join('\n\n')}
    renderers={
      {
        blockquote: BlockQuote,
        hr: HorizontalRule,
        heading: Heading,
        list: List,
        paragraph: Paragraph,
      }
    }
  />
</div>

<style>
  .title {
    margin-bottom: 15px;
  }

  :global(.markdown-container) {
    & > p {
      margin: 5px 0 10px 0;
    }
  }
</style>