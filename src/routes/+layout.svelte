<script>
  import "../app.css";
  import "../rwd.css";
  import Header from '$lib/Header.svelte';
  import { page } from '$app/stores';
  import autoAnimate from '@formkit/auto-animate';
  $: curr_page = $page.url.pathname;
</script>

<div use:autoAnimate class="main-container">
  <Header active_path={curr_page}/>
  <slot />
</div>