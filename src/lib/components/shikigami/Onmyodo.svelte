<script>
  export let onmyodoData;
  export let images;
  import { colorCodeRemove } from '$lib/utils/colors.js';
  import { highlight } from '$lib/utils/highlighting';
</script>

<div class="onmyodos">
  {#each onmyodoData as onmyodo}
    <div class="onmyodo">
      <div class="image-container">
        <img src="{images[onmyodo.图标路径]}" alt="onmyodo">
      </div>
      <div class="text-container">
        <p class="onmyodo-name">{onmyodo.阴阳术名称}</p>
        <p class="onmyodo-description">{@html highlight(onmyodo.阴阳术说明)}</p>
      </div>
    </div>
  {/each}
</div>

<style>

  .onmyodo-name {
    font-weight: 600;
    font-size: 1.2rem;
  }

  .onmyodo-description {
    padding: 10px 0;
    font-size: .8rem;
    line-height: 24px;
  }

  .onmyodos {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .onmyodo {
    background-color: #3C3F46;
    width: 100%;
    border-radius: 6px;
    padding: 10px;
    display: grid;
    grid-template-columns: 100px 1fr;
  }

  .image-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .image-container > img {
    width: 90px;
  }
</style>