<script>
  
  // import components
  import { useLazyImage as lazyImage } from 'svelte-lazy-image';
  import Container from "$lib/components/shikigami/Container.svelte";
  import Button from "$lib/components/Button.svelte";
  let { area_name, data, link } = $props();

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
    filter: drop-shadow(10px 10px #36393F);
    border-radius: 5px;
    width: 100%;
  }
</style>