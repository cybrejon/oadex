<script>
  /**
   * @typedef {Object} Props
   * @property {boolean} [ordered]
   * @property {any} start
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { ordered = false, start, children } = $props();
</script>

{#if ordered}
  <ol {start}>
    {@render children?.()}
  </ol>
{:else}
  <ul>
    {@render children?.()}
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