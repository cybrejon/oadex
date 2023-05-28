<script>
  export let wdata;
  export let images;
  export let shikiName;
  export let shiki_id;

  import { LazyImage } from 'svelte-lazy-image';
  import Toggles from '$lib/Toggles.svelte';
  import "$lib/styles/wr.css";

  $: _wdata = wdata;

  let currentTab = 'all';
  const filterByClass = (shikiClass) => () => {

    currentTab = shikiClass;
    if (shikiClass == 'all') {
      _wdata = wdata
    } else {
      _wdata = wdata.filter((shiki) => {
        return shiki.shikiClass === shikiClass;
      });
    };

  };


  let isDescending = false;
  let thText_wr = '^ WIN-RATE';
  let isPrDescending = false;
  let thText_pr = 'PICK-RATE';
  
  const sortWr = (shikiClass) => () => {

      if (currentTab === 'all') {
        _wdata = wdata
      } else {
        _wdata = wdata.filter((shiki) => {
          return shiki.shikiClass === shikiClass;
        });
      }

    if (isDescending) {

      thText_wr = '^ WIN-RATE';
      _wdata.sort((a, b) => {
        return parseFloat(b.wr) - parseFloat(a.wr);
      });
      
    } else {

      thText_wr = '˅ WIN-RATE';
      _wdata.sort((a, b) => {
        return parseFloat(a.wr) - parseFloat(b.wr);
      });

    };

    isDescending = !isDescending;

    thText_pr = 'PICK-RATE';

  };
  
  const sortPr = (shikiClass) => () => {

      if (currentTab === 'all') {
        _wdata = wdata
      } else {
        _wdata = wdata.filter((shiki) => {
          return shiki.shikiClass === shikiClass;
        });
      }

    if (isPrDescending) {

      thText_pr = '^ PICK-RATE';
      _wdata.sort((a, b) => {
        return parseFloat(b.pickRate) - parseFloat(a.pickRate);
      });
      
    } else {

      thText_pr = '˅ PICK-RATE';
      _wdata.sort((a, b) => {
        return parseFloat(a.pickRate) - parseFloat(b.pickRate);
      });

    };

    isPrDescending = !isPrDescending;

    thText_wr = 'WIN-RATE';

  };

</script>

<div class="wr-main-container">
  <div class="main-header">
    <!-- <Toggles toggle_icon="mdi:menu-down" anchor_direction="right" buttons={[
      { name: "ALL", active_indicator: "d", active_value: "", fn: '' },
      { name: "PRE-ELITE", active_indicator: "d", active_value: "", fn: '' },
      { name: "BAN", active_indicator: "d", active_value: "", fn: '' },
      { name: "FOG-BAN", active_indicator: "d", active_value: "", fn: '' },
    ]} /> -->
    <a href="/shikigami/{shiki_id}?mode=ban">BAN</a>
    <Toggles toggle_icon="mdi:menu-down" anchor_direction="right" buttons={[
      { name: "ALL", active_indicator: currentTab, active_value: "all", fn: filterByClass('all') },
      { name: "SAMURAI", active_indicator: currentTab, active_value: "侍", fn: filterByClass('侍') },
      { name: "NINJA", active_indicator: currentTab, active_value: "忍", fn: filterByClass('忍') },
      { name: "MARKSMAN", active_indicator: currentTab, active_value: "射", fn: filterByClass('射') },
      { name: "TANK", active_indicator: currentTab, active_value: "守", fn: filterByClass('守') },
      { name: "MAGE", active_indicator: currentTab, active_value: "巫", fn: filterByClass('巫') },
      { name: "SUPPORT", active_indicator: currentTab, active_value: "祝", fn: filterByClass('祝') },
    ]} />
  </div>
    <table>
      <thead>
        <th style:padding-left="10px">#</th>
        <th>RANK</th>
        <th>SHIKI</th>
        <th class="th-toggle" on:click={sortWr(currentTab)} >{thText_wr}</th>
        <th class="th-toggle" on:click={sortPr(currentTab)} >{thText_pr}</th>
        <th>AVG KDA</th>
        <th>AVG KILLS</th>
      </thead>
      <tbody>
        {#each _wdata as data, i}
        <tr class={shikiName === data.name ? "shiki-name-active" : ""}>
          <td style:padding-left="10px">{i+1}.</td>
          <td>{data.number == 1 ? '👑' : data.number}.</td>
          <td class="shiki-name"><LazyImage class="wr-shikigami-image" alt="shikigami portrait" src="{images[data.image]}"/><a href="/shikigami/{data.id}" target="_blank">{data.name}</a></td>
          <td>{data.wr}%</td>
          <td>{data.pickRate}%</td>
          <td>{data.kda}</td>
          <td>{data.kills}</td>
        </tr>
        {/each}
      </tbody>
    </table>
</div>


<style>

  td:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  td:nth-child(2), td:nth-child(4) {
    font-weight: 800;
  }

  td:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .th-toggle {
    color: #CDFE05;
    cursor: pointer;
    user-select: none;
  }

  td.shiki-name {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  th {
    text-align: left;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;
  }

  tr {
    background-color: #3C3F46;
  }

  .shiki-name-active {
    background-color: #64676D;
  }

  .main-header {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>