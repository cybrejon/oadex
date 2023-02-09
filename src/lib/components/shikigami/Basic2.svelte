<script>
  export let data;

  export let area_name;

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

<Container area_name={area_name}>
  <Card title="Scores" content={[
    `${dps} - ⚔️ DPS Rating`,
    `${cc} - ⚓ CC Rating`,
    `${sustain} - 💪🏽 SUSTAIN Rating`,
    `${buffs} - 💊 BUFF Rating`,
    `${agility} - 🏃‍♀️ AGILITY Rating`
  ]} />
</Container>