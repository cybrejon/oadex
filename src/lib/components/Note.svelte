<script>
  import Icon from '@iconify/svelte';
  export let text;
  export let area_name;
  export let styles;
  export let noIcon;
</script>

<div class="container" style:grid-area={area_name}>
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
</style>