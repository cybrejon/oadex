<script>

  import { page } from '$app/stores'
  let shiki_id = $page.url.pathname.slice(11);

  // components
  import Note from "$lib/components/Note.svelte";
  import Basic from '$lib/components/shikigami/Basic.svelte';
  import Basic2 from '$lib/components/shikigami/Basic2.svelte';
  import Gallery from '$lib/components/shikigami/Gallery.svelte';
  import Stats from '$lib/components/shikigami/Stats.svelte';
  import StatCard from '$lib/components/shikigami/StatCard.svelte';
  import Container from "$lib/components/shikigami/Container.svelte";
  import Skills from '$lib/components/shikigami/Skills.svelte';
  import ItemGallery from '$lib/components/shikigami/ItemGallery.svelte';
  import Toggles from '$lib/Toggles.svelte';
  import Onmyodo from '$lib/components/shikigami/Onmyodo.svelte';
  import Spells from '$lib/components/shikigami/Spells.svelte';
  import Button2 from '$lib/components/Button2.svelte';
  import ButtonGroup from '$lib/components/ButtonGroup.svelte';
  import DamageTypePill from '$lib/components/DamageTypePill.svelte';
  import GuidesList from '$lib/components/guides/GuidesList.svelte';

  // import data
  export let data;
  const { dictionary } = data;
  const guide_list = data.guide_list;
  const shikiga_data = data.shikiga_data;
  const bioData = data.bioData;
  const images = data.images;
  const performance = data.performance;
  const onmyodoData = data.onmyodos;
  const spellData = data.spells;

  const curr_shiki_obj = shikiga_data;
  const scores = curr_shiki_obj.评分;
  const usage = curr_shiki_obj.式神攻略.replace(/#r/gi, '<br>');

  // shikigami stats
  const mvsc_count = curr_shiki_obj.式神基础属性.移动速度.toString().split("").length;
    let base_movement_speed;
    mvsc_count >= 3
    ? base_movement_speed = curr_shiki_obj.式神基础属性.移动速度.toString().slice(0, 2) + curr_shiki_obj.式神基础属性.移动速度.toString().slice(1, 2)
    : base_movement_speed = `${curr_shiki_obj.式神基础属性.移动速度.toString()}0`;

  const atk_speed = curr_shiki_obj.式神基础属性.攻击速度 * (1 + curr_shiki_obj.式神基础属性.攻速加成);
  const base_atk_speed = atk_speed.toFixed(2);

  const _growth_atk_speed = curr_shiki_obj.式神基础属性.攻速加成 + curr_shiki_obj.式神属性成长.攻速加成;
  const growth_atk_speed = _growth_atk_speed.toFixed(2);

  const stats = {
    atk: {
      base: curr_shiki_obj.式神基础属性.物理伤害,
      growth: curr_shiki_obj.式神属性成长.物理伤害
    },
    atk_speed: {
      base: base_atk_speed,
      growth: growth_atk_speed
    },
    mana: {
      base: curr_shiki_obj.式神基础属性.魔法上限,
      growth: curr_shiki_obj.式神属性成长.魔法上限
    },
    mana_regen: {
      base: curr_shiki_obj.式神基础属性.魔法回复,
      growth: curr_shiki_obj.式神属性成长.魔法回复
    },
    magic_armor: {
      base: curr_shiki_obj.式神基础属性.魔抗,
      growth: curr_shiki_obj.式神属性成长.魔抗
    },
    hp: {
      base: curr_shiki_obj.式神基础属性.生命值,
      growth: curr_shiki_obj.式神属性成长.生命值
    },
    hp_regen: {
      base: curr_shiki_obj.式神基础属性.生命恢复,
      growth: curr_shiki_obj.式神属性成长.生命恢复
    },
    physical_armor: {
      base: curr_shiki_obj.式神基础属性.护甲,
      growth: curr_shiki_obj.式神属性成长.护甲
    },
    movespeed: {
      base: base_movement_speed,
      growth: ''
    },
  }

  // skill order
  const skill_order_data = curr_shiki_obj.推荐加点顺序;

  // perf / kda pager
  let current_page = 1;
  const performancePagination = (page) => () => {
    current_page = page;
  }

  // basic info / bio pager
  let basicPage = 1;
  const basicStatsPagination = (page) => () => {
    basicPage = page;
  }

  // skill order visibility toggle
  let is_order_visible = false;
  const orderDisplayToggle = () => () => {
    is_order_visible = !is_order_visible;
  }

  // onymodo visibility toggle
  let isOnmyodoShown = false;
  const onmyodoDisplayToggle = () => () => {
    isOnmyodoShown = !isOnmyodoShown;
  }

  // spells visibility toggle
  let isSpellsShown = false;
  const spellsDisplayToggle = () => () => {
    isSpellsShown = !isSpellsShown;
  }

  function getDamageType() {
    const skill_descriptions =
    curr_shiki_obj.式神技能.天生被动.技能描述 +
    curr_shiki_obj.式神技能.二技能.技能描述 +
    curr_shiki_obj.式神技能.四技能.技能描述 +
    curr_shiki_obj.式神技能.一技能.技能描述 +
    curr_shiki_obj.式神技能.三技能.技能描述;
    const damage_types = ['magic damage', 'physical damage', 'true damage'];
    return damage_types.filter(damage => skill_descriptions.toLowerCase().includes(damage));
  }

  try {
    let disqus_config = function () {
      this.page.url = window.location.href; // Use the current page's URL dynamically
      this.page.identifier = shiki_id; // Replace shiki_id with your page's unique identifier variable
    };
    
    // Load Disqus
    (function() {
      let d = document;
      let s = d.createElement('script');
      s.src = 'https://oadex.disqus.com/embed.js';
      (d.head || d.body).appendChild(s);
    })();
  } catch (error) {
    console.log('[cybrejon] could not load Disqus, this is expected during development');
  }

</script>

<svelte:head>
	<title>OADex | {curr_shiki_obj.式神名称}</title>
</svelte:head>

<div class="container">
  
  <!-- <ButtonGroup area_name="page-controls" styles="justify-content: flex-start; flex-wrap: wrap;">
    <Button2 icon='ion:arrow-back' type="link" link="/" />
    <Button2 type="link" link="/shikigami/{shiki_id}/edit">
      Edit page
    </Button2>
    <Button2 type="link" link="/shikigami/{shiki_id}/buildsuggest">
      Suggest build
    </Button2>
  </ButtonGroup> -->

  <Container area_name="damage-type" styles='align-items: center; flex-direction: row; gap: 10px; flex-wrap: wrap;'>
    <p style="font-size: .9rem;">Damage type:</p>
    {#if getDamageType().includes('physical damage')}
      <DamageTypePill damage_type='physical'>
        Physical
      </DamageTypePill>
    {/if}
    {#if getDamageType().includes('magic damage')}
      <DamageTypePill damage_type='magic'>
        Magic
      </DamageTypePill>
    {/if}
    {#if getDamageType().includes('true damage')}
      <DamageTypePill damage_type='true'>
        True
      </DamageTypePill>
    {/if}
  </Container>

  <Container area_name="basic">

    <div class="performance-pager-container">
      <ButtonGroup>
        <Button2 fn={basicStatsPagination(1)} active={basicPage === 1}>
          BASIC
        </Button2>
        <Button2 fn={basicStatsPagination(2)} active={basicPage === 2}>
          BIO
        </Button2>
      </ButtonGroup>
    </div>

    {#if basicPage === 1}
      <Basic area_name='basic' data={{
        name: curr_shiki_obj.式神名称,
        classification: curr_shiki_obj.式神定位.map(role => dictionary.roles[role]),
        voices: curr_shiki_obj.cv名字,
        lane: dictionary.lanes[curr_shiki_obj.推荐分路],
        specialty: curr_shiki_obj.式神标签
      }} >
    
        <Basic2 data={{
          difficulty: dictionary.difficulty[scores.难度],
          dps: dictionary.scores[scores.输出],
          cc: dictionary.scores[scores.控制],
          sustain: dictionary.scores[scores.生存],
          buffs: dictionary.scores[scores.增益],
          agility: dictionary.scores[scores.敏捷],
        }} />  
    
      </Basic>
    {/if}

    {#if basicPage === 2}
      <div class="bio-container">

        {#if bioData}

          {#if bioData.bio1}
            <div class="bio">
              <h3 class="bio-header">📔 Bio 1</h3>
              <p class="bio-text">{bioData.bio1}</p>
              <div class="bio-contributor-container">
                {#if bioData.bio1 === 'no bio yet'}
                  <p class="bio-contributor">Join <a href="http://discord.gg/KGsaAet">my discord</a> to submit missing bios!</p>
                {:else}
                  <p class="bio-contributor">Submitter: {bioData.contributor}</p>
                  <p class="bio-contributor">Source: <a href="https://onmyoji.fandom.com/wiki/Onmyoji_Wiki">onmyoji.fandom.com</a></p>
                {/if}
              </div>
            </div>
          {/if}

          {#if bioData.bio2}
            <div class="bio">
              <h3 class="bio-header">📔 Bio 2</h3>
              <p class="bio-text">{bioData.bio2}</p>
              <div class="bio-contributor-container">
                {#if bioData.bio2 === 'no bio yet'}
                  <p class="bio-contributor">Join <a href="http://discord.gg/KGsaAet">my discord</a> to submit missing bios!</p>
                {:else}
                  <p class="bio-contributor">Submitter: {bioData.contributor}</p>
                  <p class="bio-contributor">Source: <a href="https://onmyoji.fandom.com/wiki/Onmyoji_Wiki">onmyoji.fandom.com</a></p>
                {/if}
              </div>
            </div>
          {/if}

          {#if bioData.bio3}
            <div class="bio">
              <h3 class="bio-header">📔 Bio 3</h3>
              <p class="bio-text">{bioData.bio3}</p>
              <div class="bio-contributor-container">
                {#if bioData.bio3 === 'no bio yet'}
                  <p class="bio-contributor">Join <a href="http://discord.gg/KGsaAet">my discord</a> to submit missing bios!</p>
                {:else}
                  <p class="bio-contributor">Submitter: {bioData.contributor}</p>
                  <p class="bio-contributor">Source: <a href="https://onmyoji.fandom.com/wiki/Onmyoji_Wiki">onmyoji.fandom.com</a></p>
                {/if}
              </div>
            </div>
          {/if}

          {#if bioData.bio4}
            <div class="bio">
              <h3 class="bio-header">📔 Bio 4</h3>
              <p class="bio-text">{bioData.bio4}</p>
              <div class="bio-contributor-container">
                {#if bioData.bio4 === 'no bio yet'}
                  <p class="bio-contributor">Join <a href="http://discord.gg/KGsaAet">my discord</a> to submit missing bios!</p>
                {:else}
                  <p class="bio-contributor">Submitter: {bioData.contributor}</p>
                  <p class="bio-contributor">Source: <a href="https://onmyoji.fandom.com/wiki/Onmyoji_Wiki">onmyoji.fandom.com</a></p>
                {/if}
              </div>
            </div>
          {/if}

          {#if bioData.bio5}
            <div class="bio">
              <h3 class="bio-header">📔 Bio 5</h3>
              <p class="bio-text">{bioData.bio5}</p>
              <div class="bio-contributor-container">
                {#if bioData.bio5 === 'no bio yet'}
                  <p class="bio-contributor">Join <a href="http://discord.gg/KGsaAet">my discord</a> to submit missing bios!</p>
                {:else}
                  <p class="bio-contributor">Submitter: {bioData.contributor}</p>
                  <p class="bio-contributor">Source: <a href="https://onmyoji.fandom.com/wiki/Onmyoji_Wiki">onmyoji.fandom.com</a></p>
                {/if}
              </div>
            </div>
          {/if}

        {:else}

          <div class="bio">
            <h3 class="bio-header">📔 Bio 1</h3>
            <p class="bio-text">No bio yet.</p>
            <div class="bio-contributor-container">
              <p class="bio-contributor">Join <a href="http://discord.gg/KGsaAet">my discord</a> to submit missing bios!</p>
            </div>
          </div>

        {/if}

      </div>
    {/if}

  </Container>

  <Gallery area_name='gallery' link={images[curr_shiki_obj.式神全身像]} data={{
    image_url: images[curr_shiki_obj.式神全身像],
    image_alt: curr_shiki_obj.式神名称
  }} />

  <Container area_name="basic2">

    <div class="performance-pager-container">
      <ButtonGroup>
        <Button2 fn={performancePagination(1)} active={current_page === 1}>
          PERFORMANCE
        </Button2>
        <Button2 fn={performancePagination(2)} active={current_page === 2}>
          KDA/KILLS
        </Button2>
      </ButtonGroup>
    </div>
    
    
    {#if current_page === 1}
      <div class="grid-container">
        <Note area_name="1 / 1 / 2 / 5" text="ALL MODES" styles="font-size: .8rem; text-align: center;" noIcon="True" />
        <StatCard data={{
          property: "🏆 Win-rate",
          value: `${performance.win_rate.all}%`,
          grid_area: "2 / 1 / 3 / 3"
        }} />
        <StatCard data={{
          property: "🏅 Pick-rate",
          value: `${performance.pick_rate.all}%`,
          grid_area: "2 / 3 / 3 / 5"
        }} />
        <!-- grid-area: [row-start] / [column-start] / [row-end] / [column-end]; -->
      </div>

      <div class="grid-container">
        <Note area_name="1 / 1 / 2 / 5" text="PRE-ELITE" styles="font-size: .8rem; text-align: center;" noIcon="True" />
        <StatCard data={{
          property: "🏆 Win-rate",
          value: `${performance.win_rate.noban}%`,
          grid_area: "2 / 1 / 3 / 3"
        }} />
        <StatCard data={{
          property: "🏅 Pick-rate",
          value: `${performance.pick_rate.noban}%`,
          grid_area: "2 / 3 / 3 / 5"
        }} />
        <!-- grid-area: [row-start] / [column-start] / [row-end] / [column-end]; -->
      </div>

      <div class="grid-container">
        <Note area_name="1 / 1 / 2 / 5" text="BAN MODE" styles="font-size: .8rem; text-align: center;" noIcon="True" />
        <StatCard data={{
          property: "🏆 Win-rate",
          value: `${performance.win_rate.ban}%`,
          grid_area: "2 / 1 / 3 / 3"
        }} />
        <StatCard data={{
          property: "🏅 Pick-rate",
          value: `${performance.pick_rate.ban}%`,
          grid_area: "2 / 3 / 3 / 5"
        }} />
        <!-- grid-area: [row-start] / [column-start] / [row-end] / [column-end]; -->
      </div>

      <div class="grid-container">
        <Note area_name="1 / 1 / 2 / 5" text="FOG BAN MODE" styles="font-size: .8rem; text-align: center;" noIcon="True" />
        <StatCard data={{
          property: "🏆 Win-rate",
          value: `${performance.win_rate.fogban}%`,
          grid_area: "2 / 1 / 3 / 3"
        }} />
        <StatCard data={{
          property: "🏅 Pick-rate",
          value: `${performance.pick_rate.fogban}%`,
          grid_area: "2 / 3 / 3 / 5"
        }} />
        <!-- grid-area: [row-start] / [column-start] / [row-end] / [column-end]; -->
      </div>
    {/if}

    {#if current_page === 2}
      <div class="grid-container">
        <Note area_name="1 / 1 / 2 / 5" text="ALL MODES" styles="font-size: .8rem; text-align: center;" noIcon="True" />
        <StatCard data={{
          property: "AVG K/D/A",
          value: `${performance.kda.all}`,
          grid_area: "2 / 1 / 3 / 3"
        }} />
        <StatCard data={{
          property: "AVG KILLS",
          value: `${performance.avg_kills.all}`,
          grid_area: "2 / 3 / 3 / 5"
        }} />
      </div>

      <div class="grid-container">
        <Note area_name="1 / 1 / 2 / 5" text="PRE-ELITE" styles="font-size: .8rem; text-align: center;" noIcon="True" />
        <StatCard data={{
          property: "AVG K/D/A",
          value: `${performance.kda.noban}`,
          grid_area: "2 / 1 / 3 / 3"
        }} />
        <StatCard data={{
          property: "AVG KILLS",
          value: `${performance.avg_kills.noban}`,
          grid_area: "2 / 3 / 3 / 5"
        }} />
      </div>

      <div class="grid-container">
        <Note area_name="1 / 1 / 2 / 5" text="BAN MODE" styles="font-size: .8rem; text-align: center;" noIcon="True" />
        <StatCard data={{
          property: "AVG K/D/A",
          value: `${performance.kda.ban}`,
          grid_area: "2 / 1 / 3 / 3"
        }} />
        <StatCard data={{
          property: "AVG KILLS",
          value: `${performance.avg_kills.ban}`,
          grid_area: "2 / 3 / 3 / 5"
        }} />
      </div>

      <div class="grid-container">
        <Note area_name="1 / 1 / 2 / 5" text="FOG BAN MODE" styles="font-size: .8rem; text-align: center;" noIcon="True" />
        <StatCard data={{
          property: "AVG K/D/A",
          value: `${performance.kda.fogban}`,
          grid_area: "2 / 1 / 3 / 3"
        }} />
        <StatCard data={{
          property: "AVG KILLS",
          value: `${performance.avg_kills.fogban}`,
          grid_area: "2 / 3 / 3 / 5"
        }} />
      </div>
    {/if}

    <Note text="Source: China server" styles="font-size: .8rem; color: rgba(255, 255, 255, .7); text-align: center;" noIcon="True" />
  
  </Container>

  <Stats area_name="stats-1" >
    <h3 class="stats-header">🧬 Base Stats</h3>
    <table class="stats-table">
      <tr>
        <th>📄 Property</th>
        <th>📝 Value</th>
        <th>⏫ Growth</th>
      </tr>
      <tr>
        <td class="stat-property">⚔️ Attack damage</td>
        <td class="stat-value">{stats.atk.base}</td>
        <td class="stat-growth">+ {stats.atk.growth} /lvl</td>
      </tr>
      <tr>
        <td class="stat-property">⚔️ Attack speed</td>
        <td class="stat-value">{stats.atk_speed.base} aa/s</td>
        <!-- <td class="stat-growth">+ {stats.atk_speed.growth} /lvl</td> -->
        <td class="stat-growth">HELP</td>
      </tr>
      <tr>
        <td class="stat-property">💫 Mana points</td>
        <td class="stat-value">{stats.mana.base}</td>
        <td class="stat-growth">+ {stats.mana.growth} /lvl</td>
      </tr>
      <tr>
        <td class="stat-property">💫 Mana Regen</td>
        <td class="stat-value">{stats.mana_regen.base} mp/s</td>
        <td class="stat-growth">+ {stats.mana_regen.growth} /lvl</td>
      </tr>
      <tr>
        <td class="stat-property">💫 Magic armor</td>
        <td class="stat-value">{stats.magic_armor.base}</td>
        <td class="stat-growth">+ {stats.magic_armor.growth} /lvl</td>
      </tr>
      <tr>
        <td class="stat-property">⚕️ Health points</td>
        <td class="stat-value">{stats.hp.base} hp</td>
        <td class="stat-growth">+ {stats.hp.growth} /lvl</td>
      </tr>
      <tr>
        <td class="stat-property">⚕️ HP regeneration</td>
        <td class="stat-value">{stats.hp_regen.base} hp/s</td>
        <td class="stat-growth">+ {stats.hp_regen.growth} /lvl</td>
      </tr>
      <tr>
        <td class="stat-property">⚕️ Physical armor</td>
        <td class="stat-value">{stats.physical_armor.base}</td>
        <td class="stat-growth">+ {stats.physical_armor.growth} /lvl</td>
      </tr>
      <tr>
        <td class="stat-property">🏃 Movement speed</td>
        <td class="stat-value">{stats.movespeed.base}</td>
      </tr>
    </table>
  </Stats>

  <Container area_name="skills">
    <Skills
      curr_shiki_obj={curr_shiki_obj}
      images={images}
    />
    <div class="skill-order-title-wrapper">
      <h3>🔢 Skill Order</h3>
      {#if is_order_visible}  
        <Toggles iconOnly=true no_collapse="True" toggle_icon="mdi:menu-up" anchor_direction="right" buttons={[
          { name: "HIDE", active_indicator: "d", active_value: "", fn: orderDisplayToggle() },
        ]} />
      {:else}
        <Toggles iconOnly=true no_collapse="True" toggle_icon="mdi:menu-down" anchor_direction="right" buttons={[
          { name: "SHOW", active_indicator: "d", active_value: "", fn: orderDisplayToggle() },
        ]} />
      {/if}
    </div>

    {#if is_order_visible}
      <div class="skill-order">
        <table>

          <tr>
            <td class="tr-skill-image-cell"><img loading="lazy" src={images[curr_shiki_obj.式神技能.一技能.图标路径]} alt="skill"></td>
            {#each skill_order_data as order, i}
              {#if order === 1}
                <td class="active">{i+1}</td>
              {:else}
                <td>{i+1}</td>
              {/if}
            {/each}
          </tr>

          <tr>
            <td class="tr-skill-image-cell"><img loading="lazy" src={images[curr_shiki_obj.式神技能.二技能.图标路径]} alt="skill"></td>
            {#each skill_order_data as order, i}
              {#if order === 2}
                <td class="active">{i+1}</td>
              {:else}
                <td>{i+1}</td>
              {/if}
            {/each}
          </tr>

          <tr>
            <td class="tr-skill-image-cell"><img loading="lazy" src={images[curr_shiki_obj.式神技能.三技能.图标路径]} alt="skill"></td>
            {#each skill_order_data as order, i}
              {#if order === 3}
                <td class="active">{i+1}</td>
              {:else}
                <td>{i+1}</td>
              {/if}
            {/each}
          </tr>

          <tr>
            <td class="tr-skill-image-cell"><img loading="lazy" src={images[curr_shiki_obj.式神技能.四技能.图标路径]} alt="skill"></td>
            {#each skill_order_data as order, i}
              {#if order === 4}
                <td class="active">{i+1}</td>
              {:else}
                <td>{i+1}</td>
              {/if}
            {/each}
          </tr>

        </table>
      </div>
    {/if}
  </Container>

  <Container area_name="usage">
    <h3>💡 How to use</h3>
    <p class="usage-text">{@html usage}</p>
  </Container>

  <Container area_name="guides">
    <h3>📚 Guides</h3>
    <GuidesList {guide_list} />
  </Container>

  <Container area_name="onmyodo">
    <div class="skill-order-title-wrapper">
      <h3>☯️ Onmyodos</h3>
      {#if isOnmyodoShown}  
        <Toggles iconOnly=true no_collapse="True" toggle_icon="mdi:menu-up" anchor_direction="right" buttons={[
          { name: "HIDE", active_indicator: "d", active_value: "", fn: onmyodoDisplayToggle() },
        ]} />
      {:else}
        <Toggles iconOnly=true no_collapse="True" toggle_icon="mdi:menu-down" anchor_direction="right" buttons={[
          { name: "SHOW", active_indicator: "d", active_value: "", fn: onmyodoDisplayToggle() },
        ]} />
      {/if}
    </div>
    {#if isOnmyodoShown}
      <Onmyodo {onmyodoData} {images} />
    {/if}
    
  </Container>

  <Container area_name="spells">
    <div class="skill-order-title-wrapper">
      <h3>🪄 Recommended Spells</h3>
      {#if isSpellsShown}  
        <Toggles iconOnly=true no_collapse="True" toggle_icon="mdi:menu-up" anchor_direction="right" buttons={[
          { name: "HIDE", active_indicator: "d", active_value: "", fn: spellsDisplayToggle() },
        ]} />
      {:else}
        <Toggles iconOnly=true no_collapse="True" toggle_icon="mdi:menu-down" anchor_direction="right" buttons={[
          { name: "SHOW", active_indicator: "d", active_value: "", fn: spellsDisplayToggle() },
        ]} />
      {/if}
    </div>
    {#if isSpellsShown}
      <Spells {spellData} {images} />
    {/if}
    
  </Container>

  <Container area_name="disqus">
    <div id="disqus_thread"></div>
  </Container>

</div>

<Note text="Information you see in this page is subject to change every Monday, Beijing Time. If you have any questions, please contact me at http://discord.gg/KGsaAet." styles="font-size: .8rem; text-align: center;" />



<style>

  .container {
    margin: 30px 0 60px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    /* align-items: center; */
    grid-template-areas: 
    "page-controls page-controls page-controls page-controls"
    "damage-type damage-type damage-type damage-type"
    "basic gallery gallery basic2"
    "stats-1 stats-1 skills skills"
    "usage usage skills skills"
    "spells spells onmyodo onmyodo"
    "guides guides guides guides"
    "disqus disqus disqus disqus";
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

  .stats-table td {
    font-size: 0.9rem;
  }

  .stat-value {
    font-weight: bold;
  }

  .grid-container {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 20px 1fr;
  }

  .usage-text {
    font-size: .8rem;
    line-height: 24px;
  }

  .skill-order {
    background-color: #3C3F46;
    border-radius: 6px;
    padding: 5px;
  }

  .skill-order table {
    border-collapse: separate;
    table-layout: auto;
    border-spacing: 0 5px;
    width: 100%;
  }

  .skill-order table td {
    color: #b6b6b6;
    padding: 5px 0;
    text-align: center;
  }

  .skill-order table td.active {
    color: #CDFE05;
    font-weight: 600;
  }

  .skill-order table img {
    margin: auto;
    width: 40px;
    display: block;
  }

  .skill-order table .tr-skill-image-cell {
    width: 50px;
    text-align: center;
  }

  .performance-pager-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .skill-order-title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bio-container {
    overflow-y: auto;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  .bio {
    background-color: #3C3F46;
    border-radius: 6px;
    padding: 10px;
  }

  .bio-header {
    margin-bottom: 10px;
  }

  .bio-text {
    font-size: 0.8rem;
  }

  .bio-contributor {
    font-size: .7rem;
    font-weight: 600;
  }

  .bio-contributor-container {
    border-left: 3px solid #CDFE05;
    padding-left: 10px;
    margin-top: 10px;
  }

  @media screen and (max-width: 845px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-areas: 
      "page-controls"
      "damage-type"
      "gallery"
      "basic"
      "basic2"
      "stats-1"
      "skills"
      "usage"
      "guides"
      "onmyodo"
      "spells"
      "disqus";
    }

    .performance-pager-container {
      justify-content: flex-end;
    }
  }

</style>