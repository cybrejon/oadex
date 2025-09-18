<script>
  let { button_type, link, children } = $props();
</script>

{#if button_type === 'anchor'}
  <a rel="noreferrer" target="_blank" href={link} class="btn">{@render children?.()}</a>
{:else}
  <button class="btn">{@render children?.()}</button>
{/if}


<style>
  .btn {
    text-decoration: none;
    text-align: center; /* for anchor tag */
    border: none;
    font-size: 1rem;
    padding: 6px 10px 4px 10px;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
    background-color: transparent;
    font-weight: bold;
    color: #8b8e95;
    transition: .1s;
  }
  .btn:hover {
    background-color: #585A5F;
    color: #c0c2c6;
  }
  .btn:active {
    background-color: #CDFE05;
    color: #282A2F;
  }
</style>