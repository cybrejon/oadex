<script>
  import banner from '$lib/assets/banner4.webp'
  import Navbar from '$lib/Navbar.svelte';
  import Search from '$lib/components/search/Search.svelte';
    import SideBar from './components/SideBar.svelte';
  export let active_path;
  export let routeId;

  export let searchIndex;
</script>

<div class="main-header">
  <div class="main-header--inner">
    <div class="banner-container header-item">
      <a class="banner-anchor" href="/">
        <img src="{banner}" alt="banner">
      </a>
    </div>
    <Search {searchIndex} />

    <SideBar />

    <div class="desktop-nav-visibility-wrapper">
      <Navbar
        {active_path}
        {routeId}
      />
    </div>

  </div>
</div>

<style>

  .banner-anchor {
    display: block;
  }

  img {
    width: 200px;
  }

  .main-header {
    padding-top: 20px;
    margin-bottom: 20px;
  }

  .main-header--inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (max-width: 500px) {
    .main-header--inner {
      padding: 0 10px;
      column-gap: 20px;
    }
  }

  @media only screen and (max-width: 800px) {
    .main-header--inner {
      column-gap: 20px;
      justify-content: flex-end;
    }
    .desktop-nav-visibility-wrapper {
      display: none;
    }
  }

</style>