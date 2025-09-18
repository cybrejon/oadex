<script>
  let { styles, children } = $props();
</script>

<div style={styles}>
  {@render children?.()}
</div>

<style>
  div {
    min-height: 75dvh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 60px;
  }
</style>