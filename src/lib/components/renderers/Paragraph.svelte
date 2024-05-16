<script>
  export let text;
  import SvelteMarkdown from 'svelte-markdown';
</script>

<SvelteMarkdown source={text} />