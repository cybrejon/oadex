<script>
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<div>
  {@render children?.()}
</div>

<style>
  div {
    padding: 50px;
    background-image: linear-gradient(to bottom right, #c7ab47, #ff5a83);
    border-radius: 40px;
    position: relative;
  }

  @media only screen and (width < 500px) {
    div {
      transform: skewY(5deg);
      border-radius: 0;
    }
  }
</style>