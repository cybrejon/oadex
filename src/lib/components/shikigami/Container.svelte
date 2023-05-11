<script>
  export let area_name;
  export let style;
</script>

<div class={style === 'transparent' ? 'container container--alt' : 'container'} style:grid-area={area_name}>
  <slot></slot>
</div>

<style>
  .container {
    background-color: #40444B;
    /* background-image: url('$lib/assets/00000031.png');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100px; */
    padding: 15px;
    border-radius: 10px;
    display: flex;
    /* justify-content: space-between; */
    flex-direction: column;
    row-gap: 10px;
    /* box-shadow:
      0 10px 10px #282a2f52,
      0 30px 30px #282a2f52,
      0 80px 60px #282a2f52; */
  }

  .container--alt {
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    filter: drop-shadow(0 10px 10px #282a2f52) drop-shadow(0 30px 30px #282a2f52) drop-shadow(0 80px 60px #282a2f52);
  }
</style>