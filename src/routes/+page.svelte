<script>

  // import data
  export let data;
  const shikiga_data = data.shikiga_data;
  const images = data.images;

  // import components
  import StatSheet from '../lib/components/StatSheet.svelte';
  import Shikigamis from '../lib/components/Shikigamis.svelte';
  import ButtonGroup from '../lib/components/ButtonGroup.svelte';
  import Button2 from '../lib/components/Button2.svelte';

  // import stores
  import {
    active_role,
    isAscending,
    role_config,
    hasBeenLeft,
    isTableMode
  } from './store.js';

  let shikigamisState = {
    active_role,
    isAscending,
    role_config,
    hasBeenLeft
  };

  function toggleTableMode(mode) {
    mode === 'table'
    ? $isTableMode = true
    : $isTableMode = false;
  }

</script>

<svelte:head>
	<title>OADex</title>
  <meta description="The unofficial wiki for Onmyoji Arena.">
</svelte:head>

<div class="extra-buttons">
  <ButtonGroup>

    <Button2
      active={!$isTableMode}
      icon='fluent:grid-24-filled'
      fn={() => toggleTableMode('icon')}>
    </Button2>

    <Button2
      active={$isTableMode}
      icon='ph:table-fill'
      fn={() => toggleTableMode('table')}>
      STATS
    </Button2>

  </ButtonGroup>
</div>

{#if !$isTableMode}
  <Shikigamis
    {shikiga_data}
    {images}
    {...shikigamisState}
  />
{/if}

{#if $isTableMode}
  <StatSheet {images} data={shikiga_data}/>
{/if}

<style>
  .extra-buttons {
    gap: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media only screen and (max-width: 800px) {
    .extra-buttons {
      justify-content: flex-end;
      padding: 0 10px;
    }
  }
</style>