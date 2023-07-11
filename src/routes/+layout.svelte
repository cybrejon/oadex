<script>
  import "../app.css";
  import "../rwd.css";
  import Header from '$lib/Header.svelte';
  import Footer from "$lib/components/Footer.svelte";
  import { page } from '$app/stores';
  $: curr_page = $page.url.pathname;
  $: routeId = $page.route.id;

  // vercel analytics
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  inject({ mode: dev ? 'development' : 'production' });

  // Load Disqus
  (function() {
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://oadex.disqus.com/embed.js';

    // Callback function after script is loaded
    s.onload = function () {
      // Reset Disqus configuration
      DISQUS.reset({
        reload: true,
        config: disqus_config
      });
    };

    (d.head || d.body).appendChild(s);
  })();
</script>

<div class="main-container">
  <Header
    active_path={curr_page}
    {routeId}
  />
  <slot />
  <Footer />
</div>