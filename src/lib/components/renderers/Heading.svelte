<script>
  import Icon from "@iconify/svelte";
  /**
   * @typedef {Object} Props
   * @property {string} [text]
   * @property {any} depth
   */

  /** @type {Props} */
  let { text = "", depth } = $props();
</script>

{#if depth === 1}
  <h1>{text}</h1>
{:else if depth === 2}
  <h2>{text}</h2>
{:else if depth === 3}
  <h3>{text}</h3>
{:else if depth === 4}
  <h4>{text}</h4>
{:else if depth === 5}
  <h5>{text}</h5>
{:else if depth === 6}
  <h6>{text}</h6>
{/if}

<style>
  h1, h2, h3, h4, h5, h6 {
    margin: 15px 0 10px;
  }
</style>