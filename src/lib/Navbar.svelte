<script>

  // import components
  import Icon from '@iconify/svelte';

  export let active_path;
  export let routeId;

  export let type;

  const closeNav = (time) => () => {
    if (time) {
      setTimeout(() => {
        document.getElementById('mn').style.display = 'none';
        document.getElementById('nav-overlay').style.display = 'none';
      }, time);
    } else {
      document.getElementById('mn').style.display = 'none';
      document.getElementById('nav-overlay').style.display = 'none';
    }
  }

  function openNav() {
    document.getElementById('mn').style.display = 'flex';
    document.getElementById('nav-overlay').style.display = 'block';
  }

</script>

{#if type === "mobile"}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div id="nav-overlay" on:click={closeNav()} class="overlay"></div>
  <div class="mobile-nav">
    <button on:click={openNav} class="mobile-nav-toggle" type="button"><Icon icon="icon-park-outline:hamburger-button" style="font-size: 24px;" /></button>
    <ul id="mn" class="mobile-nav-ul">
      <li><a on:click={closeNav(250)} class="{active_path === '/' || routeId === '/shikigami/[slug]' ? "nav-item nav-item--active" : "nav-item"}" href="/">SHIKIS</a></li>
      <li><a on:click={closeNav(250)} class="{active_path === '/items' ? "nav-item nav-item--active" : "nav-item"}" href="/items">ITEMS</a></li>
      <li><a on:click={closeNav(250)} class="{active_path === '/chart' ? "nav-item nav-item--active" : "nav-item"}" href="/chart?mode=all">CHART</a></li>
      <!-- <li><a on:click={closeNav(250)} class="{active_path === '/onmyodos' ? "nav-item nav-item--active" : "nav-item"}" href="/onmyodos">ONMYODOS</a></li> -->
      <!-- <li><a on:click={closeNav(250)} class="{active_path === '/spells' ? "nav-item nav-item--active" : "nav-item"}" href="/spells">SPELLS</a></li> -->
    </ul>
  </div>
{:else}
  <ul class="desktop-nav">
    <li><a class="{active_path === '/' || routeId === '/shikigami/[slug]' ? "nav-item nav-item--active" : "nav-item"}" href="/">SHIKIS</a></li>
    <li><a class="{active_path === '/items' ? "nav-item nav-item--active" : "nav-item"}" href="/items">ITEMS</a></li>
    <li><a class="{active_path === '/chart' ? "nav-item nav-item--active" : "nav-item"}" href="/chart?mode=all">CHART</a></li>
    <!-- <li><a class="{active_path === '/onmyodos' ? "nav-item nav-item--active" : "nav-item"}" href="/onmyodos">ONMYODOS</a></li> -->
    <!-- <li><a class="{active_path === '/spells' ? "nav-item nav-item--active" : "nav-item"}" href="/spells">SPELLS</a></li> -->
  </ul>
{/if}


<style>

  .overlay {
    display: none;
    z-index: 11;
    background-color: #282a2fc9;
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .mobile-nav-toggle {
    transition: .1s;
    display: none;
    margin-right: 10px;
    margin-top: 10px;
    border: 2px solid #70737b;
    padding: 10px 10px 6px 10px;
    background-color: #585A5F;
    box-shadow: 0 8px #282A2F;
    color: #fff;
    border-radius: 10px;
  }

  .mobile-nav-toggle:hover {
    background-color: #CDFE05;
    border-color: transparent;
    color: #282A2F;
  }

  .mobile-nav-toggle:active {
    color: #fff;
    border-color: transparent;
    background-color: #282A2F;
    transform: translateY(8px);
    box-shadow: none;
  }

  .mobile-nav {
    z-index: 11;
    position: relative;
  }

  .mobile-nav-ul {
    display: none;
    text-align: center;
    box-shadow: 0 8px #282a2f;
    border-radius: 20px;
    background-color: #3C3F46;
    border: 4px solid #585A5F;
    padding: 10px 10px 15px 10px;
    position: fixed;
    top: 20px;
    right: 10px;
    row-gap: 15px;
    flex-direction: column;
  }

  ul {
    list-style-type: none;
    display: flex;
    column-gap: 10px;
  }

  .nav-item {
    background-color: rgba(255, 255, 255, 0.118);
    border: 2px solid rgba(255, 255, 255, 0.189);
    box-shadow: 0 8px #282a2f;
    border-radius: 10px;
    text-decoration: none;
    display: block;
    color: #ffffffad;
    padding: 10px 20px 8px 20px;
    font-weight: 800;
    transition: .1s;
  }

  .nav-item:hover {
    background-color: #CDFE05;
    color: #282a2f;
    border-color: transparent;
  }

  .nav-item:active {
    box-shadow: none;
    transform: translateY(8px);
  }

  .nav-item--active {
    pointer-events: none;
    transform: translateY(8px);
    background-color: #2e3035;
    border-color: transparent;
    box-shadow: none;
  }

  @media only screen and (max-width: 800px) {
    .mobile-nav-toggle {
      display: block;
    }
    .desktop-nav {
      display: none;
    }
  }
</style>