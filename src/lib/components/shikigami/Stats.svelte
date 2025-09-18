<script>
  import Container from '$lib/components/shikigami/Container.svelte';
  let { area_name, children } = $props();
</script>

<Container area_name={area_name}>
  {@render children?.()}
</Container>