<script>
  import { handlers } from 'svelte/legacy';

  import Icon from "@iconify/svelte";

  /**
   * @typedef {Object} Props
   * @property {any} [buttons]
   * @property {any} anchor_direction
   * @property {any} toggle_icon
   * @property {boolean} [no_collapse]
   * @property {boolean} [collapsed]
   * @property {boolean} [iconOnly]
   * @property {any} iconOnlyToggleStyle
   * @property {any} iconOnlyButtonStyle
   */

  /** @type {Props} */
  let {
    buttons = [],
    anchor_direction,
    toggle_icon,
    no_collapse = false,
    collapsed = false,
    iconOnly = false,
    iconOnlyToggleStyle,
    iconOnlyButtonStyle
  } = $props();

  let element = $state({ isOpened: false });

  function toggle() {
    element.isOpened = !element.isOpened;
  }

  let rootClass = $state("toggles-wrapper");
  let mobileTogleClass = $state("toggles-mobile-wrapper");

  if (no_collapse) {
    rootClass = "toggles-wrapper--no-collapse";
  }

  if (collapsed) {
    rootClass = "toggles-wrapper--collapsed";
    mobileTogleClass =
      "toggles-mobile-wrapper toggles-mobile-wrapper--collapsed";
  }
</script>

<div class={rootClass}>
  <div class="toggles-container">
    {#each buttons as btn}
      {#if iconOnly}
        <button
          class="mobile-toggle-button"
          style={iconOnlyButtonStyle}
          onclick={btn.fn}
          type="button"
        >
          <Icon
            icon={toggle_icon}
            style={iconOnlyToggleStyle
              ? iconOnlyToggleStyle
              : "font-size: 24px;"}
          />
        </button>
      {:else}
        <button
          class={btn.active_indicator === btn.active_value && "active-toggle"}
          onclick={btn.fn}>{btn.name}</button
        >
      {/if}
    {/each}
  </div>
</div>
{#if !no_collapse}
  <div class={mobileTogleClass}>
    {#each buttons as btn}
      {#if btn.active_indicator === btn.active_value}
        <button class="mobile-toggle-button" onclick={toggle} type="button"
          ><Icon
            icon={toggle_icon}
            style="font-size: 24px; margin-right: 5px;"
          />{btn.name}</button
        >
      {/if}
    {/each}

    {#if element.isOpened}
      <div
        class="toggles-container-mobile {anchor_direction === 'left'
          ? 'anchor-left'
          : 'anchor-right'}"
      >
        {#each buttons as btn}
          <button
            class={btn.active_indicator === btn.active_value && "active-toggle"}
            onclick={handlers(btn.fn, toggle)}>{btn.name}</button
          >
        {/each}
      </div>
    {/if}
  </div>
{/if}

<style>
  .toggles-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .toggles-wrapper--no-collapse {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .toggles-wrapper--collapsed {
    display: none;
  }

  .toggles-container {
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    border-radius: 10px;
  }

  .toggles-mobile-wrapper {
    display: none;
    position: relative;
  }

  .toggles-mobile-wrapper--collapsed {
    display: block;
  }

  .mobile-toggle-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 15px;
  }

  .anchor-left {
    left: 0;
  }

  .anchor-right {
    right: 0;
  }

  .toggles-container-mobile {
    min-width: 90px;
    padding: 10px;
    background-color: #36393f;
    box-shadow: 0 8px #282a2f;
    border: 4px solid #282a2f;
    position: absolute;
    top: 45px;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 10px;
    border-radius: 20px;
    z-index: 99999;
  }

  button {
    background-color: #565a60;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    color: #ffffffad;
    border-radius: 6px;
    padding: 11px 15px;
    border: none;
  }

  .toggles-container-mobile button {
    width: 100%;
  }

  button:hover {
    box-shadow: 0 3px #282a2f;
    border-color: #ffffff31;
    transform: translateY(-3px);
  }

  button:active {
    box-shadow: none;
    outline-offset: 2px;
    outline: 2px dashed #ffffff3b;
    transform: translateY(0);
  }

  .active-toggle {
    background-color: #cdfe05;
    color: #282a2f;
  }

  @media only screen and (max-width: 620px) {
    .toggles-wrapper {
      display: none;
    }

    .toggles-mobile-wrapper {
      display: block;
      position: relative;
    }

    .toggles-mobile-wrapper button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
