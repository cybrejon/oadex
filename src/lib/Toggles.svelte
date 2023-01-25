<script>

  export let buttons = [];

</script>

<div class="toggles-wrapper">
  <div class="toggles-container">
    {#each buttons as btn}
      <button class="{btn.active_indicator === btn.active_value && 'active-toggle'}" on:click={btn.fn}>{btn.name}</button>
    {/each}
  </div>
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
</style>