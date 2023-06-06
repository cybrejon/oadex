<script>
  export let fn;
  export let search_value;

  export let clearFunction;

  import Icon from '@iconify/svelte';
</script>

<div class="filter-container">
  <input on:keypress={fn} class="filter-input" type="text" placeholder="Filter" bind:value={search_value} >
  {#if search_value}
    <button on:click={clearFunction} type="button"><Icon icon="ic:round-clear" style="font-size: 24px;" /></button>
  {/if}
</div>

<style>

.filter-container {
  position: relative;
}

.filter-input {
  width: 320px;
  height: 36px;
  border-radius: 10px;
  border: none;
  padding: 10px 10px 10px 15px;
  background-color: #40444B;
  color: #fff;
}

button {
  background-color: transparent;
  padding: 3px 10px 0 10px;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  color: rgba(255, 255, 255, 0.4);
}

button:hover {
  color: rgba(255, 255, 255, 0.7);
}

button:active {
  color: rgba(255, 255, 255, 1);
}

.filter-input:focus {
  outline-offset: 3px;
  outline: 3px solid #ffffff5a;
}

@media only screen and (max-width: 1170px) {
  .filter-input {
    width: 100%;
  }
}
</style>