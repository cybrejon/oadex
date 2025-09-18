<script>
  let { area_name, styles, children } = $props();
</script>

<div style:grid-area={area_name} style={styles}>
  {@render children?.()}
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 5px;
    background-color: #2E3035;
    border-radius: 10px;
  }
</style>