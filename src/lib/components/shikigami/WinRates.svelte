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
  let isPrDescending = false;
  let isKDADescending = false;
  let isKillsDescending = false;

  let thText_wr = '⬆️ WR';
  let thText_pr = 'PR';
  let thText_kda = 'KDA';
  let thText_kills = 'KILLS';
  
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
    thText_kda = 'KDA';
    thText_kills = 'KILLS';
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
    thText_kda = 'KDA';
    thText_kills = 'KILLS';
  };
  
  const sortKda = (shikiClass) => () => {
      if (currentTab === 'all') {
        _wdata = wdata
      } else {
        _wdata = wdata.filter((shiki) => {
          return shiki.shikiClass === shikiClass;
        });
      }
    if (isKDADescending) {
      thText_kda = '⬆️ KDA';
      _wdata.sort((a, b) => {
        return b.kda - a.kda;
      });
    } else {
      thText_kda = '⬇️ KDA';
      _wdata.sort((a, b) => {
        return a.kda - b.kda;
      });
    };
    isKDADescending = !isKDADescending;
    thText_wr = 'WR';
    thText_pr = 'PR';
    thText_kills = 'KILLS';
  };

  const sortKills = (shikiClass) => () => {
      if (currentTab === 'all') {
        _wdata = wdata
      } else {
        _wdata = wdata.filter((shiki) => {
          return shiki.shikiClass === shikiClass;
        });
      }
    if (isKillsDescending) {
      thText_kills = '⬆️ KILLS';
      _wdata.sort((a, b) => {
        return b.kills - a.kills;
      });
    } else {
      thText_kills = '⬇️ KILLS';
      _wdata.sort((a, b) => {
        return a.kills - b.kills;
      });
    };
    isKillsDescending = !isKillsDescending;
    thText_wr = 'WR';
    thText_pr = 'PR';
    thText_kda = 'KDA';
  };

  let isChartVisible = false;
  const toggleChart = () => () => {
    isChartVisible = !isChartVisible;
  }

  $: console.log(_wdata);

</script>

<div class="wr-main-container">
  <div class={isChartVisible ? "main-header" : "main-header main-header--closed"}>
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
        { name: "🚀 SHOW FULL PERFORMANCE CHART", active_indicator: 'a', active_value: 'b', fn: toggleChart() },
      ]} />
    {/if}
    
  </div>
  {#if isChartVisible}
    <div class="content">
      <h3 class="chart-mode-name">ALL MODES (OTHER MODES BEING WORKED ON)</h3>
        <table>
          <thead>
            <th style:padding-left="10px">#</th>
            <th>📝</th>
            <th class="th-toggle" on:click={sortWr(currentTab)} >{thText_wr} <span class="nth">- nth</span></th>
            <th class="th-toggle" on:click={sortPr(currentTab)} >{thText_pr}</th>
            <th class="th-toggle" on:click={sortKda(currentTab)} >{thText_kda}</th>
            <th class="th-toggle" on:click={sortKills(currentTab)} >{thText_kills}</th>
          </thead>
          <tbody>
            {#each _wdata as data, i}
            <tr class={shikiName === data.name ? "shiki-name-active" : ""}>
              <td style:padding-left="10px">{i+1}.</td>
              <td class="shiki-name"><LazyImage class="wr-shikigami-image" alt="shikigami portrait" src="{images[data.image]}"/><a href="/shikigami/{data.id}" target="_blank">{data.name}</a></td>
              <td>{data.wr}% <span class="nth">- {data.number == 1 ? '🏆' : `${data.number}.`}</span></td>
              <td>{data.pickRate}%</td>
              <td>{data.kda}</td>
              <td>{data.kills}</td>
            </tr>
            {/each}
          </tbody>
        </table>
    </div>
  {/if}
</div>


<style>

  .chart-mode-name {
    padding: 20px 0 10px 0;
    text-align: center;
  }

  td {
    background-color: #3C3F46;
  }

  td:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    width: 50px;
  }

  td:nth-child(3) {
    background-color: rgb(58, 61, 66);
  }

  td:nth-child(3), td:nth-child(4) {
    font-weight: 800;
  }

  thead th:nth-child(2) {
    width: 200px;
  }

  td:nth-child(2) {
    max-width: 200px;
    
  }

  td:nth-child(3), th:nth-child(3),
  td:nth-child(4), th:nth-child(4),
  td:nth-child(5), th:nth-child(5),
  td:nth-child(6), th:nth-child(6) {
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

  tr:hover {
    background-color: #646d43;
  }

  .shiki-name-active td {
    background-color: #64676D;
  }

  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main-header--closed {
    justify-content: center;
  }

  .nth {
    font-weight: normal;
    font-size: 0.8rem;
    color: rgb(182, 182, 182);
  }

  @media only screen and (max-width: 850px) {
    thead th:nth-child(2) {
      width: 20px;
    }
    td:nth-child(5), th:nth-child(5),
    td:nth-child(6), th:nth-child(6) {
      display: none;
    }
  }

  @media only screen and (max-width: 490px) {
    td a {
      display: none;
    }
  }
</style>