<script>
  export let title;
  export let content = [];
</script>

<div class="card">
  <p class="card-title">{title}</p>
  <ul class="card-ul">
    {#each content as item}
      {#if item}
        <li class="card-li">{item}</li>
      {/if}
    {/each}
    <slot></slot>
  </ul>
</div>

<style>
  .card {
    background-color: #3C3F46;
    border-radius: 6px;
    padding: 15px;
  }

  .card-ul {
    margin-top: 10px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  .card-li {
    font-size: .9rem;
  }

  .card-title {
    font-weight: 800;
  }
</style>