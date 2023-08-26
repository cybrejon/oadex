<script>

  import { LazyImage } from 'svelte-lazy-image';

  import placeholderImage from '$lib/assets/plat.png';

  export let src;
  export let itemName;
  export let itemPrice;
  export let fn;
  export let utilFn;
  export let activeItem;

</script>

<a class="item-anchor" on:click={fn} on:click={utilFn && utilFn} href={`/items?i=${itemName}`} data-sveltekit-noscroll data-sveltekit-preload-data="tap">
  <div class="item-card" class:item-card--active={activeItem == itemName}>
    <div class="sc-image-container">
      <LazyImage class="ic-item-image" alt="shikigami portrait" src="{src}" placeholder={placeholderImage} />
    </div>
    <div class="sc-text-container">
      <p class="ic-item-name">{itemName}</p>
      <p class="ic-item-price">{itemPrice}</p>
    </div>
  </div>
</a>

<style>

@keyframes fade {
  from {
    opacity: .5;
    filter: brightness(.8);
    box-shadow: 0 0 #282A2F;
  } to {
    opacity: 1;
    filter: brightness(1);
    box-shadow: 0 8px #282A2F;
  }
}

.item-anchor {
  text-decoration: none;
  cursor: default;
}

.item-card {
  display: grid;
  grid-template-rows: 1fr 1fr;
  position: relative;
  overflow: hidden;
  border: 4px solid #585A5F;
  background-color: #42444A;
  box-shadow: 0 8px #282A2F;
  border-radius: 10px;
  width: 100px;
  height: 150px;
  transition: .1s;
  animation: fade .3s;
}

.item-card:hover {
  background-color: #585A5F;
  border-color: #73757c;
}

.item-card--active {
  transform: translateY(8px);
  box-shadow: none;
  border-color: transparent;
  background-color: #282A2F;
}

.item-card--active:hover {
  background-color: #282A2F;
  border-color: transparent;
}

.item-card:active {
  transform: translateY(8px);
  box-shadow: none;
  border-color: transparent;
  background-color: #282A2F;
}

.sc-image-container {
  transition: .2s;
  padding: 5px 5px 0 5px;
}

.sc-text-container {
  padding-bottom: 5px;
  display: flex;
  row-gap: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.ic-item-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80px;
  font-weight: 600;
  color: #fff;
  font-size: .7rem;
  text-align: center;
}

.ic-item-price {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80px;
  color: rgb(255, 211, 128);
  font-weight: 600;
  font-size: .7rem;
  text-align: center;
}

</style>