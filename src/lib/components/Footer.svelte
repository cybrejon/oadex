<script>
  import Button2 from '$lib/components/Button2.svelte';
</script>

<div class="footer">

  <div class="footer-block">
    <div class="footer-links">
      <Button2 icon='mingcute:discord-fill' type='link' link='http://discord.gg/KGsaAet' />
      <Button2 icon='mdi:github' type='link' link='https://github.com/cybrejon/oadex' />
      <Button2 icon='tabler:api' type='link' link='https://github.com/cybrejon/onmyoji-arena-wiki-api' />
    </div>
    <p style="font-weight: 600;">OADex 2024, All rights reserved.</p>
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