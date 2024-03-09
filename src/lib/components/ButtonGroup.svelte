<script>
  export let area_name;
  export let styles;
</script>

<div style:grid-area={area_name} style={styles}>
  <slot />
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