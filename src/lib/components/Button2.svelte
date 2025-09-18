<script>
  import Icon from '@iconify/svelte';
  /**
   * @typedef {Object} Props
   * @property {string} [type]
   * @property {any} icon
   * @property {any} fn
   * @property {any} link
   * @property {boolean} [active]
   * @property {boolean} [disabled]
   * @property {any} styles
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let {
    type = 'button',
    icon,
    fn,
    link,
    active = false,
    disabled = false,
    styles,
    children
  } = $props();
</script>

{#if type === 'button'}
  <button style={styles} class:iconless-padding={!icon} class:active type="button" onclick={fn} class:disabled>
    {#if icon}
      <Icon icon={icon} style='font-size: 24px;' />
    {/if}
    {@render children?.()}
  </button>
{/if}

{#if type === 'link'}
  <a style={styles} class:iconless-padding={!icon} class:active href={link} onclick={fn} class:disabled>
    {#if icon}
      <Icon icon={icon} style='font-size: 24px;' />
    {/if}
    {@render children?.()}
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
    user-select: none;
    font-weight: 600;
    border: none;
    padding: 6px 15px;
    display: flex;
    font-size: .8rem;
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
    outline: 2px dashed transparent;
  }

  .disabled {
    cursor: not-allowed;
    opacity: .3;
    pointer-events: none;
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