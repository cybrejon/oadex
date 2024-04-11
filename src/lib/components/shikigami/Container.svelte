<script>
  export let area_name;
  export let style;
  export let styles;
  export let id;
</script>

<div {id} class={style === 'transparent' ? 'container--alt' : 'container'} style:grid-area={area_name} style={styles}>
  <slot></slot>
</div>

<style>
  .container {
    background-color: #40444B;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    border: 2px solid rgba(255, 255, 255, 0.189);
    box-shadow: 0 8px #282a2f;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 10px;
  }

  .container--alt {
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    filter: drop-shadow(0 10px 10px #282a2f52) drop-shadow(0 30px 30px #282a2f52) drop-shadow(0 80px 60px #282a2f52);
  }
</style>