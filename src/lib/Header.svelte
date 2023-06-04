<script>
  import banner from '$lib/assets/banner4.webp'
  import Navbar from '$lib/Navbar.svelte';
  export let active_path;
</script>

<div class="main-header">
  <div class="main-header--inner">
    <div class="banner-container header-item">
      <a class="banner-anchor" href="/">
        <img src="{banner}" alt="banner">
      </a>
    </div>
    <Navbar type="mobile" active_path={active_path} />
    <Navbar active_path={active_path} />
  </div>
</div>

<style>

  .banner-anchor {
    display: block;
  }

  img {
    width: 250px;
  }

  .main-header {
    padding-top: 20px;
  }

  .main-header--inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (max-width: 500px) {
    img {
      padding-left: 10px;
    }
  }

</style>