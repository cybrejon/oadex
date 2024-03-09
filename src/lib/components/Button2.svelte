<script>
  export let type = 'button';
  export let icon;
  export let fn;
  export let link;
  export let active = false;
  export let styles;
  import Icon from '@iconify/svelte';
</script>

{#if type === 'button'}
  <button style={styles} class:iconless-padding={!icon} class:active type="button" on:click={fn}>
    {#if icon}
      <Icon icon={icon} style='font-size: 24px;' />
    {/if}
    <slot />
  </button>
{/if}

{#if type === 'link'}
  <a style={styles} class:iconless-padding={!icon} class:active href={link} on:click={fn}>
    {#if icon}
      <Icon icon={icon} style='font-size: 24px;' />
    {/if}
    <slot />
  </a>
{/if}

<style>

  .active {
    background-color: #CDFE05;
    color: #2E3035;
    pointer-events: none;
  }

  .iconless-padding {
    padding: 10px 15px;
  }

  button, a {
    font-weight: 600;
    border: none;
    padding: 6px 15px;
    display: flex;
    column-gap: 10px;
    border-radius: 6px;
    color: #ffffffad;
    align-items: center;
    justify-content: center;
    border: none;
    font-family: 'Montserrat', sans-serif;
    /* background-color: #4c5058; */
    background-color: transparent;
    outline-offset: 3px;
    transition: .2s;
    outline: 2px dashed transparent;
  }

  a:hover {
    text-decoration: none;
  }

  button:hover, a:hover {
    background-color: #565A60;
  }

  button:focus {
    background-color: #f2ffbc;
    color: #2E3035;
  }

  button:active, a:active {
    background-color: #CDFE05;
    box-shadow: none;
    color: #2E3035;
    outline: 2px dashed #CDFE05;
  }
</style>