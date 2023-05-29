<script>
  export let wdata;
  export let images;
  export let shikiName;
  // export let shiki_id;

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
  let thText_wr = '⬆️ WR';
  let isPrDescending = false;
  let thText_pr = 'PR';
  
  const sortWr = (shikiClass) => () => {

      if (currentTab === 'all') {
        _wdata = wdata
      } else {
        _wdata = wdata.filter((shiki) => {
          return shiki.shikiClass === shikiClass;
        });
      }

    if (isDescending) {

      thText_wr = '⬆️ WR';
      _wdata.sort((a, b) => {
        return parseFloat(b.wr) - parseFloat(a.wr);
      });
      
    } else {

      thText_wr = '⬇️ WR';
      _wdata.sort((a, b) => {
        return parseFloat(a.wr) - parseFloat(b.wr);
      });

    };

    isDescending = !isDescending;

    thText_pr = 'PR';

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

      thText_pr = '⬆️ PR';
      _wdata.sort((a, b) => {
        return parseFloat(b.pickRate) - parseFloat(a.pickRate);
      });
      
    } else {

      thText_pr = '⬇️ PR';
      _wdata.sort((a, b) => {
        return parseFloat(a.pickRate) - parseFloat(b.pickRate);
      });

    };

    isPrDescending = !isPrDescending;

    thText_wr = 'WR';

  };

  let isChartVisible = false;
  const toggleChart = () => () => {
    isChartVisible = !isChartVisible;
  }

</script>

<div class="wr-main-container">
  <div class="main-header">
    <!-- <Toggles toggle_icon="mdi:menu-down" anchor_direction="right" buttons={[
      { name: "ALL", active_indicator: "d", active_value: "", fn: '' },
      { name: "PRE-ELITE", active_indicator: "d", active_value: "", fn: '' },
      { name: "BAN", active_indicator: "d", active_value: "", fn: '' },
      { name: "FOG-BAN", active_indicator: "d", active_value: "", fn: '' },
    ]} /> -->
    {#if isChartVisible}
      <Toggles no_collapse=true toggle_icon="mdi:menu-down" anchor_direction="left" buttons={[
        { name: "❎ HIDE CHART", active_indicator: 'a', active_value: 'b', fn: toggleChart() },
      ]} />
      <Toggles toggle_icon="mdi:menu-down" anchor_direction="right" buttons={[
        { name: "ALL", active_indicator: currentTab, active_value: "all", fn: filterByClass('all') },
        { name: "SAMURAI", active_indicator: currentTab, active_value: "侍", fn: filterByClass('侍') },
        { name: "NINJA", active_indicator: currentTab, active_value: "忍", fn: filterByClass('忍') },
        { name: "MARKSMAN", active_indicator: currentTab, active_value: "射", fn: filterByClass('射') },
        { name: "TANK", active_indicator: currentTab, active_value: "守", fn: filterByClass('守') },
        { name: "MAGE", active_indicator: currentTab, active_value: "巫", fn: filterByClass('巫') },
        { name: "SUPPORT", active_indicator: currentTab, active_value: "祝", fn: filterByClass('祝') },
      ]} />
    {:else}
      <Toggles no_collapse=true toggle_icon="mdi:menu-down" anchor_direction="left" buttons={[
        { name: "🗿 SHOW FULL PERFORMANCE CHART", active_indicator: 'a', active_value: 'b', fn: toggleChart() },
      ]} />
    {/if}
    
  </div>
    {#if isChartVisible}
      <table>
        <thead>
          <th style:padding-left="10px">#</th>
          <th>🏅</th>
          <th>📝</th>
          <th class="th-toggle" on:click={sortWr(currentTab)} >{thText_wr}</th>
          <th class="th-toggle" on:click={sortPr(currentTab)} >{thText_pr}</th>
          <th>KDA</th>
          <th>KILLS</th>
        </thead>
        <tbody>
          {#each _wdata as data, i}
          <tr class={shikiName === data.name ? "shiki-name-active" : ""}>
            <td style:padding-left="10px">{i+1}.</td>
            <td>{data.number == 1 ? '🏆' : `${data.number}.`}</td>
            <td class="shiki-name"><LazyImage class="wr-shikigami-image" alt="shikigami portrait" src="{images[data.image]}"/><a href="/shikigami/{data.id}" target="_blank">{data.name}</a></td>
            <td>{data.wr}%</td>
            <td>{data.pickRate}%</td>
            <td>{data.kda}</td>
            <td>{data.kills}</td>
          </tr>
          {/each}
        </tbody>
      </table>
    {/if}
</div>


<style>

  td:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  td:nth-child(2), td:nth-child(4) {
    font-weight: 800;
  }

  td:nth-child(4), th:nth-child(4),
  td:nth-child(5), th:nth-child(5),
  td:nth-child(6), th:nth-child(6),
  td:nth-child(7), th:nth-child(7) {
    text-align: center;
  }

  td:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .th-toggle {
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
    margin-top: 10px;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;
  }

  tr {
    background-color: #3C3F46;
  }

  tr:hover {
    background-color: #646d43;
  }

  .shiki-name-active {
    background-color: #64676D;
  }

  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (max-width: 850px) {
    td:nth-child(6), td:nth-child(7), th:nth-child(6), th:nth-child(7) {
      display: none;
    }
  }

  @media only screen and (max-width: 490px) {
    td a {
      display: none;
    }
  }
</style>