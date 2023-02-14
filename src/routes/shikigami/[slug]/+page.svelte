<script>

  import { page } from '$app/stores'
  let shiki_id = $page.url.pathname.slice(11);

  // import stores
  import { shikiga_data, images } from '../../store.js';

  // components
  import Basic from '$lib/components/shikigami/Basic.svelte';
  import Basic2 from '$lib/components/shikigami/Basic2.svelte';
  import Gallery from '$lib/components/shikigami/Gallery.svelte';

  // import data
  export let data;
  const { dictionary } = data;

  // define information
  const shiki_names = Object.keys($shikiga_data);  
  const selected_shiki_name = shiki_names.filter(name => $shikiga_data[name].式神ID.toString() === shiki_id);
  const curr_shiki_obj = $shikiga_data[selected_shiki_name];
  const scores = curr_shiki_obj.评分;

</script>

<svelte:head>
	<title>OADex | {curr_shiki_obj.式神名称}</title>
</svelte:head>

<div class="container">

  <Gallery link={$images[curr_shiki_obj.式神全身像]} area_name='gallery' data={{
    image_url: $images[curr_shiki_obj.式神全身像],
    image_alt: curr_shiki_obj.式神名称
  }} />

  <Basic area_name='basic' data={{
    name: curr_shiki_obj.式神名称,
    classification: curr_shiki_obj.式神定位.map(role => dictionary.roles[role]),
    voices: curr_shiki_obj.cv名字,
    lane: dictionary.lanes[curr_shiki_obj.推荐分路],
    specialty: curr_shiki_obj.式神标签
  }} />

  <Basic2 area_name='basic2' data={{
    dps: dictionary.scores[scores.输出],
    cc: dictionary.scores[scores.控制],
    sustain: dictionary.scores[scores.生存],
    buffs: dictionary.scores[scores.增益],
    agility: dictionary.scores[scores.敏捷],
  }} />

</div>



<style>
  .container {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    /* align-items: center; */
    grid-template-areas: 
    "gallery basic basic2 .";
    gap: 20px;
    align-content: center;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 620px) {
    .container {
      grid-template-areas: 
      "gallery gallery gallery gallery"
      "basic basic basic basic"
      "basic2 basic2 basic2 basic2";
    }
  }

</style>