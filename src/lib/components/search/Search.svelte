<script>
  export let searchIndex;

  import Fuse from 'fuse.js';
  import Icon from '@iconify/svelte';
  import Toggles from '$lib/Toggles.svelte';

  const fuse = new Fuse(searchIndex, {
    keys: ['name', 'keywords', 'id']
  });

  let searchValue;

  let results_r = [];
  let results = [];
  let modalInputElement;
  let currentListPosition = -1;
  let searchModalElement;
  let resultAnchorElement;
  let resultsList;

  function startSearch(e) {
    if (!searchValue || e.key == 'Enter') return;

    if (searchValue.includes('/')) {
      searchValue = '';
      modalInputElement.value = '';
    } else {
      results_r = fuse.search(searchValue);
      results = results_r.slice(0, 7);
    }
    modalInputElement.focus();
    currentListPosition = -1;
  }
  
  let isSearchOpen = false;
  function openSearch() {
    isSearchOpen = !isSearchOpen;
    searchModalElement.showModal();
  }

  function openSearchByKeyboard(e) {
    if (e.code != "Slash") return;
    if (isSearchOpen) {
      searchModalElement.close();
    } else {
      searchModalElement.showModal();
    }
    isSearchOpen = !isSearchOpen;
    searchValue = '';
  }

  function closeModal() {
    searchModalElement.close();
    isSearchOpen = !isSearchOpen;
    searchValue = '';
  }

  // do this so that pressing escape closes the search and also sets
  // the isSearchOpen to false so you dont have to press slash twice when
  // it was closed via escape (as that does not set isSearchOpen to false)
  function setIsSearchOpen2False(e) {
    if (e.code != 'Escape') return;
    isSearchOpen = false;
  }

  function navigateResults(e) {

    let resultsListItems = resultsList.children;

    if (e.key == 'ArrowDown' && currentListPosition < results.length - 1) {
        e.preventDefault();
        currentListPosition += 1;
        resultsListItems[currentListPosition].focus();
    } else if (e.key == 'ArrowUp') {
      e.preventDefault();
      if (currentListPosition > 0) {
        currentListPosition -= 1;
        resultsListItems[currentListPosition].focus();
      } else if (currentListPosition >= 0) {
        modalInputElement.focus();
        currentListPosition -= 1;
      }
    }

    if (e.key == 'Enter' && currentListPosition == -1) {
      currentListPosition += 1;
      resultsListItems[currentListPosition].focus();
      resultsListItems[currentListPosition].click();
    }

  }

  function anchorMouseOverFocus() {
    resultAnchorElement.focus();
  }
</script>

<svelte:window
  on:keydown={(e) => openSearchByKeyboard(e)}
  on:keydown={(e) => setIsSearchOpen2False(e)}
  on:keydown={(e) => navigateResults(e)}
  on:keypress={(e) => startSearch(e)}
/>

<div class="search-toggle-container">
  <div class="search-icon-container">
    <Icon icon='iconamoon:search-fill' style='font-size: 18px;' />
  </div>
  <button class="search-modal-toggle" type="button" on:click={openSearch}> <span class="search-toggle-search-text">Search</span><span class='hint hint--toggle'>Press <span class="key-code">/</span> to open search</span></button>
</div>

<dialog bind:this={searchModalElement}>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div id="nav-overlay" on:click={closeModal} class="overlay"></div>

  <div class="results">

    <div class="modal-searchbar-container">
      <div class="modal-searchbar-icon-container">
        <Icon icon='iconamoon:search-fill' style='font-size: 22px; color: #ffffffe6;' />
      </div>
      <input placeholder="Search" type="text" bind:value={searchValue} bind:this={modalInputElement} />
    </div>

    <p class="hint">Press <span class="key-code">Escape</span> or <span class="key-code">/</span> to close search</p>

    <div class="results-list" bind:this={resultsList}>
      {#if results}
        {#each results as result}

          <a href={result.item.path} bind:this={resultAnchorElement} data-sveltekit-reload>
            <div class="result">
              <div class="result-icon-container">
                <Icon icon='charm:arrow-right' style='font-size: 22px; color: #ffffffe6;' />
              </div>
              <div class="result-text-container">
                <p class="result-name">{result.item.name}</p>
                <p class="result-type">{result.item.type}</p>
              </div>
            </div>
          </a>

        {/each}
      {/if}
    </div>

    <div class="close-button-wrapper">
      <Toggles
        iconOnly=true
        iconOnlyButtonStyle="padding: 10px; box-shadow: 0 8px #282a2f; border: 2px solid rgba(255, 255, 255, 0.189);"
        iconOnlyToggleStyle="font-size: 30px;"
        no_collapse=true
        toggle_icon="ic:round-close"
        anchor_direction="left"
        buttons={[
          { name: "a", active_indicator: 'a', active_value: 'a', fn: () => closeModal() },
        ]}
      />
    </div>

  </div>

</dialog>

<style>

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .close-button-wrapper {
    position: absolute;
    top: 0;
    right: -70px;
  }

  .search-toggle-container {
    position: relative;
  }

  .search-icon-container {
    pointer-events: none;
    position: absolute;
    top: 12px;
    left: 20px;
  }

  .search-modal-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.118);
    border: 2px solid rgba(255, 255, 255, 0.189);
    box-shadow: 0 8px #282a2f;
    border-radius: 10px;
    text-decoration: none;
    color: #ffffffad;
    padding: 10px 20px 8px 50px;
    width: 400px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-weight: 800;
    transition: .1s;
    font-size: 1rem;
    cursor: pointer;
  }

  .hint {
    color: #cacacaad;
    font-weight: 600;
    font-size: .8rem;
  }

  .key-code {
    color: #fff;
  }

  dialog {
    background-color: transparent;
    outline: none;
    border: none;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  dialog::backdrop {
    background-color: #0000003d;
    backdrop-filter: blur(5px);
  }

  .results {
    position: relative;
    display: flex;
    width: 600px;
    margin: 50px auto 0 auto;
    flex-direction: column;
    row-gap: 30px;
    background-color: #40444B;
    padding: 30px;
    border-radius: 12px;
    border: 2px solid rgba(255, 255, 255, 0.189);
    box-shadow: 0 8px #282a2f;
  }

  .results-list {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  a {
    border-radius: 10px;
    overflow: hidden;
    outline-offset: 3px;
    background-color: #3C3F46;
    color: #aaaaaa;
  }

  a:focus {
    outline: 3px solid #ffffff5a;
    box-shadow: 0 15px 15px #282a2fa6;
    z-index: 2;
    background-color: #555963;
    color: #f1f1f1;
  }

  a:hover {
    text-decoration: none;
    z-index: 2;
    background-color: #555963;
    color: #f1f1f1;
  }

  .result {
    padding: 15px 0;
    display: grid;
    grid-template-columns: 70px 1fr;
  }

  .result-icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .result-name {
    font-weight: 600;
    margin-bottom: 5px;
  }

  .result-type {
    font-size: .8rem;
  }

  .modal-searchbar-container {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
  }

  .modal-searchbar-icon-container {
    pointer-events: none;
    position: absolute;
    top: 18px;
    left: 25px;
  }

  input {
    font-size: 1rem;
    border: none;
    width: 100%;
    background-color: #32343a;
    color: #fff;
    padding: 20px 10px 20px 70px;
    border-radius: 10px;
    outline: 3px solid transparent;
  }

  input:focus {
    outline-offset: 3px;
    outline: 3px solid #ffffff5a;
    box-shadow: 0 15px 15px #282a2fa6;
    background-color: #555963;
  }

  @media only screen and (width < 1040px) {
    .search-modal-toggle {
      width: 200px;
    }

    .hint--toggle {
      display: none;
    }
  }

  @media only screen and (width < 801px) {
    .modal-searchbar-container {
      width: 75%;
    }

    dialog {
      max-width: 100vw;
      max-height: 100vh;
    }

    .results {
      border: none;
      border-radius: 0;
      margin: 0;
      width: 100vw;
      height: 100vh;
    }

    .close-button-wrapper {
      top: 28px;
      right: 20px;
    }

    .search-toggle-search-text {
      display: none;
    }

    .search-modal-toggle {
      padding: 0;
      width: 48px;
      height: 48px;
    }

    .search-icon-container {
      top: 15px;
      left: 15px;
    }

    .hint--toggle {
      display: none;
    }
  }
</style>