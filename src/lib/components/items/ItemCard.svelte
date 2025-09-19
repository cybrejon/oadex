<script>
  import { handlers } from "svelte/legacy";
  import { LazyImage } from "svelte-lazy-image";
  import placeholderImage from "$lib/assets/plat.png";

  let {
    src,
    itemName,
    itemPrice,
    fn,
    utilFn,
    activeItem,
    abilities,
    attributes,
  } = $props();
</script>

<a
  class="item-anchor"
  onclick={handlers(fn, utilFn && utilFn)}
  href={`/items?i=${itemName}`}
  data-sveltekit-noscroll
  data-sveltekit-preload-data="tap"
>
  <div class="item-card" class:item-card--active={activeItem == itemName}>
    <div class="sc-image-container">
      <LazyImage
        class="ic-item-image"
        alt="item image"
        {src}
        placeholder={placeholderImage}
      />
    </div>
    <div class="sc-text-container">
      <p class="ic-item-name">
        {#if abilities?.active}
          [A]
        {/if}
        {itemName}
      </p>
      <p class="ic-item-price">{itemPrice}</p>
      {#if attributes}
        <div class="attributes">
          {#each attributes as attribute}
            {#if attribute.includes("Crit Rate")}
              <p class="ic-item-extra crit">CRIT</p>
            {/if}
            {#if attribute.includes("Armor Penetration")}
              <p class="ic-item-extra pen">Arm Pen</p>
            {/if}
            {#if attribute.includes("Attack Speed")}
              <p class="ic-item-extra attack-speed">Atk Spd</p>
            {/if}
            {#if attribute.includes("Life Steal")}
              <p class="ic-item-extra life-steal">Life Steal</p>
            {/if}
            {#if attribute.includes("HP") && !attribute.includes("HP Regen") && !attribute.includes("Bonus HP")}
              <p class="ic-item-extra hp">HP</p>
            {/if}
            {#if attribute.includes("HP Regen")}
              <p class="ic-item-extra hp-regen">HP Regen</p>
            {/if}
            {#if attribute.includes("Cooldown Reduction") && !attribute.includes("Spell Cooldown Reduction")}
              <p class="ic-item-extra cdr">CDR</p>
            {/if}
            {#if attribute.includes("Magic Resist")}
              <p class="ic-item-extra mres">MRes</p>
            {/if}
            {#if attribute.includes("MP") && !attribute.includes("MP Regen")}
              <p class="ic-item-extra mp">MP</p>
            {/if}
            {#if attribute.includes("MP Regen")}
              <p class="ic-item-extra mp-regen">MP Regen</p>
            {/if}
            {#if attribute.includes("Armor")}
              <p class="ic-item-extra armor">Armor</p>
            {/if}
            {#if attribute.includes("Magic Penetration")}
              <p class="ic-item-extra mpen">M-Pen</p>
            {/if}
          {/each}
        </div>
      {/if}
      {#if abilities}
        <div class="abilities">
          {#each abilities.passive as passive}
            {#if passive.includes("Pierce")}
              <p class="ic-item-extra pen">Arm Pen</p>
            {/if}
          {/each}
        </div>
      {/if}
    </div>
  </div>
</a>

<style>
  @keyframes fade {
    from {
      opacity: 0.5;
      filter: brightness(0.8);
      box-shadow: 0 0 #282a2f;
    }
    to {
      opacity: 1;
      filter: brightness(1);
      box-shadow: 0 8px #282a2f;
    }
  }

  .attributes,
  .abilities {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    align-items: center;
    justify-content: center;
  }

  .item-anchor {
    text-decoration: none;
    cursor: default;
  }

  .item-card {
    display: grid;
    grid-template-rows: 1fr 1fr;
    position: relative;
    overflow: hidden;
    border: 4px solid #585a5f;
    background-color: #42444a;
    box-shadow: 0 8px #282a2f;
    border-radius: 10px;
    width: 90px;
    transition: 0.1s;
    animation: fade 0.3s;
  }

  .item-card:hover {
    background-color: #585a5f;
    border-color: #73757c;
  }

  .item-card--active {
    transform: translateY(8px);
    box-shadow: none;
    border-color: transparent;
    background-color: #282a2f;
  }

  .item-card--active:hover {
    background-color: #282a2f;
    border-color: transparent;
  }

  .item-card:active {
    transform: translateY(8px);
    box-shadow: none;
    border-color: transparent;
    background-color: #282a2f;
  }

  .sc-image-container {
    transition: 0.2s;
    padding: 5px 5px 0 5px;
  }

  .sc-text-container {
    padding-bottom: 5px;
    display: flex;
    row-gap: 5px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }

  .ic-item-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 70px;
    font-weight: 600;
    color: #fff;
    font-size: 0.6rem;
    text-align: center;
  }

  .ic-item-extra {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 70px;
    font-weight: 600;
    font-size: 0.4rem;
    text-align: center;
  }

  .crit {
    color: #ff6b6b;
  }
  .pen {
    color: #ff6b6b;
  }
  .attack-speed {
    color: #ffb36b;
  }
  .hp {
    color: #b3ff6b;
  }
  .hp-regen {
    color: #31ff4c;
  }
  .life-steal {
    color: #b3ff6b;
  }
  .cdr {
    color: #6beeff;
  }
  .mp {
    color: #6b6eff;
  }
  .mp-regen {
    color: #ff6bf8;
  }
  .mpen {
    color: #fd2e7d;
  }
  .mres {
    color: #bc6bff;
  }
  .armor {
    color: #dfff6b;
  }

  .ic-item-price {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80px;
    color: rgb(255, 211, 128);
    font-weight: 600;
    font-size: 0.7rem;
    text-align: center;
  }

  @media only screen and (max-width: 500px) {
    .item-card {
      width: 70px;
      height: 120px;
    }
    .ic-item-name {
      width: 52px;
      font-size: 0.5rem;
    }

    .ic-item-price {
      width: 52px;
      font-size: 0.6rem;
    }
  }

  @media only screen and (min-width: 800px) {
    .ic-item-extra {
      font-size: 0.6rem;
    }
  }
</style>
