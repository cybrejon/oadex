<script>
  export let data;

  let { 
    dps: dps,
    cc: cc,
    sustain: sustain,
    buffs: buffs,
    agility: agility,
  } = data;

  import Container from "$lib/components/shikigami/Container.svelte";
  import Card from "$lib/components/shikigami/Card.svelte";
</script>

<Card content={[
  `${dps} - ⚔️ DPS Rating`,
  `${cc} - ⚓ CC Rating`,
  `${sustain} - 💪🏽 SUSTAIN Rating`,
  `${buffs} - 💊 BUFF Rating`,
  `${agility} - 🏃‍♀️ AGILITY Rating`
]} />
<slot />