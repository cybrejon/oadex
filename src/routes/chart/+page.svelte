<script>
  
  export let data;
  let wrData = data.wrData;
  let images = data.images;
  let mode = data.mode;

  import WinRates from '$lib/components/shikigami/WinRates.svelte';
  import Note from '$lib/components/Note.svelte';

</script>

<Note
  text="Live development build. Expect bugs."
/>

<WinRates
  wdata={wrData}
  {images}
  {mode}
/>