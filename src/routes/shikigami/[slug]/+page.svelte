<script>

  import { page } from '$app/stores'
  let shiki_id = $page.url.pathname.slice(11);

  console.log(shiki_id);

  // import stores
  import { shikiga_data, images } from '../../store.js';

  // components
  import Note from "$lib/components/Note.svelte";
  import Basic from '$lib/components/shikigami/Basic.svelte';
  import Basic2 from '$lib/components/shikigami/Basic2.svelte';
  import Gallery from '$lib/components/shikigami/Gallery.svelte';
  import Stats from '$lib/components/shikigami/Stats.svelte';
  import StatCard from '$lib/components/shikigami/StatCard.svelte';
  import Container from "$lib/components/shikigami/Container.svelte";
  import { onMount } from 'svelte';

  // import data
  export let data;
  const { dictionary } = data;

  // console.log(wrPrData);

  // define information
  const shiki_names = Object.keys($shikiga_data);  
  const selected_shiki_name = shiki_names.filter(name => $shikiga_data[name].式神ID.toString() === shiki_id);
  const curr_shiki_obj = $shikiga_data[selected_shiki_name];
  const scores = curr_shiki_obj.评分;

  // shikigami stats

  const mvsc_count = curr_shiki_obj.式神基础属性.移动速度.toString().split("").length;
    let base_movement_speed;
    mvsc_count >= 3
    ? base_movement_speed = curr_shiki_obj.式神基础属性.移动速度.toString().slice(0, 2) + curr_shiki_obj.式神基础属性.移动速度.toString().slice(1, 2)
    : base_movement_speed = `${curr_shiki_obj.式神基础属性.移动速度.toString()}0`;

  const stats = {
    atk: {
      base: curr_shiki_obj.式神基础属性.物理伤害,
      growth: ''
    },
    atk_speed: {
      base: curr_shiki_obj.式神基础属性.攻击速度,
      growth: ''
    },
    mana: {
      base: curr_shiki_obj.式神基础属性.魔法上限,
      growth: ''
    },
    magic_armor: {
      base: curr_shiki_obj.式神基础属性.魔抗,
      growth: ''
    },
    hp: {
      base: curr_shiki_obj.式神基础属性.生命值,
      growth: ''
    },
    hp_regen: {
      base: curr_shiki_obj.式神基础属性.生命恢复,
      growth: ''
    },
    physical_armor: {
      base: curr_shiki_obj.式神基础属性.护甲,
      growth: ''
    },
    movespeed: {
      base: base_movement_speed,
      growth: ''
    },
  }

  let wrPrData;
  let win_rate = '⏳';
  let pick_rate = '⏳';
  async function getWrPrData() {
    const res = await fetch(`/api/wr-pr/?shiki_id=${shiki_id}`);
    wrPrData = await res.json();
    win_rate = (wrPrData.win_rate * 100).toFixed(2)
    pick_rate = (wrPrData.battle_rate * 100).toFixed(2)
  };

  onMount(async () => {
    getWrPrData();
  })
</script>

<svelte:head>
	<title>OADex | {curr_shiki_obj.式神名称}</title>
</svelte:head>

<div class="container">

  <Gallery area_name='gallery' link={$images[curr_shiki_obj.式神全身像]} data={{
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

  <Container area_name="basic2">
    <h3 class="stats-header">📊 Scores</h3>
    <Basic2 data={{
      dps: dictionary.scores[scores.输出],
      cc: dictionary.scores[scores.控制],
      sustain: dictionary.scores[scores.生存],
      buffs: dictionary.scores[scores.增益],
      agility: dictionary.scores[scores.敏捷],
    }} />
    <h3 class="stats-header">🏋🏼 Performance</h3>
    <div class="grid-container">
      <StatCard data={{
        property: "🏆 Win-rate",
        value: `${win_rate}%`,
        grid_area: "1 / 1 / 2 / 3"
      }} />
      <StatCard data={{
        property: "🏅 Pick-rate",
        value: `${pick_rate}%`,
        grid_area: "1 / 3 / 2 / 5"
      }} />
      <Note area_name="2 / 1 / 2 / 5" text="Data is from CN server and includes all the game modes" styles="font-size: .8rem; color: rgba(255, 255, 255, .7); text-align: center;" noIcon="True" />
      <!-- grid-area: [row-start] / [column-start] / [row-end] / [column-end]; -->
    </div>
  </Container>

  <Stats area_name="stats-1" >
    <h3 class="stats-header">📉 Base Stats</h3>
    <table class="stats-table">
      <tr>
        <th>📄 Property</th>
        <th>📝 Value</th>
        <th>⬆️ Growth</th>
      </tr>
      <tr>
        <td class="stat-property">⚔️ Attack damage</td>
        <td class="stat-value">{stats.atk.base}</td>
        <td class="stat-growth">0</td>
      </tr>
      <tr>
        <td class="stat-property">⚔️ Attack speed</td>
        <td class="stat-value">{stats.atk_speed.base} aa/s</td>
        <td class="stat-growth">0</td>
      </tr>
      <tr>
        <td class="stat-property">💫 Mana points</td>
        <td class="stat-value">{stats.mana.base}</td>
        <td class="stat-growth">0</td>
      </tr>
      <tr>
        <td class="stat-property">💫 Magic armor</td>
        <td class="stat-value">{stats.magic_armor.base}</td>
        <td class="stat-growth">0</td>
      </tr>
      <tr>
        <td class="stat-property">⚕️ Health points</td>
        <td class="stat-value">{stats.hp.base} hp</td>
        <td class="stat-growth">0</td>
      </tr>
      <tr>
        <td class="stat-property">⚕️ HP regeneration</td>
        <td class="stat-value">{stats.hp_regen.base} hp/s</td>
        <td class="stat-growth">0</td>
      </tr>
      <tr>
        <td class="stat-property">⚕️ Physical armor</td>
        <td class="stat-value">{stats.physical_armor.base}</td>
        <td class="stat-growth">0</td>
      </tr>
      <tr>
        <td class="stat-property">🏃 Movement speed</td>
        <td class="stat-value">{stats.movespeed.base}</td>
        <td class="stat-growth">0</td>
      </tr>
    </table>
  </Stats>

</div>



<style>
  .container {
    margin: 30px 0 60px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    /* align-items: center; */
    grid-template-areas: 
    "gallery gallery basic basic2"
    "stats-1 stats-1 . .";
    gap: 20px;
    align-content: center;
    flex-wrap: wrap;
  }

  .stats-table {
    background-color: #3C3F46;
    border-radius: 6px;
    padding: 5px 15px;
    border-spacing: 0 10px;
  }

  .stats-table th {
    padding: 0 0 5px 0;
    text-align: left;
  }

  .stat-value {
    font-weight: bold;
  }

  .grid-container {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 30px;
  }

  @media only screen and (max-width: 620px) {
    .container {
      grid-template-areas: 
      "gallery gallery gallery gallery"
      "basic basic basic basic"
      "basic2 basic2 basic2 basic2"
      "stats-1 stats-1 stats-1 stats-1"
    }
  }

</style>