<script>
  import Container from "$lib/components/shikigami/Container.svelte";
  import Button2 from '$lib/components/Button2.svelte';
  import ButtonGroup from '$lib/components/ButtonGroup.svelte';
  import '$assets/github_markdown.css';
  let { data } = $props();
</script>

<ButtonGroup area_name="page-controls" styles="justify-content: flex-start; flex-wrap: wrap; margin-bottom: 20px;">
  <Button2 icon='ion:arrow-back' type="button" fn={() => history.back()} />
  <!-- <Button2 type="button">Submit Guide</Button2> -->
</ButtonGroup>

<Container styles="padding: 30px 15px;">
  <article class="markdown-container markdown-body">

    <h1 class="title">{data.guide_data.title}</h1>

    {@html data.markdown}

  </article>
</Container>

<style>
  .title {
    margin-bottom: 15px;
  }

  :global(.markdown-container) {
    & > p {
      margin: 5px 0 10px 0;
    }
  }
</style>