<script>
  export let fn;
  export let search_value;
</script>

<div class="filter-container">
  <input on:keypress={fn} class="filter-input" type="text" placeholder="Filter" bind:value={search_value} >
</div>

<style>
  .filter-input {
  width: 400px;
  height: 36px;
  border-radius: 10px;
  border: none;
  padding: 10px 10px 10px 15px;
  background-color: #40444B;
  color: #fff;
}

.filter-input:focus {
  outline-offset: 3px;
  outline: 3px solid #ffffff5a;
}

@media only screen and (max-width: 1170px) {
  .filter-input {
    width: 90%;
  }
}
</style>