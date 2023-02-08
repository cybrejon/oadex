<script>
  export let area_name;
</script>

<div class="container" style:grid-area={area_name}>
  <slot></slot>
</div>

<style>
  .container {
    background-color: #40444B;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    row-gap: 10px;
    box-shadow:
      0 10px 10px #282a2f52,
      0 30px 30px #282a2f52,
      0 80px 60px #282a2f52;
  }
</style>