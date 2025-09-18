<script>
  let { data, children } = $props();

  let { 
    name: name,
    classification: classification,
    voices: voices,
    lane: lane,
    specialty: specialty
  } = data;

  import Card from "$lib/components/shikigami/Card.svelte";
</script>

  <div class="name-container">
    <p class="name {classification[0].toLowerCase()}-name">📝 {name}</p>
  </div>
  <ul class="classification-ul">
    {#each classification as role}
      <li class="c-li {role.toLowerCase()}">{role}</li>
    {/each}
  </ul>
  <Card title="📍 LANE POSITION" content={[
    lane
  ]} />
  <Card title="⚖️ SPECIALTY" content={[
    specialty
  ]} />
  <Card title="Voice Actors">
    {#if voices[0]}
      <li class="vas-li"><span class="language">JP</span> - {voices[0]}</li>
    {/if}
    {#if voices[1]}
      <li class="vas-li"><span class="language">CN</span> - {voices[1]}</li>
    {/if}
    {#if voices[2]}
      <li class="vas-li"><span class="language">EN</span> - {voices[2]}</li>
    {/if}
    {#if voices[3]}
      <li class="vas-li"><span class="language">KR</span> - {voices[3]}</li>
    {/if}
  </Card>
  {@render children?.()}

<style>

  .language {
    font-weight: 900;
  }

  .name {
    font-size: 1.6rem;
    font-weight: 600;
  }

  .classification-ul {
    display: flex;
    justify-content: start;
    align-items: center;
    column-gap: 5px;
  }

  .c-li {
    font-size: .7rem;
    font-weight: 900;
    display: inline-block;
    border-radius: 100px;
    padding: 5px 10px;
  }

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

  .lane {
    font-weight: 800;
  }













  
  .ninja {
    background-color: rgba(218, 138, 25, 0.178);
  }
  .ninja-name {
    color: rgb(255, 215, 158);
  }

  .mage {
    background-color: rgba(25, 125, 218, 0.178);
  }
  .mage-name {
    color: rgb(148, 203, 255);
  }

  .support {
    background-color: rgba(25, 218, 25, 0.178);
  }
  .support-name {
    color: rgb(147, 255, 147);
  }

  .samurai {
    background-color: rgba(221, 86, 86, 0.267);
  }
  .samurai-name {
    color: rgb(255, 96, 96);
  }

  .tank {
    background-color: rgba(178, 97, 221, 0.322);
  }
  .tank-name {
    color: rgb(206, 150, 237);
  }
  
  .marksman {
    background-color: rgba(215, 218, 25, 0.178);
  }
  .marksman-name {
    color: rgb(231, 233, 135);
  }
  
</style>