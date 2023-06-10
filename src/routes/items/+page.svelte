<script>

  // import external css
  import '$lib/styles/items.css';
  import '$lib/styles/shikis.css';

  //ANCHOR import components
  import Toggles from '$lib/Toggles.svelte';
  import ItemCard from '$lib/components/items/ItemCard.svelte';
  import FilterInput from '$lib/components/FilterInput.svelte';
  import Note from "$lib/components/Note.svelte";
  import Fuse from 'fuse.js';
  import ItemPreview from './ItemPreview.svelte';
  import Container from '$lib/components/shikigami/Container.svelte';

  import { currentTier, currentType, itemData_store, toggleStates } from './items.stores';
  import { onMount } from 'svelte';

  $: console.log($itemData_store)

  export let data;
  const itemNames = data.itemNames;
  const itemData = data.itemData;
  
  itemData.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  let mainIterable = itemData;
  const filterItemsByType = (type, cTier) => () => {
    if (cTier == 'All') {
      mainIterable = itemData.filter(item => item.type == type);
    } else {
      mainIterable = itemData.filter(item => item.type == type && item.tier == cTier);
    }
    currentType.update(t => t = type);
    search_value = '';
  };

  const resetTypeToAll = () => () => {
    if ($currentTier == 'All') {
      mainIterable = itemData;
    } else {
      mainIterable = itemData.filter(item => ['Weapon', 'Magic', 'Defense', 'Jungle', 'Movement', 'Support'].includes(item.type) && item.tier == $currentTier);
    }
    currentType.update(t => t = 'All');
    search_value = '';
  };

  const filterItemsByTier = (tier, cType) => () => {
    if (cType == 'All') {
      mainIterable = itemData.filter(item => item.tier == tier);
    } else {
      mainIterable = itemData.filter(item => item.tier == tier && item.type == cType);
    }
    currentTier.update(t => t = tier);
    search_value = '';
  };

  const resetTierToAll = () => () => {
    if ($currentType == 'All') {
      mainIterable = itemData;
    } else {
      mainIterable = itemData.filter(item => ['Advanced', 'Intermediate', 'Basic'].includes(item.tier) && item.type == $currentType);
    }
    currentTier.update(t => t = 'All');
    search_value = '';
  };

  let search_value;
  const itemSearcher = new Fuse(mainIterable, {
    keys: ['name', 'id'],
  });

  // perform search
  let searchResults = [];
  function searchItems() {
    if (!search_value) return;
    searchResults = itemSearcher.search(search_value);
    mainIterable = searchResults.map(result => result.item);
    currentTier.update(t => t = 'All');
    currentType.update(t => t = 'All');
  }

  function clearSearch() {
    search_value = '';
    mainIterable = itemData;
  }

  let mobileHeaderDisplayMode = 'normal';
  const toggleMobileHeaderMode = (mode) => () => {
    mobileHeaderDisplayMode = mode;
  };

  onMount(() => {
    if ($currentTier == 'All' && $currentType == 'All') {
      resetTierToAll()();
      resetTypeToAll()();
    } else {
      filterItemsByTier($currentTier, $currentType)();
      filterItemsByType($currentType, $currentTier)();
    }
  });

</script>

<Note noIcon=True
  text='WORK IN PROGRESS'
  styles="color: red; text-align: center;" container_margin='50px 0 0 0' />

{#if mobileHeaderDisplayMode === 'normal'}
  <div class="shiki-selection-header">
    <Toggles collapsed=true toggle_icon="iconoir:nav-arrow-down" anchor_direction="left" buttons={[
      { name: "ALL", active_indicator: $currentTier, active_value: 'All', fn: resetTierToAll() },
      { name: "ADVANCED", active_indicator: $currentTier, active_value: 'Advanced', fn: filterItemsByTier('Advanced', $currentType) },
      { name: "INTERMEDIATE", active_indicator: $currentTier, active_value: 'Intermediate', fn: filterItemsByTier('Intermediate', $currentType) },
      { name: "BASIC", active_indicator: $currentTier, active_value: 'Basic', fn: filterItemsByTier('Basic', $currentType) },
    ]} />
    <span class="desktop-filter-bar-visibility-wrapper">
      <FilterInput
        fn={searchItems}
        bind:search_value={search_value}
        clearFunction={clearSearch}
      />
    </span>
    <Toggles toggle_icon="ic:round-sort" anchor_direction="left" buttons={[
      { name: "ALL", active_indicator: $currentType, active_value: 'All', fn: resetTypeToAll() },
      { name: "WEAPONS", active_indicator: $currentType, active_value: 'Weapon', fn: filterItemsByType('Weapon', $currentTier) },
      { name: "MAGIC", active_indicator: $currentType, active_value: 'Magic', fn: filterItemsByType('Magic', $currentTier) },
      { name: "JUNGLE", active_indicator: $currentType, active_value: 'Jungle', fn: filterItemsByType('Jungle', $currentTier) },
      { name: "MOVEMENT", active_indicator: $currentType, active_value: 'Movement', fn: filterItemsByType('Movement', $currentTier) },
      { name: "SUPPORT", active_indicator: $currentType, active_value: 'Support', fn: filterItemsByType('Support', $currentTier) },
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
      fn={searchItems}
      bind:search_value={search_value}
      clearFunction={clearSearch}
    />
    <Toggles no_collapse=true toggle_icon="ic:round-sort" anchor_direction="left" buttons={[
      { name: "🔃", active_indicator: 'a', active_value: 'a', fn: toggleMobileHeaderMode('normal') },
    ]} />
  </div>
{/if}

<div class="main-wrapper">

  <div class="items-container">
    {#each mainIterable as item}
      <ItemCard
        src = {item.image}
        shiki_name = {item.name}
      />
    {/each}
  </div>

  <Container className="preview-pane">
    <ItemPreview />
  </Container>

</div>



<style>

  .main-wrapper {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    gap: 15px;
    position: relative;
  }

  .mobile-header-mode-toggle {
    display: none;
  }

  .items-container {
    margin: auto;
    display: flex;
    align-items: center;
    gap: 30px 10px;
    justify-content: space-between;
    flex-wrap: wrap;
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

  @media only screen and (max-width: 800px) {
    .main-wrapper {
      grid-template-columns: minmax(300px, 1fr);
      grid-template-rows: 1fr;
    }
    .items-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
  }

</style>