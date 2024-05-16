<script>
  export let ordered = false;
  export let start;
</script>

{#if ordered}
  <ol {start}>
    <slot />
  </ol>
{:else}
  <ul>
    <slot />
  </ul>
{/if}


<style>
  ul, ol {
    padding-left: 25px;
    margin: 5px 0 15px 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>