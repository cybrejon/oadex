<script>

  import { LazyImage } from 'svelte-lazy-image';

  export let slug;
  export let src;
  export let shiki_name;
  export let new_shiki;
  export let in_rotation;
  export let dtype;

  let isLoading_local = false;
  const loading = () => () => {
    isLoading_local = !isLoading_local;
  };
 
  import placeholderImage from '$lib/assets/plat.png';
  import Icon from '@iconify/svelte';

</script>

<a on:click={loading()} href="/shikigami/{slug}" class="shiki-card-anchor" data-sveltekit-preload-data="tap">
  <div class="shiki-card">
    <div class="sc-image-container">
      <!-- <img class="shikigami-image" alt="shikigami portrait" src="{images[shikiga_data[shiki].式神全身像]}"> -->
      <LazyImage
        class="shikigami-image"
        alt="shikigami portrait"
        src="{src}"
        placeholder={placeholderImage}
      />
    </div>
    <div class="sc-text-container">
      <p class="shikigami-name">{shiki_name}</p>
      <!-- <div class="shiki-legends-container">
        <div class="legend">
          <Icon icon="iconamoon:comment-dots-fill" style="font-size: 16px;" />
          <span class="disqus-comment-count" data-disqus-identifier="{slug}">nc</span>
        </div>
      </div> -->
    </div>

    <!-- TAGS -->
    {#if new_shiki}
      <p class="tag new-tag">RECENT</p>
    {/if}
    {#if in_rotation}
      <p class="tag free-tag">FREE</p>
    {/if}

    <!-- DAMAGE TYPES -->
    {#if dtype[0].damage_types.includes('physical damage') && dtype[0].damage_types.includes('magic damage') && !dtype[0].damage_types.includes('true damage')}
      <p class="tag damage-physical-magic-tag">P + M</p>
    {:else if dtype[0].damage_types.includes('physical damage') && dtype[0].damage_types.includes('true damage') && !dtype[0].damage_types.includes('magic damage')}
      <p class="tag damage-physical-true-tag">P + T</p>
    {:else if dtype[0].damage_types.includes('magic damage') && dtype[0].damage_types.includes('true damage') && !dtype[0].damage_types.includes('physical damage')}
      <p class="tag damage-magic-true-tag">M + T</p>
    {:else if dtype[0].damage_types.includes('physical damage') && !dtype[0].damage_types.includes('true damage')}
      <p class="tag damage-physical-tag">P</p>
    {:else if dtype[0].damage_types.includes('magic damage') && !dtype[0].damage_types.includes('true damage')}
      <p class="tag damage-magic-tag">M</p>
    {:else if dtype[0].damage_types.length === 3}
      <p class="tag damage-all-tag">P + M + T</p>
    {/if}

    {#if isLoading_local}
      <div class="loading">
        <Icon icon="svg-spinners:blocks-shuffle-2" style="font-size: 24px;" />
      </div>
    {/if}
  </div>
</a>

<style>
  
  /* .shiki-legends-container {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
  }

  .legend {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2px;
  }

  .legend > span {
    font-weight: 600;
    font-size: .7rem;
  }
 */
.loading {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #42444A;
  padding: 5px 5px 3px 5px;
  border-radius: 6px;
}

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

.shiki-card-anchor {
  text-decoration: none;
}

.shiki-card {
  position: relative;
  overflow: hidden;
  border: 4px solid #585A5F;
  background-color: #42444A;
  box-shadow: 0 8px #282A2F;
  border-radius: 10px;
  width: 100px;
  height: 160px;
  transition: .1s;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}

.tag {
  text-align: center;
  font-weight: 800;
  font-size: .6rem;
  position: absolute;
  padding: 2px 5px 2px 5px;
  border-radius: 3px;
}

.new-tag {
  top: 10px;
  left: 10px;
  background-color: red;
  color: #fff;
}

.free-tag {
  bottom: 39px;
  right: 5px;
  left: 5px;
  background-color: #CDFE05;
  color: #282A2F;
}

.damage-physical-magic-tag {
  bottom: 5px;
  left: 5px;
  background-image: linear-gradient(to right, #fe0505, #b705fe);
  color: #ffffff;
}
.damage-all-tag {
  bottom: 5px;
  left: 5px;
  background-image: linear-gradient(to right, #fe0505, #b705fe, #05d9fe);
  color: #ffffff;
}
.damage-physical-true-tag {
  bottom: 5px;
  left: 5px;
  background-image: linear-gradient(to right, #fe0505, #05d9fe);
  color: #ffffff;
}
.damage-magic-true-tag {
  bottom: 5px;
  left: 5px;
  background-image: linear-gradient(to right, #b705fe, #05d9fe);
  color: #ffffff;
}
.damage-physical-tag {
  bottom: 5px;
  left: 5px;
  background-color: #fe0505;
  color: #ffffff;
}
.damage-magic-tag {
  bottom: 5px;
  left: 5px;
  background-color: #b705fe;
  color: #ffffff;
}

.shiki-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 13px #282A2F;
  background-color: #585A5F;
  border-color: #73757c;
}

.shiki-card:active {
  transform: translateY(8px);
  box-shadow: none;
  border-color: transparent;
  background-color: #585A5F;
}

.sc-image-container {
  transition: .2s;
  padding: 5px 5px 0 5px;
}

.sc-text-container {
  display: flex;
  row-gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.shikigami-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80px;
  font-weight: 900;
  color: #fff;
  font-size: .8rem;
  text-align: center;
}

</style>