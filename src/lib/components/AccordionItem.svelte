<script>
  import Icon from "@iconify/svelte";
  import { slide } from "svelte/transition";
  import { quintOut } from 'svelte/easing';
  export let active;
  export let fn;
  export let styles;
</script>

<div class="accordion-item">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="toggle" on:click={fn}>
    <Icon icon={active ? "akar-icons:radio-fill" : "akar-icons:radio"} style='font-size: 16px' />
    <p class="toggle-text"><slot name="name" /></p>
  </div>
  {#if active}
    <div transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }} class="accordion-item-content" style={styles}>
      <slot name="content" />
    </div>
  {/if}
</div>

<style>
  .accordion-item {
    display: grid;
    grid-template-rows: auto auto;
  }
  .toggle {
    cursor: pointer;
    padding: 25px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    background-color: #36393F;
  }
  .toggle-text {
    font-size: .8rem;
    font-weight: 600;
  }
  .accordion-item-content {
    padding: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
</style>