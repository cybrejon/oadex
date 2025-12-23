<script>
  import { LazyImage } from "svelte-lazy-image";
  import Toggles from "$lib/Toggles.svelte";
  import "$lib/styles/wr.css";
  let { wdata, mode, images, shikiName } = $props();

  let classCurrentTab = $state("all");
  let sortField = $state(null);
  let isDescending = $state(true);

  // Computed filtered and sorted data
  let _wdata = $derived.by(() => {
    // First apply the class filter
    let filteredData = classCurrentTab === "all"
      ? wdata
      : wdata.filter((shiki) => shiki.shikiClass.includes(classCurrentTab));

    // Then apply sorting if a field is selected
    if (sortField) {
      filteredData = [...filteredData]; // Create a copy to avoid mutating original
      filteredData.sort((a, b) => {
        let valueA, valueB;

        switch (sortField) {
          case 'wr':
            valueA = parseFloat(a.wr);
            valueB = parseFloat(b.wr);
            break;
          case 'pickRate':
            valueA = parseFloat(a.pickRate);
            valueB = parseFloat(b.pickRate);
            break;
          case 'kda':
            valueA = a.kda;
            valueB = b.kda;
            break;
          case 'kills':
            valueA = a.kills;
            valueB = b.kills;
            break;
          default:
            return 0;
        }

        return isDescending ? valueB - valueA : valueA - valueB;
      });
    }

    return filteredData;
  });

  let thText_wr = $state("⬆️ WR");
  let thText_pr = $state("PR");
  let thText_kda = $state("KDA");
  let thText_kills = $state("KILLS");

  const filterByClass = (shikiClass) => () => {
    classCurrentTab = shikiClass;
  };

  const sortData = (field) => {
    // If clicking the same field, toggle direction; otherwise, set new field with descending order
    if (sortField === field) {
      isDescending = !isDescending;
    } else {
      sortField = field;
      isDescending = true; // Default to descending for new sorts
    }

    // Update the header text indicators
    thText_wr = field === 'wr' ? (isDescending ? "⬆️ WR" : "⬇️ WR") : "WR";
    thText_pr = field === 'pickRate' ? (isDescending ? "⬆️ PR" : "⬇️ PR") : "PR";
    thText_kda = field === 'kda' ? (isDescending ? "⬆️ KDA" : "⬇️ KDA") : "KDA";
    thText_kills = field === 'kills' ? (isDescending ? "⬆️ KILLS" : "⬇️ KILLS") : "KILLS";
  };

  let isChartVisible = $state(true);
  const toggleChart = () => () => {
    isChartVisible = !isChartVisible;
  };

  const selectMode = (mode) => () => {
    window.location = `/chart?mode=${mode}`;
    // Reset sorting when changing mode
    sortField = null;
    isDescending = true;
    thText_wr = "⬆️ WR";
    thText_pr = "PR";
    thText_kda = "KDA";
    thText_kills = "KILLS";
    classCurrentTab = "all";
  };
</script>

<div class="wr-main-container">
  <!-- TODO refactor page controls to use Button2 instead of the old Toggles component -->
  <div
    class={isChartVisible ? "main-header" : "main-header main-header--closed"}
  >
    {#if isChartVisible}
      <!-- <Toggles iconOnly=true no_collapse=true toggle_icon="ep:close-bold" anchor_direction="left" buttons={[
        { name: "❎", active_indicator: 'a', active_value: 'b', fn: toggleChart() },
      ]} /> -->
      <Toggles
        toggle_icon="iconoir:nav-arrow-down"
        anchor_direction="right"
        buttons={[
          {
            name: "ALL MODES",
            active_indicator: mode,
            active_value: "all",
            fn: selectMode("all"),
          },
          {
            name: "NORMAL",
            active_indicator: mode,
            active_value: "noban",
            fn: selectMode("noban"),
          },
          {
            name: "BAN",
            active_indicator: mode,
            active_value: "ban",
            fn: selectMode("ban"),
          },
          {
            name: "FOGBAN",
            active_indicator: mode,
            active_value: "fogban",
            fn: selectMode("fogban"),
          },
        ]}
      />
      <Toggles
        collapsed="true"
        toggle_icon="fluent:tag-question-mark-32-filled"
        anchor_direction="right"
        buttons={[
          {
            name: "ALL",
            active_indicator: classCurrentTab,
            active_value: "all",
            fn: filterByClass("all"),
          },
          {
            name: "SAMURAI",
            active_indicator: classCurrentTab,
            active_value: "侍",
            fn: filterByClass("侍"),
          },
          {
            name: "NINJA",
            active_indicator: classCurrentTab,
            active_value: "忍",
            fn: filterByClass("忍"),
          },
          {
            name: "MARKSMAN",
            active_indicator: classCurrentTab,
            active_value: "射",
            fn: filterByClass("射"),
          },
          {
            name: "TANK",
            active_indicator: classCurrentTab,
            active_value: "守",
            fn: filterByClass("守"),
          },
          {
            name: "MAGE",
            active_indicator: classCurrentTab,
            active_value: "巫",
            fn: filterByClass("巫"),
          },
          {
            name: "SUPPORT",
            active_indicator: classCurrentTab,
            active_value: "祝",
            fn: filterByClass("祝"),
          },
        ]}
      />
    {:else}
      <Toggles
        no_collapse="true"
        toggle_icon="iconoir:nav-arrow-down"
        anchor_direction="left"
        buttons={[
          {
            name: "GLOBAL WIN-RATE CHART",
            active_indicator: "a",
            active_value: "b",
            fn: toggleChart(),
          },
        ]}
      />
    {/if}
  </div>

  {#if isChartVisible}
    <div class="content">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>📝</th>
            <th class="th-toggle" onclick={() => sortData('wr')}
              >{thText_wr} <span class="nth">- nth</span></th
            >
            <th class="th-toggle" onclick={() => sortData('pickRate')}
              >{thText_pr}</th
            >
            <th class="th-toggle" onclick={() => sortData('kda')}
              >{thText_kda}</th
            >
            <th class="th-toggle" onclick={() => sortData('kills')}
              >{thText_kills}</th
            >
          </tr>
        </thead>

        <tbody>
          {#each _wdata as data, i}
            <tr class={shikiName === data.name ? "shiki-name-active" : ""}>
              <td>{i + 1}.</td>
              <td class="shiki-name"
                ><LazyImage
                  class="wr-shikigami-image"
                  alt="shikigami portrait"
                  src={images[data.image]}
                /><a href="/shikigami/{data.id}" target="_blank">{data.name}</a
                ></td
              >
              <td
                class:red={data.wr < 50}
                class:yellow={data.wr >= 50 && data.wr <= 51}
                class:blue={data.wr >= 51}
                >{data.wr}%
                <span class="nth"
                  >- {data.number == 1 ? "🏆" : `${data.number}.`}</span
                ></td
              >
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
  .red {
    color: #ff4545;
  }
  .yellow {
    color: #fffb00;
  }
  .blue {
    color: #7976ff;
  }

  td {
    background-color: #3c3f46;
  }

  th:first-child {
    text-align: center;
  }

  td:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    width: 50px;
    text-align: center;
  }

  td:nth-child(3),
  td:nth-child(5) {
    background-color: rgb(58, 61, 66);
  }

  td:nth-child(3),
  td:nth-child(4) {
    font-weight: 800;
  }

  thead {
    position: sticky;
    top: 0;
    background-color: #36393f;
  }

  thead th {
    padding: 10px 0;
  }

  thead th:nth-child(2) {
    width: 200px;
  }

  td:nth-child(2) {
    max-width: 200px;
  }

  td:nth-child(3),
  th:nth-child(3),
  td:nth-child(4),
  th:nth-child(4),
  td:nth-child(5),
  th:nth-child(5),
  td:nth-child(6),
  th:nth-child(6) {
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
    background-color: #64676d;
  }

  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
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
    td:nth-child(5),
    th:nth-child(5),
    td:nth-child(6),
    th:nth-child(6) {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) {
    .wr-main-container {
      margin: 0 10px;
    }
    td a {
      display: none;
    }
  }
</style>
