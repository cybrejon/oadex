<script>
  import Container from '$lib/components/shikigami/Container.svelte';
  export let area_name;
</script>

<Container area_name={area_name}>
  <slot></slot>
</Container>