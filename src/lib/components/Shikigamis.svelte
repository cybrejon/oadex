<script>
  import ShikiCard from '$lib/ShikiCard.svelte';
  import Note from "$lib/components/Note.svelte";
  import Button2 from "$lib/components/Button2.svelte";
  import ButtonGroup from "$lib/components/ButtonGroup.svelte";
  import Dropdown from './Dropdown.svelte';

  import "$lib/styles/shikis.css";

  // import stores
  import {
    active_role,
    isAscending,
    role_config,
    hasBeenLeft,
  } from '$userStore/store.js';

  import { roles } from "$lib/json/dictionary.json";

  export let shikiga_data; // object
  export let damage_types; // array
  export let images; // array

  import Fuse from 'fuse.js';
  import { onDestroy } from 'svelte';
  import { goto } from '$app/navigation';

  const shiki_names = Object.keys(shikiga_data).sort();
  const shikiIDs = [];
  shiki_names.forEach(name => shikiIDs.push(shikiga_data[name].式神ID	));

  let mobile_role_switcher_toggle;

  $: role = shiki_names;
  const toggleRole = (r) => () => {

    r === 'all'
    ? role = shiki_names.sort()
    : role = shiki_names.filter(shiki => shikiga_data[shiki].式神定位.includes(r)).sort();

    active_role.update(role => role = r);

    $isAscending
    ? role = role.sort()
    : role = role.sort().reverse();
    
    role_config.update(roles => roles = role);
    hasBeenLeft.update(bool => bool = false);

    mobile_role_switcher_toggle.toggle();

  }

  // sort order
  function sortAscend() {
    $hasBeenLeft
    ? role_config.update(c => c = c.sort())
    : role = role.sort();
    role = role.sort()
    isAscending.update(bool => bool = true);
  }

  function sortDescend() {
    $hasBeenLeft
    ? role_config.update(c => c = c.sort().reverse())
    : role = role.sort().reverse();
    isAscending.update(bool => bool = false);
  }

  function randomShikigami() {
    let id = shikiIDs[Math.floor(Math.random() * shikiIDs.length)];
    goto(`/shikigami/${id}`);
    mobile_role_switcher_toggle.toggle();
  }

  $: numberOfShikisCurrentlyShown = $role_config.length === 0 ? role.length : $role_config.length;

  onDestroy(() => {
    !$role_config.length == 0
    ? hasBeenLeft.update(bool => bool = true)
    : hasBeenLeft.update(bool => bool = false);
  });
</script>

<div class="shiki-selection-header">
  <ButtonGroup>
    <Button2 active={$isAscending === true} fn={() => sortAscend()}>
      A-Z
    </Button2>
    <Button2 active={$isAscending === false} fn={() => sortDescend()}>
      Z-A
    </Button2>
  </ButtonGroup>
  <div class="desktop-role-switcher-wrapper">
    <Button2 fn={() => randomShikigami()} styles='fonqt-weight: 800;' icon='ion:dice' />
    <ButtonGroup>
      <Button2 active={$active_role === 'all'} fn={toggleRole('all')}>
        ALL
      </Button2>
      <Button2 active={$active_role === '侍'} fn={toggleRole('侍')}>
        SAMURAI
      </Button2>
      <Button2 active={$active_role === '忍'} fn={toggleRole('忍')}>
        NINJA
      </Button2>
      <Button2 active={$active_role === '射'} fn={toggleRole('射')}>
        MARKSMAN
      </Button2>
      <Button2 active={$active_role === '守'} fn={toggleRole('守')}>
        TANK
      </Button2>
      <Button2 active={$active_role === '巫'} fn={toggleRole('巫')}>
        MAGE
      </Button2>
      <Button2 active={$active_role === '祝'} fn={toggleRole('祝')}>
        SUPPORT
      </Button2>
    </ButtonGroup>
  </div>
  <div class="mobile-role-switcher-wrapper">
    <Dropdown bind:this={mobile_role_switcher_toggle} label={roles[$active_role] || "ALL"}>
      <Button2 fn={() => randomShikigami()} icon="ion:dice" />
      <Button2 active={$active_role === 'all'} fn={toggleRole('all')}>
        ALL
      </Button2>
      <Button2 active={$active_role === '侍'} fn={toggleRole('侍')}>
        SAMURAI
      </Button2>
      <Button2 active={$active_role === '忍'} fn={toggleRole('忍')}>
        NINJA
      </Button2>
      <Button2 active={$active_role === '射'} fn={toggleRole('射')}>
        MARKSMAN
      </Button2>
      <Button2 active={$active_role === '守'} fn={toggleRole('守')}>
        TANK
      </Button2>
      <Button2 active={$active_role === '巫'} fn={toggleRole('巫')}>
        MAGE
      </Button2>
      <Button2 active={$active_role === '祝'} fn={toggleRole('祝')}>
        SUPPORT
      </Button2>
    </Dropdown>
  </div>
</div>
  
<div class="shiki-selection-container">
  {#if $hasBeenLeft}
    {#each $role_config as shiki}

    {@const dtype = damage_types.filter(damage => damage.name === shiki)}

      <ShikiCard
        {dtype}
        slug = {shikiga_data[shiki].式神ID}
        src = {images[shikiga_data[shiki].式神方头像]}
        shiki_name = {shiki}
        new_shiki = {shikiga_data[shiki].新式神}
      />

    {/each}
  {:else}
    {#each role as shiki}

    {@const dtype = damage_types.filter(damage => damage.name === shiki)}

      <ShikiCard
        {dtype}
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
  
  .desktop-role-switcher-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .mobile-role-switcher-wrapper {
    display: none;
  }

  @media screen and (width < 865px) {
    .desktop-role-switcher-wrapper {
      display: none;
    }
    .mobile-role-switcher-wrapper {
      display: block;
    }
  }

  @media only screen and (max-width: 500px) {
    .shiki-selection-header {
      margin: 0 10px 10px 10px;
    }
  }

</style>