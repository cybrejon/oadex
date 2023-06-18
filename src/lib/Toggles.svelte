<script>

import Icon from '@iconify/svelte';

  export let buttons = [];
  export let anchor_direction;
  export let toggle_icon;
  export let no_collapse = false;
  export let collapsed = false;
  export let iconOnly = false;
  export let iconOnlyToggleStyle;
  export let iconOnlyButtonStyle;
  

  let state = { isOpened: false };

  function toggle() {
    state.isOpened = !state.isOpened;
  }

  let rootClass = 'toggles-wrapper';
  let mobileTogleClass = 'toggles-mobile-wrapper';

  if (no_collapse) {
    rootClass = 'toggles-wrapper--no-collapse'
  };

  if (collapsed) {
    rootClass = 'toggles-wrapper--collapsed'
    mobileTogleClass = 'toggles-mobile-wrapper toggles-mobile-wrapper--collapsed'
  };

</script>



  <div class={rootClass}>
    <div class="toggles-container">
      {#each buttons as btn}
        {#if iconOnly}
          <button
            class="mobile-toggle-button"
            style={iconOnlyButtonStyle}
            on:click={btn.fn}
            type="button">
            <Icon
              icon="{toggle_icon}"
              style={iconOnlyToggleStyle ? iconOnlyToggleStyle : "font-size: 24px;"}
            />
          </button>
        {:else}
          <button class="{btn.active_indicator === btn.active_value && 'active-toggle'}" on:click={btn.fn}>{btn.name}</button>
        {/if}
      {/each}
    </div>
  </div>
  {#if !no_collapse}
    <div class={mobileTogleClass}>
      
      {#each buttons as btn}
        {#if btn.active_indicator === btn.active_value}
          <button class="mobile-toggle-button" on:click={toggle} type="button"><Icon icon="{toggle_icon}" style="font-size: 24px; margin-right: 5px;" />{btn.name}</button>
        {/if}
      {/each}
      
      {#if state.isOpened}
        <div class="toggles-container-mobile {anchor_direction === 'left' ? 'anchor-left' : 'anchor-right'}">
          {#each buttons as btn}
            <button class="{btn.active_indicator === btn.active_value && 'active-toggle'}" on:click={btn.fn} on:click={toggle}>{btn.name}</button>
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
  transition: .2s;
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
  background-color: #36393F;
  box-shadow: 0 8px #282A2F;
  border: 4px solid #282A2F;
  position: absolute;
  top: 45px;
  transition: .2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 10px;
  border-radius: 20px;
  z-index: 99999;
}

button {
  background-color: #565A60;
  font-family: 'Montserrat', sans-serif;
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
  box-shadow: 0 3px #282A2F;
    border-color: #ffffff31;
  transform: translateY(-3px);
}

button:active {
  box-shadow: none;
  outline-offset: 2px;
  outline: 2px solid #ffffff3b;
  outline-style: dashed;
  transform: translateY(0);
}

.active-toggle {
  background-color: #CDFE05;
  color: #282A2F;
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