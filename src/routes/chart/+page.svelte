<script>
  
  export let data;
  let wrData = data.wrData;
  let images = data.images;
  let mode = data.mode;

  import WinRates from '$lib/components/shikigami/WinRates.svelte';

</script>

<WinRates
  wdata={wrData}
  {images}
  {mode}
/>