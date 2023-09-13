<script>
  export let styles;
</script>

<div style={styles}>
  <slot />
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