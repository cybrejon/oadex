<script>
  import Icon from '@iconify/svelte';
  export let label;
  export let activeLabel;
  let isOpen = false;
  export function toggle() {
    isOpen = !isOpen;
  }
</script>

<div class="dropdown">
  <button on:click={toggle} type="button" class="dropdown-toggle">
    <Icon icon='iconamoon:arrow-down-2-bold' style='font-size: 24px;' />
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
      <slot />
    </div>
  {/if}
  
</div>

<style>
  .dropdown {
    position: relative;
    background-color: #2E3035;
    border-radius: 100px;
    padding: 5px;
  }
  .dropdown-toggle {
    gap: 10px;
    padding: 6px 18px 6px 15px;
    border: none;
    background-color: #565A60;
    color: #C9CAC8;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
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
    top: 20px;
    padding: 25px 5px 5px 5px;
    left: 0;
    right: 0;
    border-bottom-left-radius: 23px;
    border-bottom-right-radius: 23px;
    z-index: -1;
  }
</style>