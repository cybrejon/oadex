<script>

export let name;
export let image;
export let type;
export let tier;
export let price;
export let abilities;
export let attributes;
export let requiredItems;
export let specialAbility;

export let itemData;
export let previewItem;

$: composites = requiredItems && itemData.filter(item => requiredItems.includes(item.name));

import ItemCard from '$lib/components/items/ItemCard.svelte';

const colors = ["#n", "#r", "#U", "#G", "#B", "#O", "#W", "#Y", "#P", "#c0095cc", "#c39b54a", "#c9e45fa", "#cffba35", "#cb82a2f", "#c35c6e7", "#cb82a2f", "#ce7ad2f", "#ca61fe4"];
const color_regex = new RegExp(colors.join("|"), "gi");

</script>

<div class="sticky-container">
  <div class="head">
    <img class="item-image" src={image} alt="item" />
    <span>
      <h3 class="item-name">{name}</h3>
      <p class="item-price">💵 {price}</p>
      <p class="item-type">⚔️ {type}</p>
      <p class="item-tier">📊 {tier}</p>
    </span>
  </div>
  <div class="body">
    {#if abilities.active}
      <h3>Active Abilities</h3>
      {abilities.active.replace(color_regex, " ")}
    {/if}

    {#if abilities.passive}
      <h3>Passive Abilities</h3>
      {abilities.passive[0].replace(color_regex, " ")}
    {/if}

    {#if attributes.length}
      <h3>Attributes</h3>
      <div class="attributes-container">
        {#each attributes as attribute}
          <span class="attribute">{attribute}</span>
        {/each}
      </div>
    {/if}

    {#if requiredItems}
      <h3>Required Items</h3>
      <div class="required-items-container">
        {#each composites as item}
          <ItemCard
            src = {item.image}
            itemName = {item.name}
            itemPrice = "🪙 {item.price}"
            itemId = {item.id}
            fn={previewItem(item.name, {
              isGlobal: true
            })}
          />
        {/each}
      </div>
    {/if}

    {#if specialAbility}
      <h3>Special Ability</h3>
      {specialAbility.replace(color_regex, " ")}
    {/if}
  </div>
</div>

<style>

  .required-items-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .attributes-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 5px;
  }

  .attribute {
    font-size: .8rem;
    color: rgb(255, 211, 128);
    font-weight: 600;
  }

  .sticky-container {
    border-radius: 6px;
    position: sticky;
    top: 75px;
  }

  .head {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 10px;
    justify-content: flex-start;
  }

  .head > span {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  .item-image {
    width: 120px;
    border-radius: 6px;
    border: 4px solid rgba(255, 255, 255, 0.189);
  }

  .item-name {
    font-size: 1.6rem;
  }

  .item-price {
    color: rgb(255, 211, 128);
    font-weight: 600;
  }

  .item-type, .item-tier {
    font-size: .8rem;
  }
</style>