<script>
  export let title;
  export let content = [];
</script>

<div class="card">
  {#if title}
    <p class="card-title">{title}</p>
  {/if}
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
    list-style-type: none;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  .card-li {
    font-size: .9rem;
  }

  .card-title {
    margin-bottom: 10px;
    font-weight: 800;
  }
</style>