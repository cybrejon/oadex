<script>
  import Icon from "@iconify/svelte";
  import { slide } from "svelte/transition";
  import { quintOut } from 'svelte/easing';
  let {
    active,
    fn,
    styles,
    name,
    content
  } = $props();
</script>

<div class="accordion-item">
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="toggle" onclick={fn}>
    <Icon icon={active ? "akar-icons:radio-fill" : "akar-icons:radio"} style='font-size: 16px' />
    <p class="toggle-text">{@render name?.()}</p>
  </div>
  {#if active}
    <div transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }} class="accordion-item-content" style={styles}>
      {@render content?.()}
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