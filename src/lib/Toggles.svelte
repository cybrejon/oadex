<script>

import Icon from '@iconify/svelte';

  export let buttons = [];

  export let anchor_direction;

  export let toggle_icon;

  let state = { isOpened: false };

  function toggle() {
    state.isOpened = !state.isOpened;
  }

</script>

  <div class="toggles-wrapper">
    <div class="toggles-container">
      {#each buttons as btn}
        <button class="{btn.active_indicator === btn.active_value && 'active-toggle'}" on:click={btn.fn}>{btn.name}</button>
      {/each}
    </div>
  </div>
  <div class="toggles-mobile-wrapper">
    <button on:click={toggle} type="button"><Icon icon="{toggle_icon}" style="font-size: 24px;" /></button>
    {#if state.isOpened}
      <div class="toggles-container-mobile {anchor_direction === 'left' ? 'anchor-left' : 'anchor-right'}">
        {#each buttons as btn}
          <button class="{btn.active_indicator === btn.active_value && 'active-toggle'}" on:click={btn.fn}>{btn.name}</button>
        {/each}
      </div>
    {/if}
  </div>
    



<style>
.toggles-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  top: 55px;
  transition: .2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 10px;
  border-radius: 20px;
}

button {
  background-color: rgba(255, 255, 255, 0.118);
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  color: #ffffffad;
  border-radius: 6px;
  padding: 7px 7px 5px 7px;
  border: 3px solid transparent;
  transition: .1s;
}

.toggles-container-mobile button {
  width: 100%;
}

button:hover {
  background-color: #ffffff46;
  border-color: #ffffff31;
}

button:active {
  background-color: #ccfe0533;
  border-color: transparent;
  color: #CDFE05;
  /* transform: scale(90%); */
}

.active-toggle {
  background-color: #CDFE05;
  color: #282A2F;
  pointer-events: none;
}

@media only screen and (max-width: 620px) {
  .toggles-wrapper {
    display: none;
  }
  .toggles-mobile-wrapper {
    display: block;
    position: relative;
  }
}
</style>