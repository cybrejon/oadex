<script>
  
  // import components
  import { useLazyImage as lazyImage } from 'svelte-lazy-image';
  import Container from "$lib/components/shikigami/Container.svelte";
  import Button from "$lib/components/Button.svelte";
  export let area_name;
export let data;
  export let link;

  let {
    image_url: image_url,
    image_alt: image_alt
  } = data;

</script>

<Container area_name={area_name} >
  <img class="shiki-2d-art" alt={image_alt} src={image_url} use:lazyImage={{ threshold: 0.5 }}>
  <Button button_type="anchor" link={link}>OPEN</Button>
</Container>

<style>
  .shiki-2d-art {
    background-color: #3C3F46;
    border-radius: 5px;
    width: 100%;
  }
</style>