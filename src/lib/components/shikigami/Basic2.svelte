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
</script>

<Container area_name={area_name}>
  <div class="vas">
    <p class="vas-title">{dps}</p>
    <ul class="vas-ul">
        <li class="vas-li">⚔️ DPS Rating</li>
    </ul>
  </div>
  <div class="vas">
    <p class="vas-title">{cc}</p>
    <ul class="vas-ul">
        <li class="vas-li">⚓ CC Rating</li>
    </ul>
  </div>
  <div class="vas">
    <p class="vas-title">{sustain}</p>
    <ul class="vas-ul">
        <li class="vas-li">💪🏽 SUSTAIN Rating</li>
    </ul>
  </div>
  <div class="vas">
    <p class="vas-title">{buffs}</p>
    <ul class="vas-ul">
        <li class="vas-li">💊 BUFF Rating</li>
    </ul>
  </div>
  <div class="vas">
    <p class="vas-title">{agility}</p>
    <ul class="vas-ul">
        <li class="vas-li">🏃‍♀️ AGILITY Rating</li>
    </ul>
  </div>
</Container>

<style>

  .vas {
    background-color: #3C3F46;
    border-radius: 6px;
    padding: 15px;
  }

  .vas-ul {
    margin-top: 10px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  .vas-li {
    font-size: .9rem;
  }

  .vas-title {
    font-weight: 800;
  }

</style>