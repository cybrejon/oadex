<script>
  
  export let data;
  let wrData = data.wrData;
  let wrData_ban = data.wrData_ban;
  let wrData_noban = data.wrData_noban;
  let wrData_fogban = data.wrData_fogban;
  let images = data.images;

  import WinRates from '$lib/components/shikigami/WinRates.svelte';
  import Note from '$lib/components/Note.svelte';

</script>

<Note
  text="This page is broken, currently working on a fix."
/>

<WinRates
  wdata={wrData}
  wdata_ban={wrData_ban}
  wdata_noban={wrData_noban}
  wdata_fogban={wrData_fogban}
  images={images}
/>