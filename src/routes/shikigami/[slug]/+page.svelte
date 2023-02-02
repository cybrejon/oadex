<script>

  import { page } from '$app/stores'
  let shiki_id = $page.url.pathname.slice(11);

  // import stores
  import { shikiga_data, images } from '../../store.js';

  // components
  import Basic from '$lib/components/shikigami/Basic.svelte';
  import Gallery from '$lib/components/shikigami/Gallery.svelte';

  // import data
  export let data;
  const { dictionary } = data;

  // define information
  const shiki_names = Object.keys($shikiga_data);  
  const selected_shiki_name = shiki_names.filter(name => $shikiga_data[name].式神ID.toString() === shiki_id);
  const curr_shiki_obj = $shikiga_data[selected_shiki_name];

</script>

<svelte:head>
	<title>OADex | {curr_shiki_obj.式神名称}</title>
</svelte:head>

<div class="container">

  <Basic area_name='basic' data={{
    name: curr_shiki_obj.式神名称,
    classification: curr_shiki_obj.式神定位.map(role => dictionary.roles[role]),
    voices: curr_shiki_obj.cv名字,
    lane: dictionary.lanes[curr_shiki_obj.推荐分路],
    specialty: curr_shiki_obj.式神标签
  }} />

  <Gallery link={$images[curr_shiki_obj.式神全身像]} area_name='gallery' data={{
    image_url: $images[curr_shiki_obj.式神全身像],
    image_alt: curr_shiki_obj.式神名称
  }} />

</div>



<style>
  .container {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-content: flex-start;
    grid-template-areas: 
      "basic gallery . ."
      ". . . .";
    gap: 20px;
    align-content: center;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 700px) {
    .container {
      grid-template-areas: 
        "basic basic gallery gallery"
        ". . . .";
    }
  }
  @media only screen and (max-width: 620px) {
    .container {
      grid-template-areas: 
        "basic basic basic basic"
        "gallery gallery gallery gallery";
    }
  }
</style>