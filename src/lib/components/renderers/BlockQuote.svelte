<script>
  import Icon from "@iconify/svelte";
  export let text = "";
  import SvelteMarkdown from 'svelte-markdown';
</script>

<div class="blockquote-container">
  <Icon icon='tabler:bulb-filled' style='font-size: 3rem;' />
  <SvelteMarkdown source={text} />
</div>

<style>
  .blockquote-container {
    margin: 15px 0;
    background-color: #3C3F46;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    gap: 20px;
    border-radius: 6px;
  }

  :global(.blockquote-container) {
    & > p {
      line-height: 26px;
    }
  }
</style>