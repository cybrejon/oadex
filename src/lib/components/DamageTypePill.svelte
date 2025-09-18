<script>
  let { damage_type, children } = $props();
</script>

<div class="container"
  class:physical={damage_type === 'physical'}
  class:magic={damage_type === 'magic'}
  class:true={damage_type === 'true'}
  >
  <p>{@render children?.()}</p>
</div>

<style>
  .container {
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: 800;

    & p {
      font-size: .8rem;
    }
  }

  .physical {
    background-color: #e75a551c;
    color: rgb(255, 140, 136);
  }
  .magic {
    background-color: #7e41d427;
    color: #b077ff;
  }
  .true {
    background-color: #57cfff18;
    color: #57CFFF;
  }
</style>