<script>
  import Icon from '@iconify/svelte';
  import banner from '$lib/assets/banner4.webp'
  import { page } from '$app/stores';
  import { isSideBarOpen } from './sidebarState';

  function toggle() {
    $isSideBarOpen = !$isSideBarOpen;
  }

</script>

<button on:click={toggle} type="button" class="sidebar-toggle">
  <Icon icon='heroicons-outline:menu' style='font-size: 24px;' />
</button>

{#if $isSideBarOpen}
<div class="sidebar">

  <div class="sidebar-content">

    <div class="banner-container">
      <a class="banner-anchor" href="/">
        <img class="banner" src="{banner}" alt="banner">
      </a>
    </div>

    <nav>
      <a on:click={toggle} class:active={$page.url.pathname === '/'} href="/">
        <Icon icon='ph:scroll-fill' style='font-size: 24px;' />
        Shikigamis
      </a>
      <a on:click={toggle} class:active={$page.url.pathname === '/items'} href="/items">
        <Icon icon='game-icons:spiral-bottle' style='font-size: 24px;' />
        Items
      </a>
      <a on:click={toggle} class:active={$page.url.pathname === '/chart'} href="/chart?mode=all">
        <Icon icon='tabler:table-filled' style='font-size: 24px;' />
        Chart
      </a>
    </nav>

  </div>
  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={toggle} contenteditable="false" class="sidebar-close-area"></div>

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
  @keyframes sidebarSlideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
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
    animation: sidebarSlideIn .2s;
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