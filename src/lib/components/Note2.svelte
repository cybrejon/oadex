<script>
  export let headerText;
  import Icon from "@iconify/svelte";
  export let icon = 'tabler:bulb-filled';
</script>

<div class="note">
  {#if headerText}
    <div class="note-header">
      <Icon {icon} style='font-size: 30px;' /><p>{headerText}</p>
    </div>
  {/if}
  <p class="text"><slot /></p>
</div>

<style>
  .note {
    background-color: #36393F;
    border-radius: 12px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  .note-header {
    column-gap: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .note-header > p {
    font-weight: 800;
  }

  .text {
    font-size: .9rem;
    line-height: 24px;
  }
</style>