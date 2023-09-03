<script>
    import { isLoading } from "../../routes/store";
</script>


{#if $isLoading}
  <div class="container">
    <div class="progressbar">
    </div>
  </div>
{/if}

<style>

  @keyframes progressbarAnimation {
    0% {
      width: 0;
    }
    10% {
      width: 40%;
    }
    20% {
      width: 60%;
    }
    60% {
      width: 70%;
    }
    100% {
      width: 90%;
    }
  }

  .container {
    pointer-events: none;
    z-index: 200;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
  }

  .progressbar {
    height: 100%;
    width: 90%;
    animation: progressbarAnimation 3s;
    background-color: #ccfe05;
  }
</style>