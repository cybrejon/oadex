<script>
  import "../app.css";
  import "../rwd.css";
  import favicon from '$lib/assets/favicon.png';
  import Header from '$lib/Header.svelte';
  import Footer from "$lib/components/Footer.svelte";
  import { page } from '$app/stores';
  $: curr_page = $page.url.pathname;
  $: routeId = $page.route.id;

  export let data;
  const searchIndex = data.searchIndex;

  // vercel analytics
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="main-container">
  <Header
    active_path={curr_page}
    {routeId}
    {searchIndex}
  />
  <slot />
  <Footer />
</div>