<script>
  import Icon from "@iconify/svelte";
  let is_visible = $state(true);
</script>

<div class="container" class:visible={is_visible}>
  <Icon icon="mingcute:alert-line" />
  <p>
    OADex is experiencing problems. Please expect broken features and slow
    performance.
  </p>
  <button onclick={() => (is_visible = false)} type="button">Dismiss.</button>
</div>

<style>
  .container {
    display: none;
    justify-content: center;
    align-items: center;
    padding: 2rem 0 1rem;
    gap: 0.5rem;
    flex-wrap: wrap;
    font-size: 0.9rem;
  }

  .visible {
    display: flex;
  }

  button {
    border: none;
    background-color: transparent;
    font-size: inherit;
    color: #cdfe05;
    cursor: pointer;
  }

  button:hover {
    text-decoration: underline;
  }
</style>
