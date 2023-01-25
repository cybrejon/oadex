<script>
  import banner from '$lib/assets/banner4.png'
  export let active_path;
</script>

<div class="main-header">
  <div class="main-header--inner">
    <div class="banner-container header-item">
      <a class="banner-anchor" href="/">
        <img src="{banner}" alt="banner">
      </a>
    </div>
    <ul class="header-item">
      <li><a class="{active_path === '/' ? "nav-item nav-item--active" : "nav-item"}" href="/">SHIKIS</a></li>
      <li><a class="{active_path === '/items' ? "nav-item nav-item--active" : "nav-item"}" href="/items">ITEMS</a></li>
      <li><a class="{active_path === '/onmyodos' ? "nav-item nav-item--active" : "nav-item"}" href="/onmyodos">ONMYODOS</a></li>
      <li><a class="{active_path === '/spells' ? "nav-item nav-item--active" : "nav-item"}" href="/spells">SPELLS</a></li>
    </ul>
  </div>
</div>

<style>

  .banner-anchor {
    display: block;
  }

  img {
    width: 250px;
    filter: drop-shadow(-60px 0 60px #ccfe0516);
  }

  .main-header {
    padding-top: 20px;
  }

  .main-header--inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
</style>