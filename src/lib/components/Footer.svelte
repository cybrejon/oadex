<script>
  import Toggles from '$lib/Toggles.svelte';
  import { goto } from '$app/navigation';
</script>

<div class="footer">

  <div class="footer-block">
    <div class="footer-links">
      <Toggles
        iconOnly=true
        no_collapse=true
        toggle_icon="mingcute:discord-fill"
        buttons={[
          { name: "a", active_indicator: 'a', active_value: 'a', fn: () => goto('http://discord.gg/KGsaAet') },
        ]}
      />
      <Toggles
        iconOnly=true
        no_collapse=true
        toggle_icon="mdi:github"
        buttons={[
          { name: "a", active_indicator: 'a', active_value: 'a', fn: () => goto('https://github.com/cybrejon/oadex') },
        ]}
      />
      <Toggles
        iconOnly=true
        no_collapse=true
        toggle_icon="tabler:api"
        buttons={[
          { name: "a", active_indicator: 'a', active_value: 'a', fn: () => goto('https://github.com/cybrejon/onmyoji-arena-wiki-api') },
        ]}
      />
    </div>
    <p style="font-weight: 600;">OADex 2023, All rights reserved.</p>
  </div>
  
</div>

<style>
  .footer {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .8rem;
  }

  .footer-block {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
  }
</style>