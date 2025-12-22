<script>
  import "../app.css";
  import "../rwd.css";
  import favicon from "$lib/assets/favicon.png";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import LoadingBar from "$lib/components/LoadingBar.svelte";
  import { page } from "$app/state";

  // vercel analytics
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import { isLoading } from "$userStore/store";
  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import WarningStrip from "../lib/components/WarningStrip.svelte";
  let { data, children } = $props();
  inject({ mode: dev ? "development" : "production" });

  const searchIndex = data.searchIndex;

  beforeNavigate(() => {
    isLoading.update((bool) => (bool = true));
  });

  afterNavigate(() => {
    isLoading.update((bool) => (bool = false));
  });

  let curr_page = $state(page.url.pathname);
  let routeId = $state(page.route.id);

  $effect(() => {
    curr_page = page.url.pathname;
    routeId = page.route.id;
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<LoadingBar />

<div class="main-container">
  <Header active_path={curr_page} {routeId} {searchIndex} />
  {@render children?.()}
  <Footer />
</div>
