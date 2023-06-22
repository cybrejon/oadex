<script>
  import Icon from '@iconify/svelte';
  export let text;
  export let area_name;
  export let styles;
  export let noIcon;
  export let container_margin;
</script>

<div class="container" style:grid-area={area_name} style:margin={container_margin}>
  {#if !noIcon}
    <Icon icon="ic:round-warning" style="font-size: 24px;" />
  {/if}
  {#if text}
    <p style={styles}>{text}</p>
  {:else}
    <p>Soon!</p>
  {/if}
  
</div>

<style>
  .container {
    padding: 10px;
    /* background-color: #40444B; */
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    border-radius: 10px;
  }

  @media only screen and (max-width: 500px) {
    .container {
      flex-direction: column;
    }
  }
</style>