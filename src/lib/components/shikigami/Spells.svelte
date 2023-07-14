<script>
  export let spellData;
  export let images;
  import { colorCodeRemove } from '$lib/utils/colors.js';
</script>

<div class="spells">
  {#each spellData as spell}
    <div class="spell">
      <div class="image-container">
        <img src="{images[spell.图标路径]}" alt="spell">
      </div>
      <div class="text-container">
        <p class="spell-name">{spell.灵咒名称}</p>
        <p class="spell-description">{colorCodeRemove(spell.灵咒技能描述)}</p>
      </div>
    </div>
  {/each}
</div>

<style>

  .spell-name {
    font-weight: 600;
    font-size: 1.2rem;
  }

  .spell-description {
    padding: 10px 0;
    font-size: .8rem;
    line-height: 24px;
  }

  .spells {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .spell {
    background-color: #3C3F46;
    width: 100%;
    border-radius: 6px;
    padding: 10px;
    display: grid;
    grid-template-columns: 100px 1fr;
  }

  .image-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .image-container > img {
    width: 90px;
  }
</style>