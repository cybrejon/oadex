<script>

  import { roles, roles_reversed } from '$lib/json/dictionary';
  import { currentRole, currentStatValues, currentLevelSliderValue, visibleColumns } from './statSheetState.store.js';
  import ButtonGroup from '$lib/components/ButtonGroup.svelte';
  import Button2 from '$lib/components/Button2.svelte';
  import { onMount } from 'svelte';
  import Note from "$lib/components/Note.svelte";
  import Dropdown from './Dropdown.svelte';
  import Slider from './Slider.svelte';
  import Checkbox from './Checkbox.svelte';
  import Accordion from './Accordion.svelte';
  import AccordionItem from './AccordionItem.svelte';
  import { tableSorting } from '$userStore/statTable';
    import Icon from '@iconify/svelte';

  export let data;
  export let images;

  let roleDropdownToggle;
  let roleNames = Object.keys(roles_reversed);
  let mobileAccordionIndex = 1;

  let baseIterable = [];
  function object2array(obj) {
    for (let x in obj) {
      baseIterable.push(data[x]);
    };
  };

  $: mainIterable = baseIterable;

  object2array(data);

  function switchRoles(role, closeOnMount = false) {
    if (role === 'ALL') {
      mainIterable = baseIterable;
    } else {
      mainIterable = baseIterable.filter(shiki => shiki.式神定位.includes(roles_reversed[role]));
    }
    $currentRole = role;
    if (!closeOnMount) {
      roleDropdownToggle.toggle();
    }
  };

  function switchValues(mode) {
    $currentStatValues = mode;
  }

  function modifyLevel(level) {
    $currentLevelSliderValue = level;
  }

  function toggleMobileControlAccordion(index) {
    mobileAccordionIndex = index;
  }

  function sortColumn(prop, columnName) {
    $tableSorting.lastSorted = columnName;
    $tableSorting.lastProp = prop;
    mainIterable.sort((a, b) => {
      let s;
      if ($tableSorting.sorting[columnName].isHigh) {
        s = a.式神基础属性[prop] - b.式神基础属性[prop]
      } else {
        s = b.式神基础属性[prop] - a.式神基础属性[prop]
      }
      return s;
    });
    mainIterable = mainIterable;
    $tableSorting.sorting[columnName].isHigh = !$tableSorting.sorting[columnName].isHigh;
  }

  onMount(() => {
    switchRoles($currentRole, true);
    $tableSorting.lastSorted = '';
  });

</script>

<Accordion>

  <AccordionItem 
  styles='align-items: unset'
  active={mobileAccordionIndex === 1}
  fn={() => toggleMobileControlAccordion(1)}>
    <svelte:fragment slot='name'>
      Role
    </svelte:fragment>
    <svelte:fragment slot="content">
      <Button2
        active={$currentRole === 'ALL'}
        fn={() => switchRoles('ALL')}
        >
        ALL
      </Button2>
      {#each roleNames as role}
        <Button2
          active={$currentRole === role}
          fn={() => switchRoles(role)}
          >
          {role}
        </Button2>
      {/each}
    </svelte:fragment>
  </AccordionItem>

  <AccordionItem
  styles='gap: 10px; align-items: unset'
  active={mobileAccordionIndex === 2}
  fn={() => toggleMobileControlAccordion(2)}>
    <svelte:fragment slot='name'>
      Visible Columns
    </svelte:fragment>
    <svelte:fragment slot="content">
      <Checkbox bind:checked={$visibleColumns.names}>Names</Checkbox>
      <Checkbox bind:checked={$visibleColumns.role}>Role</Checkbox>
      <Checkbox bind:checked={$visibleColumns.patk}>P. ATK</Checkbox>
      <Checkbox bind:checked={$visibleColumns.atkspd}>ATK SPEED</Checkbox>
      <Checkbox bind:checked={$visibleColumns.hp}>HP</Checkbox>
      <Checkbox bind:checked={$visibleColumns.hpregen}>HP Regen</Checkbox>
      <Checkbox bind:checked={$visibleColumns.mp}>MP</Checkbox>
      <Checkbox bind:checked={$visibleColumns.mpregen}>MP Regen</Checkbox>
      <Checkbox bind:checked={$visibleColumns.parmor}>P. Armor</Checkbox>
      <Checkbox bind:checked={$visibleColumns.marmor}>M. Armor</Checkbox>
      <Checkbox bind:checked={$visibleColumns.mspeed}>MSpeed</Checkbox>
    </svelte:fragment>
  </AccordionItem>

  <AccordionItem
  styles='gap: 10px; align-items: flex-end'
  active={mobileAccordionIndex === 3}
  fn={() => toggleMobileControlAccordion(3)}>
    <svelte:fragment slot='name'>
      Shikigami Level & Table Mode
    </svelte:fragment>
    <svelte:fragment slot="content">
      <ButtonGroup>
        <Button2
        active={$currentStatValues === 'base'}
        fn={() => switchValues('base')}
        icon='ph:plant-fill'
          >
        </Button2>

        <Button2
        active={$currentStatValues === 'growth'}
        fn={() => switchValues('growth')}
        icon='uil:arrow-growth'
          >
        </Button2>
      </ButtonGroup>

      <Slider
        status={$currentLevelSliderValue + 1}
        fn={() => modifyLevel($currentLevelSliderValue)}
        bind:value={$currentLevelSliderValue}
        min='0'
        max='17'
        >Level
      </Slider>
    </svelte:fragment>
  </AccordionItem>

</Accordion>

<div class="navigation">

  <Dropdown bind:this={roleDropdownToggle} label='Role:' activeLabel={$currentRole}>
    <Button2
      active={$currentRole === 'ALL'}
      fn={() => switchRoles('ALL')}
      >
      ALL
    </Button2>
    {#each roleNames as role}
      <Button2
        active={$currentRole === role}
        fn={() => switchRoles(role)}
        >
        {role}
      </Button2>
    {/each}
  </Dropdown>

  <Dropdown label='Columns'>
    <div style="height: 5px;"></div>
    <Checkbox bind:checked={$visibleColumns.names}>Names</Checkbox>
    <Checkbox bind:checked={$visibleColumns.role}>Role</Checkbox>
    <Checkbox bind:checked={$visibleColumns.patk}>P. ATK</Checkbox>
    <Checkbox bind:checked={$visibleColumns.atkspd}>ATK SPEED</Checkbox>
    <Checkbox bind:checked={$visibleColumns.hp}>HP</Checkbox>
    <Checkbox bind:checked={$visibleColumns.hpregen}>HP Regen</Checkbox>
    <Checkbox bind:checked={$visibleColumns.mp}>MP</Checkbox>
    <Checkbox bind:checked={$visibleColumns.mpregen}>MP Regen</Checkbox>
    <Checkbox bind:checked={$visibleColumns.parmor}>P. Armor</Checkbox>
    <Checkbox bind:checked={$visibleColumns.marmor}>M. Armor</Checkbox>
    <Checkbox bind:checked={$visibleColumns.mspeed}>MSpeed</Checkbox>
    <div style="height: 5px;"></div>
  </Dropdown>

  <ButtonGroup>
    {#each [
      { name: 'base', icon: 'ph:plant-fill' },
      { name: 'growth', icon: 'uil:arrow-growth' }
    ] as btn}
      <Button2 active={$currentStatValues === btn.name} fn={() => switchValues(btn.name)} icon={btn.icon}></Button2>
    {/each}
  </ButtonGroup>

  <Slider
    status={$currentLevelSliderValue + 1}
    fn={() => modifyLevel($currentLevelSliderValue)}
    bind:value={$currentLevelSliderValue}
    min='0'
    max='17'
    >Level
  </Slider>
  
</div>

<div class="stat-sheet">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>📝</th>
        {#if $visibleColumns.role}
          <th>Role</th>
        {/if}
        {#if $visibleColumns.patk}
          <th style="cursor: pointer;" on:click={() => sortColumn('物理伤害', 'patk')}>
            <span>
              {#if $tableSorting.lastSorted === 'patk'}
                <Icon icon='fa:sort' style='font-size: 16px;' />
              {/if}
              P. ATK
            </span>
          </th>
        {/if}
        {#if $visibleColumns.atkspd}
          <th>ATK Speed</th>
        {/if}
        {#if $visibleColumns.hp}
          <th style="cursor: pointer;" on:click={() => sortColumn('生命值', 'hp')}>
            <span>
              {#if $tableSorting.lastSorted === 'hp'}
                <Icon icon='fa:sort' style='font-size: 16px;' />
              {/if}
              HP
            </span>
          </th>
        {/if}
        {#if $visibleColumns.hpregen}
          <th style="cursor: pointer;" on:click={() => sortColumn('生命恢复', 'hpregen')}>
            <span>
              {#if $tableSorting.lastSorted === 'hpregen'}
                <Icon icon='fa:sort' style='font-size: 16px;' />
              {/if}
              HP Regen
            </span>
          </th>
        {/if}
        {#if $visibleColumns.mp}
          <th style="cursor: pointer;" on:click={() => sortColumn('魔法上限', 'mp')}>
            <span>
              {#if $tableSorting.lastSorted === 'mp'}
                <Icon icon='fa:sort' style='font-size: 16px;' />
              {/if}
              MP
            </span>
          </th>
        {/if}
        {#if $visibleColumns.mpregen}
          <th style="cursor: pointer;" on:click={() => sortColumn('魔法回复', 'mpregen')}>
            <span>
              {#if $tableSorting.lastSorted === 'mpregen'}
                <Icon icon='fa:sort' style='font-size: 16px;' />
              {/if}
              MP Regen
            </span>
          </th>
        {/if}
        {#if $visibleColumns.parmor}
          <th style="cursor: pointer;" on:click={() => sortColumn('护甲', 'parmor')}>
            <span>
              {#if $tableSorting.lastSorted === 'parmor'}
                <Icon icon='fa:sort' style='font-size: 16px;' />
              {/if}
              P. Armor
            </span>
          </th>
        {/if}
        {#if $visibleColumns.marmor}
          <th style="cursor: pointer;" on:click={() => sortColumn('魔抗', 'marmor')}>
            <span>
              {#if $tableSorting.lastSorted === 'marmor'}
                <Icon icon='fa:sort' style='font-size: 16px;' />
              {/if}
              M. Armor
            </span>
          </th>
        {/if}
        {#if $visibleColumns.mspeed}
          <th style="cursor: pointer;" on:click={() => sortColumn('移动速度', 'movement')}>
            <span>
              {#if $tableSorting.lastSorted === 'movement'}
                <Icon icon='fa:sort' style='font-size: 16px;' />
              {/if}
              MSpeed
            </span>
          </th>
        {/if}
      </tr>
    </thead>
    <tbody contenteditable="false">
      {#each mainIterable as shiki, index}
        {@const shiki_roles = shiki.式神定位.map(role => roles[role]).join(', ')}
        {@const avatar = images[shiki.式神方头像]}
        {@const base = shiki.式神基础属性}
        {@const growth = shiki.式神属性成长}
        {@const attack = base.物理伤害}
        {@const attack_growth = growth.物理伤害}
        {@const attack_speed = (base.攻击速度 * (1 + base.攻速加成)).toFixed(2)}
        {@const hp = base.生命值}
        {@const hp_growth = growth.生命值}
        {@const hp_regen = base.生命恢复}
        {@const hp_regen_growth = growth.生命恢复}
        {@const mana = base.魔法上限}
        {@const mana_growth = growth.魔法上限}
        {@const mp_regen = base.魔法回复}
        {@const mp_regen_growth = growth.魔法回复}
        {@const parmor = base.护甲}
        {@const parmor_growth = growth.护甲}
        {@const marmor = base.魔抗}
        {@const marmor_growth = growth.魔抗}
        {@const mvsc_count = base.移动速度.toString().split("").length}
        {@const base_movement_speed = mvsc_count >= 3 ? base.移动速度.toString().slice(0, 2) + base.移动速度.toString().slice(1, 2) : `${base.移动速度.toString()}0`}
        <tr>
          {#if $currentStatValues === 'base'}
            <td>{index + 1}.</td>
            <td>
              <img src={avatar} alt="shikigami">
              {#if $visibleColumns.names}
                <a data-sveltekit-preload-data="tap" href="/shikigami/{shiki.式神ID}">{shiki.式神名称}</a>
              {/if}
            </td>
            {#if $visibleColumns.role}
              <td>{shiki_roles}</td>
            {/if}
            {#if $visibleColumns.patk}
              <td>{(attack + (attack_growth * $currentLevelSliderValue)).toFixed(2)}</td>
            {/if}
            {#if $visibleColumns.atkspd}
              <td>{attack_speed} <span class="unit">ATK /s</span></td>
            {/if}
            {#if $visibleColumns.hp}
              <td>{(hp + (hp_growth * $currentLevelSliderValue)).toFixed(2)} <span class="unit">HP</span></td>
            {/if}
            {#if $visibleColumns.hpregen}
              <td>+ {(hp_regen + (hp_regen_growth * $currentLevelSliderValue)).toFixed(2)} <span class="unit">HP /s</span></td>
            {/if}
            {#if $visibleColumns.mp}
              <td>{mana + (mana_growth * $currentLevelSliderValue)} <span class="unit">MP</span></td>
            {/if}
            {#if $visibleColumns.mpregen}
              <td>+ {(mp_regen + (mp_regen_growth * $currentLevelSliderValue)).toFixed()} <span class="unit">MP /s</span></td>
            {/if}
            {#if $visibleColumns.parmor}
              <td>{(parmor + (parmor_growth * $currentLevelSliderValue)).toFixed()}</td>
            {/if}
            {#if $visibleColumns.marmor}
              <td>{marmor + (marmor_growth * $currentLevelSliderValue)}</td>
            {/if}
            {#if $visibleColumns.mspeed}
              <td>{base_movement_speed}</td>
            {/if}
          {/if}
          
          {#if $currentStatValues === 'growth'}
            <td>{index + 1}.</td>
            <td>
              <img src={avatar} alt="shikigami">
              {#if $visibleColumns.names}
                <a data-sveltekit-preload-data="tap" href="/shikigami/{shiki.式神ID}">{shiki.式神名称}</a>
              {/if}
            </td>
            {#if $visibleColumns.role}
              <td>{shiki_roles}</td>
            {/if}
            {#if $visibleColumns.patk}
              <td>+ {attack_growth}  <span class="unit">/lvl</span></td>
            {/if}
            {#if $visibleColumns.atkspd}
              <td><span class="unit">need research</span></td>
            {/if}
            {#if $visibleColumns.hp}
              <td>+ {hp_growth} <span class="unit">HP /lvl</span></td>
            {/if}
            {#if $visibleColumns.hpregen}
              <td>+ {hp_regen_growth} <span class="unit">HP /lvl</span></td>
            {/if}
            {#if $visibleColumns.mp}
              <td>+ {mana_growth ? mana_growth : "n/a"} <span class="unit">MP /lvl</span></td>
            {/if}
            {#if $visibleColumns.mpregen}
              <td>+ {mp_regen_growth ? mp_regen_growth : "n/a"} <span class="unit">MP/s /lvl</span></td>
            {/if}
            {#if $visibleColumns.parmor}
              <td>+ {parmor_growth} <span class="unit"> /lvl</span></td>
            {/if}
            {#if $visibleColumns.marmor}
              <td>+ {marmor_growth} <span class="unit"> /lvl</span></td>
            {/if}
            {#if $visibleColumns.mspeed}
              <td>{base_movement_speed}</td>
            {/if}
          {/if}
        </tr>
      {/each}
    </tbody>
</table>
</div>

<Note noIcon=True text={`Number of shikigamis shown - ${mainIterable.length}.`} styles="font-size: .8rem; text-align: center;" container_margin='50px 0 0 0' />

<style>

  .unit {
    color: #ffffff88;
    font-size: .7rem;
  }

  .stat-sheet {
    overflow-x: auto;
    border-radius: 6px;
    position: relative;
  }

  .navigation {
    background-color: #36393F;
    position: sticky;
    top: 0;
    padding: 5px 0;
    z-index: 2;
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-collapse: separate;
    border-spacing: 0 10px;
  }

  thead {
    position: sticky;
    top: 0;
    background-color: #36393F;
  }

  thead th {
    user-select: none;
    padding: 10px 0;
    text-align: center;
  }

  thead th > span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  thead th:nth-child(2) {
    text-align: left;
  }

  td:first-child {
    min-width: 60px;
  }

  td {
    text-align: center;
    background-color: #3C3F46;
    font-size: .9rem;
  }

  td:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    width: 50px;
    text-align: center;
  }

  td:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  td:nth-child(3n+2) {
    background-color: rgb(58, 61, 66);
  }

  td:not(td:first-child):not(td:nth-child(2)) {
    min-width: 110px;
  }

  td:nth-child(2) {
    text-align: left;
    font-size: .8rem;
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  td > img {
    width: 40px;
  }

  tr {
    outline-offset: 3px;
  }

  tr:hover {
    /* cursor: pointer; */
    filter: brightness(110%);
    box-shadow: none;
  }

  /* tr:active {
    filter: brightness(130%);
    outline: 2px dashed #ffffff3b;
  } */

  th {
    text-align: left;
    font-size: .8rem;
  }

  @media only screen and (max-width: 500px) {
    .stat-sheet {
      padding: 0 5px;
    }
    td:first-child, th:first-child {
      display: none;
    }
  }

  @media only screen and (max-width: 800px) {
    .navigation {
      display: none;
    }
  }
</style>