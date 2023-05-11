<script>
  export let data = {
    property,
    value,
    grid_area
  }
</script>

<div class="stat-card" style="grid-area: {data.grid_area && data.grid_area};">
  <div class="stat-card-value-wrapper">
    <p class="stat-card-value">{data.value}</p>
  </div>
  <div class="stat-card-property-wrapper">
    <p class="stat-card-property">{data.property}</p>
  </div>
</div>

<style>
  .stat-card {
    border-radius: 6px;
    padding: 15px;
    background-color: #3C3F46;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .stat-card-value-wrapper, .stat-card-property-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .stat-card-value {
    font-size: 1.4rem;
    font-weight: 500;
  }

  .stat-card-property {
    text-align: center;
    font-size: .8rem;
  }
</style>