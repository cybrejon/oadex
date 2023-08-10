<script>
  import banner from '$lib/assets/banner4.webp'
  import Navbar from '$lib/Navbar.svelte';
  import Search from '$lib/components/search/Search.svelte';
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
    <div class="mobile-nav-visibility-wrapper">
      <Navbar type="mobile" active_path={active_path} {routeId} />
    </div>
    <div class="desktop-nav-visibility-wrapper">
      <Navbar active_path={active_path} {routeId} />
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
  }

  .main-header--inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mobile-nav-visibility-wrapper {
    display: none;
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
    .mobile-nav-visibility-wrapper {
      display: block;
    }
    .desktop-nav-visibility-wrapper {
      display: none;
    }
  }

</style>