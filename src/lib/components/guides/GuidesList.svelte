<script>

  import Icon from '@iconify/svelte';
  import { page } from '$app/state'
  let { guide_list } = $props();
  let shiki_id = page.url.pathname.slice(11);
</script>

<div class="list">
  {#if guide_list}
    {#each guide_list.list as guide}
      <a href={`${shiki_id}/guide/${guide.file_name.replace('.json', '')}?shikigami_name=${guide.shikigami_name}`}>
        <div class="guide">
          <div class="guide--title-container">
            <Icon icon='lets-icons:book-fill' style='font-size: 1.3rem;' />
            <p>{guide.title}</p>
          </div>
        </div>
      </a>
    {/each}
  {:else}
    <p>No guides for this Shikigami yet. Join our <a href="http://discord.gg/KGsaAet">Discord</a> server to submit a guide.</p>
  {/if}
  
</div>

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    & a {
      text-decoration: none;
      & .guide {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        background-color: #3C3F46;
        padding: 15px;
        justify-content: space-between;
        align-items: center;
        border-radius: 6px;

        & .guide--title-container {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        & .guide--author-container {
          display: flex;
          align-items: center;
          color: #ffffff9d;
          gap: 6px;
        }

        &:hover {
          outline: 2px solid #ffffff31;
          background-color: #454850;
        }
        &:active {
          outline-color: #D8FA00;
          background-color: #3C3F46;
        }
      }
    }
  }
</style>