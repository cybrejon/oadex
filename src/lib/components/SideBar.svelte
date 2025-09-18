<script>
  import Icon from '@iconify/svelte';
  import banner from '$lib/assets/banner4.webp'
  import { page } from '$app/state';
  import { isSideBarOpen } from './sidebarState';
  import { fly } from 'svelte/transition';
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();

  function toggle() {
    $isSideBarOpen = !$isSideBarOpen;
  }

</script>

<button onclick={toggle} type="button" class="sidebar-toggle">
  <Icon icon='heroicons-outline:menu' style='font-size: 24px;' />
</button>

{#if $isSideBarOpen}
<div transition:fly={{ delay: 0, duration: 300, x: -100, y: 0 }} class="sidebar">

  <div class="sidebar-content">

    <div class="banner-container">
      <a class="banner-anchor" href="/">
        <img class="banner" src="{banner}" alt="banner">
      </a>
    </div>

    <nav>
      <a onclick={toggle} class:active={page.url.pathname === '/'} href="/">
        <Icon icon='ph:scroll-fill' style='font-size: 24px;' />
        Shikigamis
      </a>
      <a onclick={toggle} class:active={page.url.pathname === '/items'} href="/items">
        <Icon icon='game-icons:spiral-bottle' style='font-size: 24px;' />
        Items
      </a>
      <a onclick={toggle} class:active={page.url.pathname === '/chart'} href="/chart?mode=all">
        <Icon icon='tabler:table-filled' style='font-size: 24px;' />
        Chart
      </a>
    </nav>

    {@render children?.()}

  </div>
  
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div onclick={toggle} contenteditable="false" class="sidebar-close-area"></div>

</div>
{/if}

<style>
  .active {
    color: #ffffffe6;
  }
  .sidebar-toggle {
    display: none;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.118);
    border: 2px solid rgba(255, 255, 255, 0.189);
    box-shadow: 0 8px #282a2f;
    border-radius: 10px;
    color: #ffffffad;
    padding: 10px;
    cursor: pointer;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 11;
    display: grid;
    grid-template-columns: 80% auto;
  }
  .sidebar-content {
    padding: 10px;
    background-color: #282a2f;
  }
  .banner-container {
    margin-top: 15px;
  }
  .banner {
    width: 200px;
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  nav > a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 15px 0;
    color: #ffffff6c;
  }

  @media only screen and (max-width: 800px) {
    .sidebar-toggle {
      display: flex;
    }
  }
</style>