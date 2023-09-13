<script>
  
  import Section from '../../lib/components/Section.svelte';
  import SectionCard from '../../lib/components/SectionCard.svelte';
  import Hero from '../../lib/components/home/Hero.svelte';
  import Art from '../../lib/components/home/Art.svelte';

  let windowNavigator;

</script>

<svelte:window bind:online={windowNavigator} />

<div class="grow-this-shit-on-mobile"></div>

<Section styles='position: relative;'>
  <SectionCard>
    <Hero />
  </SectionCard>
</Section>

<div class="grow-this-shit-on-mobile"></div>

<Section>
  <Art />
</Section>

<style>
  @media only screen and (width < 1030px) {
    .grow-this-shit-on-mobile {
      height: 80px;
    }
  }
</style>