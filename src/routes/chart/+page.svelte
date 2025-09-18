<script>
  
  let wrData = data.wrData;
  let images = data.images;
  let mode = data.mode;

  import WinRates from '$lib/components/shikigami/WinRates.svelte';
  let { data } = $props();

</script>

<svelte:head>
	<title>OADex | Chart</title>
</svelte:head>

<WinRates
  wdata={wrData}
  {images}
  {mode}
/>