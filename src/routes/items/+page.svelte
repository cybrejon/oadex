<script>
  // import external css
  import "$lib/styles/items.css";
  import "$lib/styles/shikis.css";

  //ANCHOR import components
  import Toggles from "$lib/Toggles.svelte";
  import ItemCard from "$lib/components/items/ItemCard.svelte";
  import FilterInput from "$lib/components/FilterInput.svelte";
  import Fuse from "fuse.js";
  import ItemPreview from "./ItemPreview.svelte";
  import Container from "$lib/components/shikigami/Container.svelte";
  import Button2 from "$lib/components/Button2.svelte";
  import ButtonGroup from "$lib/components/ButtonGroup.svelte";

  import { currentTier, currentType } from "./items.stores";
  import { onMount } from "svelte";
  import Dropdown from "../../lib/components/Dropdown.svelte";

  let { data } = $props();
  const itemData = data.itemData;
  const itemQuery = data.itemQuery;

  let tier_dropdown_toggle = $state();
  let type_dropdown_toggle = $state();

  let isOpen_itemDrawer = $state(false);
  const toggleMobileItemSelection = () => () => {
    isOpen_itemDrawer = !isOpen_itemDrawer;
  };

  itemData.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  let mainIterable = $state(itemData);
  const filterItemsByType =
    (type, cTier, isBeingMounted = false) =>
    () => {
      if (cTier == "All") {
        mainIterable = itemData.filter((item) => item.type == type);
      } else {
        mainIterable = itemData.filter(
          (item) => item.type == type && item.tier == cTier
        );
      }
      currentType.update((t) => (t = type));
      search_value = "";
      if (!isBeingMounted) {
        type_dropdown_toggle.toggle();
      }
    };

  const resetTypeToAll =
    (isBeingMounted = false) =>
    () => {
      if ($currentTier == "All") {
        mainIterable = itemData;
      } else {
        mainIterable = itemData.filter(
          (item) =>
            [
              "Weapon",
              "Magic",
              "Defense",
              "Jungle",
              "Movement",
              "Support",
            ].includes(item.type) && item.tier == $currentTier
        );
      }
      currentType.update((t) => (t = "All"));
      search_value = "";
      if (!isBeingMounted) {
        type_dropdown_toggle.toggle();
      }
    };

  const filterItemsByTier =
    (tier, cType, isBeingMounted = false) =>
    () => {
      if (cType == "All") {
        mainIterable = itemData.filter((item) => item.tier == tier);
      } else {
        mainIterable = itemData.filter(
          (item) => item.tier == tier && item.type == cType
        );
      }
      currentTier.update((t) => (t = tier));
      search_value = "";
      if (!isBeingMounted) {
        tier_dropdown_toggle.toggle();
      }
    };

  function resetTierToAll(isBeingMounted = false) {
    if ($currentType == "All") {
      mainIterable = itemData;
    } else {
      mainIterable = itemData.filter(
        (item) =>
          ["Advanced", "Intermediate", "Basic"].includes(item.tier) &&
          item.type == $currentType
      );
    }
    currentTier.update((t) => (t = "All"));
    search_value = "";
    if (!isBeingMounted) {
      tier_dropdown_toggle.toggle();
    }
  }

  let search_value = $state();
  const itemSearcher = new Fuse(mainIterable, {
    keys: ["name", "id"],
  });

  // perform search
  let searchResults = [];
  function searchItems() {
    if (!search_value) return;
    searchResults = itemSearcher.search(search_value);
    mainIterable = searchResults.map((result) => result.item);
    currentTier.update((t) => (t = "All"));
    currentType.update((t) => (t = "All"));
  }

  function clearSearch() {
    search_value = "";
    mainIterable = itemData;
  }

  let mobileHeaderDisplayMode = $state("normal");
  const toggleMobileHeaderMode = (mode) => () => {
    mobileHeaderDisplayMode = mode;
  };

  // preview pane
  let previewData = $state({});
  let activeItem = $state();

  if (itemQuery) {
    const queryItemProps = mainIterable.filter(
      (item) => item.name == itemQuery
    )[0];
    activeItem = queryItemProps.name;
    previewData = {
      name: queryItemProps.name,
      id: queryItemProps.id,
      image: queryItemProps.image,
      type: queryItemProps.type,
      tier: queryItemProps.tier,
      price: queryItemProps.price,
      abilities: queryItemProps.abilities,
      attributes: queryItemProps.attributes,
      requiredItems: queryItemProps.requiredItems,
      specialAbility: queryItemProps.specialAbility,
    };
    currentTier.update((t) => (t = queryItemProps.tier));
    currentType.update((t) => (t = queryItemProps.type));
  } else {
    previewData = {
      name: mainIterable[0].name,
      id: mainIterable[0].id,
      image: mainIterable[0].image,
      type: mainIterable[0].type,
      tier: mainIterable[0].tier,
      price: mainIterable[0].price,
      abilities: mainIterable[0].abilities,
      attributes: mainIterable[0].attributes,
      requiredItems: mainIterable[0].requiredItems,
      specialAbility: mainIterable[0].specialAbility,
    };
    activeItem = mainIterable[0].name;
  }

  const previewItem = (name, options) => () => {
    const { isGlobal } = options || 0;
    let item;
    if (isGlobal) {
      item = itemData.filter((item) => item.name == name)[0];
      resetTierToAll(true);
      resetTypeToAll(true)();
    } else {
      item = mainIterable.filter((item) => item.name == name)[0];
    }
    previewData = {
      name: item.name,
      id: item.id,
      image: item.image,
      type: item.type,
      tier: item.tier,
      price: item.price,
      abilities: item.abilities,
      attributes: item.attributes,
      requiredItems: item.requiredItems,
      specialAbility: item.specialAbility,
    };
    activeItem = item.name;
  };

  $inspect(itemData);

  onMount(() => {
    if ($currentTier == "All" && $currentType == "All") {
      resetTierToAll(true);
      resetTypeToAll(true)();
    } else {
      filterItemsByTier($currentTier, $currentType, true)();
      filterItemsByType($currentType, $currentTier, true)();
    }
  });
</script>

<svelte:head>
  <title>OADex | Items - {previewData.name}</title>
</svelte:head>

{#if mobileHeaderDisplayMode === "normal"}
  <div class="shiki-selection-header">
    <Dropdown
      bind:this={tier_dropdown_toggle}
      label={typeof $currentTier === "number" ? "Special Items" : $currentTier}
      icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"
    >
      <Button2 active={$currentTier === "All"} fn={resetTierToAll}>All</Button2>
      <Button2
        active={$currentTier === "Advanced"}
        fn={filterItemsByTier("Advanced", $currentType)}
      >
        Tier 0
      </Button2>
      <Button2
        active={$currentTier === "Intermediate"}
        fn={filterItemsByTier("Intermediate", $currentType)}
      >
        Tier 1
      </Button2>
      <Button2
        active={$currentTier === "Basic"}
        fn={filterItemsByTier("Basic", $currentType)}
      >
        Tier 2
      </Button2>
      <Button2
        active={$currentTier === 4}
        fn={filterItemsByTier(4, $currentType)}
      >
        Special 1
      </Button2>
      <Button2
        active={$currentTier === 5}
        fn={filterItemsByTier(5, $currentType)}
      >
        Special 2
      </Button2>
    </Dropdown>

    <div class="desktop-item-type-switcher-wrapper">
      <ButtonGroup>
        <Button2 active={$currentType === "ALL"} fn={resetTypeToAll()}>
          ALL
        </Button2>
        <Button2
          active={$currentType === "Weapon"}
          fn={filterItemsByType("Weapon", $currentTier)}
        >
          WEAPONS
        </Button2>
        <Button2
          active={$currentType === "Defense"}
          fn={filterItemsByType("Defense", $currentTier)}
        >
          DEFENSE
        </Button2>
        <Button2
          active={$currentType === "Magic"}
          fn={filterItemsByType("Magic", $currentTier)}
        >
          MAGIC
        </Button2>
        <Button2
          active={$currentType === "Jungle"}
          fn={filterItemsByType("Jungle", $currentTier)}
        >
          JUNGLE
        </Button2>
        <Button2
          active={$currentType === "Movement"}
          fn={filterItemsByType("Movement", $currentTier)}
        >
          MOVEMENT
        </Button2>
        <Button2
          active={$currentType === "Support"}
          fn={filterItemsByType("Support", $currentTier)}
        >
          SUPPORT
        </Button2>
        <Button2
          active={$currentType === 0}
          fn={filterItemsByType(0, $currentTier)}
        >
          T2 OLD
        </Button2>
      </ButtonGroup>
    </div>

    <div class="mobile-item-type-switcher-wrapper">
      <Dropdown
        bind:this={type_dropdown_toggle}
        label={typeof $currentType === "number" ? "Tier 2 Old" : $currentType}
      >
        <Button2 active={$currentType === "ALL"} fn={resetTypeToAll()}>
          ALL
        </Button2>
        <Button2
          active={$currentType === "Weapon"}
          fn={filterItemsByType("Weapon", $currentTier)}
        >
          WEAPONS
        </Button2>
        <Button2
          active={$currentType === "Defense"}
          fn={filterItemsByType("Defense", $currentTier)}
        >
          DEFENSE
        </Button2>
        <Button2
          active={$currentType === "Magic"}
          fn={filterItemsByType("Magic", $currentTier)}
        >
          MAGIC
        </Button2>
        <Button2
          active={$currentType === "Jungle"}
          fn={filterItemsByType("Jungle", $currentTier)}
        >
          JUNGLE
        </Button2>
        <Button2
          active={$currentType === "Movement"}
          fn={filterItemsByType("Movement", $currentTier)}
        >
          MOVEMENT
        </Button2>
        <Button2
          active={$currentType === "Support"}
          fn={filterItemsByType("Support", $currentTier)}
        >
          SUPPORT
        </Button2>
        <Button2
          active={$currentType === 0}
          fn={filterItemsByType(0, $currentTier)}
        >
          T2 OLD
        </Button2>
      </Dropdown>
    </div>
  </div>
{/if}

{#if mobileHeaderDisplayMode === "filter"}
  <div class="shiki-selection-header">
    <FilterInput
      width="210px"
      fn={searchItems}
      bind:search_value
      clearFunction={clearSearch}
    />
    <Toggles
      iconOnly="true"
      no_collapse="true"
      toggle_icon="icon-park-outline:switch"
      anchor_direction="left"
      buttons={[
        {
          name: "🔃",
          active_indicator: "a",
          active_value: "a",
          fn: toggleMobileHeaderMode("normal"),
        },
      ]}
    />
  </div>
{/if}

<div class="main-wrapper">
  <span class:items-container-wrapper={!isOpen_itemDrawer}>
    <Container
      styles="background-color: transparent; display: block; padding: 0; border: none;"
    >
      <div
        class:items-container={!isOpen_itemDrawer}
        class:items-container--visible={isOpen_itemDrawer}
      >
        {#each mainIterable as item}
          <ItemCard
            src={item.image}
            itemName={item.name}
            itemPrice="💰 {item.price}"
            fn={previewItem(item.name)}
            utilFn={isOpen_itemDrawer && toggleMobileItemSelection()}
            {activeItem}
            itemId={item.id}
            abilities={item.abilities}
            attributes={item.attributes}
          />
        {/each}
      </div>
    </Container>
  </span>

  {#if !isOpen_itemDrawer}
    <Container styles="display: block;">
      <ItemPreview {...previewData} {itemData} {previewItem} />
    </Container>
  {/if}
</div>

<div class="mobile-item-chooser-toggle">
  <Toggles
    iconOnly="true"
    iconOnlyButtonStyle="border-radius: 20px; padding: 10px; border: 3px solid #64676D; box-shadow: 0 8px #282A2F;"
    iconOnlyToggleStyle="font-size: 40px;"
    no_collapse="true"
    toggle_icon="ep:menu"
    anchor_direction="left"
    buttons={[
      {
        name: "a",
        active_indicator: "a",
        active_value: "a",
        fn: toggleMobileItemSelection(),
      },
    ]}
  />
</div>

<style>
  .mobile-item-chooser-toggle {
    display: none;
    position: fixed;
    bottom: 70px;
    right: 10px;
  }

  .main-wrapper {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    gap: 15px;
    position: relative;
  }

  .mobile-item-type-switcher-wrapper {
    display: none;
  }

  .items-container {
    margin: auto;
    display: flex;
    align-items: flex-start;
    gap: 15px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media screen and (width < 940px) {
    .desktop-item-type-switcher-wrapper {
      display: none;
    }
    .mobile-item-type-switcher-wrapper {
      display: block;
    }
  }

  @media only screen and (max-width: 500px) {
    .shiki-selection-header {
      margin: 0 10px 10px 10px;
      justify-content: flex-end;
    }
  }

  @media only screen and (max-width: 800px) {
    .mobile-item-chooser-toggle {
      display: block;
    }
    .main-wrapper {
      grid-template-columns: minmax(300px, 1fr);
      grid-template-rows: 1fr;
    }
    .items-container-wrapper {
      display: none;
    }
    .items-container {
      display: none;
      padding: 0;
    }
    .items-container--visible {
      display: flex;
      top: 0;
      left: 0;
      right: 0;
      align-items: center;
      gap: 15px 5px;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0;
    }
  }
</style>
