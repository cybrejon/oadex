<script>
  import Toggles from '$lib/Toggles.svelte';

  import { fade } from 'svelte/transition';

  let isOpen = false;

  function toggle() {
    isOpen = !isOpen;
  };
</script>

<div class="accordion">
  <Toggles
    iconOnly=true
    iconOnlyButtonStyle="border-radius: 20px; padding: 10px; border: 3px solid #64676D; box-shadow: 0 8px #282A2F;"
    iconOnlyToggleStyle="font-size: 40px;"
    no_collapse=true
    toggle_icon="icon-park-outline:setting-config"
    anchor_direction="left"
    buttons={[
      { name: "a", active_indicator: 'a', active_value: 'a', fn: toggle },
    ]}
  />
  {#if isOpen}
    <div transition:fade={{ duration: 300 }} class="pop-up">
      <slot />
    </div>
  {/if}
</div>

<style>
  .accordion {
    width: 100vw;
    display: none;
    position: fixed;
    bottom: 90px;
    right: 10px;
    z-index: 10;
  }
  .pop-up {
    box-shadow: 0 8px #282a2f;
    min-width: 300px;
    overflow: hidden;
    position: absolute;
    bottom: 80px;
    right: 0;
    background-color: #3d4147;
    border-radius: 12px;
    border: 2px solid rgba(255, 255, 255, 0.189);
  }

  @media only screen and (max-width: 800px) {
    .accordion {
      display: block;
    }
  }
</style>