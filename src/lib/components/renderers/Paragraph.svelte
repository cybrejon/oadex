<script>
  import SvelteMarkdown from 'svelte-markdown';
  let { text } = $props();
</script>

<SvelteMarkdown source={text} />