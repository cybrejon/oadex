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

  export let data;
  const itemNames = data.itemNames;
  const itemData = data.itemData;

  // import stores
  //NOTE these shouldnt really need to be writeables;
  import { currentTier, currentType } from './items.stores';
  
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









</script>

<Note noIcon=True
  text='WORK IN PROGRESS'
  styles="color: red; text-align: center;" container_margin='50px 0 0 0' />

<div class="shiki-selection-header">
  <Toggles collapsed=true toggle_icon="iconoir:nav-arrow-down" anchor_direction="left" buttons={[
    { name: "ALL", active_indicator: $currentTier, active_value: 'All', fn: resetTierToAll() },
    { name: "ADVANCED", active_indicator: $currentTier, active_value: 'Advanced', fn: filterItemsByTier('Advanced', $currentType) },
    { name: "INTERMEDIATE", active_indicator: $currentTier, active_value: 'Intermediate', fn: filterItemsByTier('Intermediate', $currentType) },
    { name: "BASIC", active_indicator: $currentTier, active_value: 'Basic', fn: filterItemsByTier('Basic', $currentType) },
  ]} />
  <FilterInput
    fn={searchItems}
    bind:search_value={search_value}
    clearFunction={clearSearch}
  />
  <Toggles toggle_icon="ic:round-sort" anchor_direction="left" buttons={[
    { name: "ALL", active_indicator: $currentType, active_value: 'All', fn: resetTypeToAll() },
    { name: "WEAPONS", active_indicator: $currentType, active_value: 'Weapon', fn: filterItemsByType('Weapon', $currentTier) },
    { name: "MAGIC", active_indicator: $currentType, active_value: 'Magic', fn: filterItemsByType('Magic', $currentTier) },
    { name: "JUNGLE", active_indicator: $currentType, active_value: 'Jungle', fn: filterItemsByType('Jungle', $currentTier) },
    { name: "MOVEMENT", active_indicator: $currentType, active_value: 'Movement', fn: filterItemsByType('Movement', $currentTier) },
    { name: "SUPPORT", active_indicator: $currentType, active_value: 'Support', fn: filterItemsByType('Support', $currentTier) },
  ]} />
</div>

<div class="items-container">

  {#each mainIterable as item}
    <ItemCard
      src = {item.image}
      shiki_name = {item.name}
    />
  {/each}
  
</div>



<style>

.items-container {
  margin: auto;
  display: flex;
  align-items: center;
  gap: 30px 10px;
  justify-content: space-between;
  flex-wrap: wrap;
}

</style>