<script>
  let { data } = $props();

  let wrData = data.wrData;
  let images = data.images;
  let mode = data.mode;

  import WinRates from "$lib/components/shikigami/WinRates.svelte";
</script>

<svelte:head>
  <title>OADex | Chart</title>
</svelte:head>

<WinRates wdata={wrData} {images} {mode} />
