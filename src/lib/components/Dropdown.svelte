<script>
  import Icon from '@iconify/svelte';
  import { onMount, onDestroy } from 'svelte';

  /**
   * @typedef {Object} Props
   * @property {string} [icon]
   * @property {any} label
   * @property {any} activeLabel
   * @property {any} styles
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let {
    icon = 'iconamoon:arrow-down-2-bold',
    label,
    activeLabel,
    styles,
    children
  } = $props();
  let isOpen = $state(false);
  let dropdownElement;

  export function toggle() {
    isOpen = !isOpen;
  }

  function handleClickOutside(event) {
    if (dropdownElement && !dropdownElement.contains(event.target)) {
      isOpen = false;
    }
  }

  onMount(() => {
    // Only add event listener if running in browser environment
    if (typeof document !== 'undefined') {
      document.addEventListener('click', handleClickOutside);
    }
  });

  onDestroy(() => {
    // Only remove event listener if running in browser environment
    if (typeof document !== 'undefined') {
      document.removeEventListener('click', handleClickOutside);
    }
  });
</script>

<div class="dropdown" style={styles} bind:this={dropdownElement}>
  <button onclick={toggle} type="button" class="dropdown-toggle">
    <Icon {icon} style='font-size: 24px;' />
    {#if label}
      {label}
    {/if}
    {#if activeLabel}
      <span>
        {activeLabel}
      </span>
    {/if}
  </button>
  {#if isOpen}
    <div class="dropdown-items">
      {@render children?.()}
    </div>
  {/if}

</div>

<style>
  .dropdown {
    position: relative;
    background-color: #2E3035;
    border-radius: 10px;
    padding: 5px;
  }
  .dropdown-toggle {
    min-width: 100px;
    user-select: none;
    gap: 10px;
    padding: 6px 18px 6px 15px;
    border: none;
    background-color: #565A60;
    color: #C9CAC8;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dropdown-toggle:hover, .dropdown-toggle:active {
    background-color: #CDFE05;
    color: #2E3035;
  }
  .dropdown-items {
    display: flex;
    gap: 5px;
    flex-direction: column;
    background-color: #2E3035;
    position: absolute;
    top: 50px;
    padding: 5px;
    left: 0;
    right: 0;
    border-radius: 10px;
  }
</style>