<script>
  /** @type {import('./$types').PageData} */
  /** @type {import('./$types').Snapshot<string>} */

  // import stores
  import {
    active_role,
    isAscending,
    role_config,
    shikiga_data,
    hasBeenLeft,
    images
  } from './store.js';

  import { onDestroy } from 'svelte';
  import Fuse from 'fuse.js';

  // import components
  import Toggles from '$lib/Toggles.svelte';
  import ShikiCard from '$lib/ShikiCard.svelte';
  import "$lib/styles/shikis.css";

  const shiki_names = Object.keys($shikiga_data).sort();

  $: role = shiki_names;
  const toggleRole = (r) => () => {

    r === 'all'
    ? role = shiki_names.sort()
    : role = shiki_names.filter(shiki => $shikiga_data[shiki].式神定位[0] === r).sort();

    active_role.update(role => role = r);
    search_value = '';

    $isAscending
    ? role = role.sort()
    : role = role.sort().reverse();
    
    role_config.update(roles => roles = role);
    hasBeenLeft.update(bool => bool = false);
  }

  // start searcher
  let search_value;
  const shiki_fuse = new Fuse(shiki_names);

  // perform search
  let results = [];
  function filterShiki() {
    if (!search_value) return;
    results = shiki_fuse.search(search_value);
    if ($hasBeenLeft) {
      $role_config = results.map((result) => result.item);
    } else {
      role = results.map((result) => result.item);
    }
    active_role.update(role => role = 'clear current');
    isAscending.update(bool => bool = true);
  }

  // sort order
  function sortAscend() {
    $hasBeenLeft
    ? role_config.update(c => c = c.sort())
    : role = role.sort();
    role = role.sort()
    isAscending.update(bool => bool = true);
    search_value = '';
  }
  function sortDescend() {
    $hasBeenLeft
    ? role_config.update(c => c = c.sort().reverse())
    : role = role.sort().reverse();
    isAscending.update(bool => bool = false);
    search_value = '';
  }

  onDestroy(() => {
    // hasBeenLeft.update(bool => bool = true);
    !$role_config.length == 0
    ? hasBeenLeft.update(bool => bool = true)
    : hasBeenLeft.update(bool => bool = false);
  });

</script>

<svelte:head>
	<title>OADex</title>
</svelte:head>


  <div class="shiki-selection-header">
    <Toggles toggle_icon="gridicons:dropdown" anchor_direction="left" buttons={[
      { name: "ALL", active_indicator: $active_role, active_value: 'all', fn: toggleRole('all') },
      { name: "SAMURAI", active_indicator: $active_role, active_value: '侍', fn: toggleRole('侍') },
      { name: "NINJA", active_indicator: $active_role, active_value: '忍', fn: toggleRole('忍') },
      { name: "MARKSMAN", active_indicator: $active_role, active_value: '射', fn: toggleRole('射') },
      { name: "TANK", active_indicator: $active_role, active_value: '守', fn: toggleRole('守') },
      { name: "MAGE", active_indicator: $active_role, active_value: '巫', fn: toggleRole('巫') },
      { name: "SUPPORT", active_indicator: $active_role, active_value: '祝', fn: toggleRole('祝') },
    ]} />
    <div class="filter-container">
      <input id="filter-input" on:keypress={filterShiki} class="filter-input" type="text" placeholder="Filter" bind:value={search_value} >
    </div>
    <Toggles toggle_icon="ic:round-sort" anchor_direction="right" buttons={[
      { name: "A-Z", active_indicator: $isAscending, active_value: true, fn: sortAscend },
      { name: "Z-A", active_indicator: $isAscending, active_value: false, fn: sortDescend },
    ]} />
  </div>


<div class="shiki-selection-container">
  {#if $hasBeenLeft}
    {#each $role_config as shiki}

      <ShikiCard
        slug = {$shikiga_data[shiki].式神ID}
        src = {$images[$shikiga_data[shiki].式神方头像]}
        shiki_name = {shiki}
      />

    {/each}
  {:else}
    {#each role as shiki}

      <ShikiCard
        slug = {$shikiga_data[shiki].式神ID}
        src = {$images[$shikiga_data[shiki].式神方头像]}
        shiki_name = {shiki}
      />
      
    {/each}
  {/if}
</div>
