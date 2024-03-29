<script>
  import Toggles from '$lib/Toggles.svelte';
  import ShikiCard from '$lib/ShikiCard.svelte';
  import FilterInput from '$lib/components/FilterInput.svelte';
  import Note from "$lib/components/Note.svelte";

  import "$lib/styles/shikis.css";

  export let shikiga_data;
  export let images;

  export let active_role;
  export let isAscending;
  export let role_config;
  export let hasBeenLeft;

  import Fuse from 'fuse.js';
  import { onDestroy } from 'svelte';
  import { goto } from '$app/navigation';
  import { fade } from 'svelte/transition';

  const shiki_names = Object.keys(shikiga_data).sort();
  const shikiIDs = [];
  shiki_names.forEach(name => shikiIDs.push(shikiga_data[name].式神ID	));

  $: role = shiki_names;
  const toggleRole = (r) => () => {

    r === 'all'
    ? role = shiki_names.sort()
    : role = shiki_names.filter(shiki => shikiga_data[shiki].式神定位.includes(r)).sort();

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

  // clear filter input
  function clearSearch() {
    role = shiki_names;
    role_config.update(c => c = c.sort());
    search_value = '';
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
  };

  function randomShikigami() {
    let id = shikiIDs[Math.floor(Math.random() * shikiIDs.length)];
    goto(`/shikigami/${id}`);
  }

  $: numberOfShikisCurrentlyShown = $role_config.length === 0 ? role.length : $role_config.length;

  onDestroy(() => {
    !$role_config.length == 0
    ? hasBeenLeft.update(bool => bool = true)
    : hasBeenLeft.update(bool => bool = false);
  });
</script>

{#if mobileHeaderDisplayMode === 'normal'}
    <div class="shiki-selection-header">
      <Toggles toggle_icon="ic:round-sort" anchor_direction="left" buttons={[
        { name: "A-Z", active_indicator: $isAscending, active_value: true, fn: sortAscend },
        { name: "Z-A", active_indicator: $isAscending, active_value: false, fn: sortDescend },
      ]} />
      <span class="desktop-filter-bar-visibility-wrapper">
        <FilterInput
          width='250px'
          fn={filterShiki}
          bind:search_value={search_value}
          clearFunction={clearSearch}
        />
      </span>
      <Toggles
        iconOnly=true
        toggle_icon="ion:dice"
        anchor_direction="left"
        buttons={[
          { name: "a", active_indicator: 'e', active_value: 'i', fn: randomShikigami },
      ]} />
      <Toggles toggle_icon="fluent:tag-question-mark-32-filled" anchor_direction="right" buttons={[
        { name: "ALL", active_indicator: $active_role, active_value: 'all', fn: toggleRole('all') },
        { name: "SAMURAI", active_indicator: $active_role, active_value: '侍', fn: toggleRole('侍') },
        { name: "NINJA", active_indicator: $active_role, active_value: '忍', fn: toggleRole('忍') },
        { name: "MARKSMAN", active_indicator: $active_role, active_value: '射', fn: toggleRole('射') },
        { name: "TANK", active_indicator: $active_role, active_value: '守', fn: toggleRole('守') },
        { name: "MAGE", active_indicator: $active_role, active_value: '巫', fn: toggleRole('巫') },
        { name: "SUPPORT", active_indicator: $active_role, active_value: '祝', fn: toggleRole('祝') },
      ]} />
      <span class="mobile-header-mode-toggle">
        <Toggles iconOnly=true no_collapse=true toggle_icon="solar:filter-bold" anchor_direction="left" buttons={[
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
        clearFunction={clearSearch}
      />
      <Toggles iconOnly=true no_collapse=true toggle_icon="icon-park-outline:switch" anchor_direction="left" buttons={[
        { name: "🔃", active_indicator: 'a', active_value: 'a', fn: toggleMobileHeaderMode('normal') },
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

<Note noIcon=True text={`Number of shikigamis shown - ${numberOfShikisCurrentlyShown}.`} styles="font-size: .8rem; text-align: center;" container_margin='50px 0 0 0' />


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