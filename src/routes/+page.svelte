<script>
  /** @type {import('./$types').PageData} */
  /** @type {import('./$types').Snapshot<string>} */

  // import stores
  import {
    active_role,
    isAscending,
    role_config,
    hasBeenLeft,
  } from './store.js';

  // import data
  export let data;
  const shikiga_data = data.shikiga_data;
  const images = data.images;

  import { onDestroy } from 'svelte';
  import Fuse from 'fuse.js';

  // import components
  import Note from "$lib/components/Note.svelte";
  import Toggles from '$lib/Toggles.svelte';
  import ShikiCard from '$lib/ShikiCard.svelte';
  import FilterInput from '$lib/components/FilterInput.svelte';
  import "$lib/styles/shikis.css";

  const shiki_names = Object.keys(shikiga_data).sort();

  $: role = shiki_names;
  const toggleRole = (r) => () => {

    r === 'all'
    ? role = shiki_names.sort()
    : role = shiki_names.filter(shiki => shikiga_data[shiki].式神定位[0] === r).sort();

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
    active_role.update(role => role = 'all');
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

  let mobileHeaderDisplayMode = 'normal';
  const toggleMobileHeaderMode = (mode) => () => {
    mobileHeaderDisplayMode = mode;
    if (mode == 'normal') {
      $hasBeenLeft
      ? role_config.update(c => c = c.sort())
      : role = role.sort();
    }
  };

  onDestroy(() => {
    // hasBeenLeft.update(bool => bool = true);
    !$role_config.length == 0
    ? hasBeenLeft.update(bool => bool = true)
    : hasBeenLeft.update(bool => bool = false);
  });

</script>

<svelte:head>
	<title>OADex</title>
  <meta description="The unofficial wiki for Onmyoji Arena.">
</svelte:head>

  {#if mobileHeaderDisplayMode === 'normal'}
    <div class="shiki-selection-header">
      <Toggles toggle_icon="ic:round-sort" anchor_direction="left" buttons={[
        { name: "A-Z", active_indicator: $isAscending, active_value: true, fn: sortAscend },
        { name: "Z-A", active_indicator: $isAscending, active_value: false, fn: sortDescend },
      ]} />
      <span class="desktop-filter-bar-visibility-wrapper">
        <FilterInput
          fn={filterShiki}
          bind:search_value={search_value}
        />
      </span>
      <Toggles toggle_icon="gridicons:dropdown" anchor_direction="right" buttons={[
        { name: "ALL", active_indicator: $active_role, active_value: 'all', fn: toggleRole('all') },
        { name: "SAMURAI", active_indicator: $active_role, active_value: '侍', fn: toggleRole('侍') },
        { name: "NINJA", active_indicator: $active_role, active_value: '忍', fn: toggleRole('忍') },
        { name: "MARKSMAN", active_indicator: $active_role, active_value: '射', fn: toggleRole('射') },
        { name: "TANK", active_indicator: $active_role, active_value: '守', fn: toggleRole('守') },
        { name: "MAGE", active_indicator: $active_role, active_value: '巫', fn: toggleRole('巫') },
        { name: "SUPPORT", active_indicator: $active_role, active_value: '祝', fn: toggleRole('祝') },
      ]} />
      <span class="mobile-header-mode-toggle">
        <Toggles no_collapse=true toggle_icon="ic:round-sort" anchor_direction="left" buttons={[
          { name: "🔎", active_indicator: 'a', active_value: 'q', fn: toggleMobileHeaderMode('filter') },
        ]} />
      </span>
    </div>
  {/if}

  {#if mobileHeaderDisplayMode === 'filter'}
    <div class="shiki-selection-header">
      <FilterInput
        fn={filterShiki}
        bind:search_value={search_value}
      />
      <Toggles no_collapse=true toggle_icon="ic:round-sort" anchor_direction="left" buttons={[
        { name: "❌", active_indicator: 'a', active_value: 'a', fn: toggleMobileHeaderMode('normal') },
      ]} />
    </div>
  {/if}
  

  

<div class="shiki-selection-container">
  {#if $hasBeenLeft}
    {#each $role_config as shiki}

      <ShikiCard
        slug = {shikiga_data[shiki].式神ID}
        src = {images[shikiga_data[shiki].式神方头像]}
        shiki_name = {shiki}
        new_shiki = {shikiga_data[shiki].新式神}
      />

    {/each}
  {:else}
    {#each role as shiki}

      <ShikiCard
        slug = {shikiga_data[shiki].式神ID}
        src = {images[shikiga_data[shiki].式神方头像]}
        shiki_name = {shiki}
        new_shiki = {shikiga_data[shiki].新式神}
      />
      
    {/each}
  {/if}
</div>
<Note noIcon=True text={`Number of shikigamis shown - ${$role_config.length === 0 ? role.length : $role_config.length}.`} styles="font-size: .8rem; text-align: center;" container_margin='50px 0 0 0' />


<style>

  .mobile-header-mode-toggle {
    display: none;
  }

  @media only screen and (max-width: 500px) {
    .shiki-selection-header {
      margin: 0 10px 10px 10px;
      justify-content: flex-end;
    }
    .desktop-filter-bar-visibility-wrapper {
      display: none;
    }
    .mobile-header-mode-toggle {
      display: block;
    }
  }

</style>