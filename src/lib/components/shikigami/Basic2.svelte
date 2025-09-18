<script>
  let { data, children } = $props();

  let { 
    difficulty: difficulty,
    dps: dps,
    cc: cc,
    sustain: sustain,
    buffs: buffs,
    agility: agility,
  } = data;

  import Card from "$lib/components/shikigami/Card.svelte";
</script>

<Card content={[
  `${difficulty} - 🪜 Difficulty`,
  `${dps} - ⚔️ DPS Rating`,
  `${cc} - ⚓ CC Rating`,
  `${sustain} - 💪🏽 SUSTAIN Rating`,
  `${buffs} - 💊 BUFF Rating`,
  `${agility} - 🏃‍♀️ AGILITY Rating`
]} />
{@render children?.()}