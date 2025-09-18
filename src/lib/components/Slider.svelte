<script>
  /**
   * @typedef {Object} Props
   * @property {any} value
   * @property {any} max
   * @property {any} min
   * @property {any} fn
   * @property {any} status
   * @property {any} styles
   * @property {boolean} [disabled]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let {
    value = $bindable(),
    max,
    min,
    fn,
    status,
    styles,
    disabled = false,
    children
  } = $props();
</script>

<div class="slider" style={styles}>
  <p>{@render children?.()}</p>
  <input {disabled} onchange={fn} type="range" bind:value {min} {max} id="range">
  <p class="status">{status}</p>
</div>

<style>

  .status {
    min-width: 20px;
    text-align: center;
  }

  .slider {
    user-select: none;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background-color: #2E3035;
    padding: 15px 15px 15px 20px;
    border-radius: 10px;
    font-size: .8rem;
    font-weight: 600;
    min-width: 200px;
  }

  input {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    border-radius: 100px;
    width: 100%; /* Full-width */
    height: 16px; /* Specified height */
    background: #565A60; /* Grey background */
    outline: none; /* Remove outline */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    border-radius: 100px;
    width: 36px; /* Set a specific slider handle width */
    height: 36px; /* Slider handle height */
    background: #CDFE05; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }

  input::-moz-range-thumb {
    width: 36px; /* Set a specific slider handle width */
    height: 36px; /* Slider handle height */
    background: #CDFE05; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }

  input:disabled {
    opacity: .5;
    filter: grayscale(1);
  }
</style>