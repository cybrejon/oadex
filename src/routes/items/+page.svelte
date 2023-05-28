<script>

  export let data;
  const itemNames = data.itemNames;
  const itemData = data.itemData;
  
  itemData.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  // pre-filter the items into variables
  const advancedAllItems = itemData.filter(item => item.tier == "Advanced");
  const weapons = {
    advanced: itemData.filter(item => item.tier == "Advanced" && item.type == "Weapon"),
    intermediate: itemData.filter(item => item.tier == "Intermediate" && item.type == "Weapon"),
    basic: itemData.filter(item => item.tier == "Basic" && item.type == "Weapon")
  };
  const magicWeapons = {
    advanced: itemData.filter(item => item.tier == "Advanced" && item.type == "Magic"),
    intermediate: itemData.filter(item => item.tier == "Intermediate" && item.type == "Magic"),
    basic: itemData.filter(item => item.tier == "Basic" && item.type == "Magic")
  };

  // import external css
  import '$lib/styles/items.css';
  import '$lib/styles/shikis.css';

  //ANCHOR import components
  import Toggles from '$lib/Toggles.svelte';
  import ItemCard from '$lib/components/items/ItemCard.svelte';
  import FilterInput from '$lib/components/FilterInput.svelte';

</script>

<div class="shiki-selection-header">
  <Toggles toggle_icon="ic:round-sort" anchor_direction="left" buttons={[
    { name: "Advanced", active_indicator: '', active_value: '', fn: '' },
    { name: "Intermediate", active_indicator: '', active_value: '', fn: '' },
    { name: "Basic", active_indicator: '', active_value: '', fn: '' },
  ]} />
  <FilterInput />
</div>

<div class="items-container">

  {#each weapons.basic as item}
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