<script>

  import { LazyImage } from 'svelte-lazy-image';

  export let slug;
  export let src;
  export let shiki_name;

</script>

<a href="/shikigami/{slug}" class="shiki-card-anchor">
  <div class="shiki-card">
    <div class="sc-image-container">
      <!-- <img class="shikigami-image" alt="shikigami portrait" src="{images[shikiga_data[shiki].式神全身像]}"> -->
      <LazyImage class="shikigami-image" alt="shikigami portrait" src="{src}"/>
    </div>
    <div class="sc-text-container">
      <p class="shikigami-name">{shiki_name}</p>
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

.shiki-card-anchor {
  text-decoration: none;
}

.shiki-card {
  overflow: hidden;
  border: 4px solid #585A5F;
  background-color: #42444A;
  box-shadow: 0 8px #282A2F;
  border-radius: 10px;
  width: 100px;
  height: 140px;
  transition: .1s;
  animation: fade .3s;
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
  justify-content: center;
  align-items: center;
  height: 45px;
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