<script>
  import "../app.css";
  import "../rwd.css";
  import Header from '$lib/Header.svelte';
  import { page } from '$app/stores';
  $: curr_page = $page.url.pathname;
  $: routeId = $page.route.id;
</script>

<div class="main-container">
  <Header
    active_path={curr_page}
    {routeId}
  />
  <slot />
</div>