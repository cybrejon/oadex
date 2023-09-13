<script>
  import yoto from '$lib/assets/yoto.png';
  import yasha from '$lib/assets/yasha.png';

  import Icon from '@iconify/svelte';
</script>

<img class="hero-image" alt="yoto hime" src={yoto}>
<div class="hero">
  <div class="hero-visuals">
    <img class="hero-image--alt" alt="yasha" src={yasha}>
  </div>
  <div class="text">
    <span class="hero-text-wrapper-1">
      <h1 class="hero-text">Unleash the Spirits Master the Battle</h1>
    </span>
    <span class="hero-description-wrapper-1">
      <h2 class="hero-description">Dive into the World of Japanese Mythology in the Ultimate MOBA Experience</h2>
    </span>
    <div class="platforms">
      <Icon icon='bxl:play-store' style='font-size: 30px;' />
      <Icon icon='mingcute:appstore-fill' style='font-size: 30px;' />
      <a href="https://play.google.com/store/apps/details?id=com.netease.g78na.gb" class="download">DOWNLOAD</a>
    </div>
  </div>
</div>

<style>
  .platforms {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 25px;
  }

  .download {
    background-color: #fff;
    font-weight: 700;
    color: #F07877;
    padding: 20px 25px;
    border-radius: 20px;
    outline: 2px solid transparent;
    transition: .2s;
    outline-offset: 3px;
  }

  .download:hover {
    background-color: #CDFE05;
    text-decoration: none;
    box-shadow: 0 10px 20px #00000036;
  }

  .download:active {
    outline: 2px solid #fff;
    background-color: #ffffff;
  }

  .hero {
    display: grid;
    grid-template-columns: 30% auto;
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 60%;
    filter: drop-shadow(20px 10px #00000015);
  }

  .hero-image--alt {
    display: none;
    filter: drop-shadow(20px 10px #00000015);
  }
  
  .text {
    text-align: right;
    justify-content: center;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }

  .hero-text-wrapper-1 {
    width: 700px;
  }

  .hero-description-wrapper-1 {
    width: 560px;
  }

  .hero-text {
    font-size: 4rem;
  }

  .hero-description {
    font-size: 1.3rem;
    font-weight: normal;
    line-height: 35px;
  }

  @media only screen and (width < 1222px) {
    .hero-text-wrapper-1, .hero-description-wrapper-1 {
      width: inherit;
    }
  }
  @media only screen and (width < 1030px) {
    .hero-text {
      filter: drop-shadow(20px 10px #00000015);
    }
    .hero {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 200px auto;
      height: 80dvh;
    }
    .hero-image {
      display: none;
    }
    .hero-image--alt {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    .text {
      z-index: 100;
    }
  }
  @media only screen and (width < 500px) {
    .hero-text {
      font-size: 3rem;
    }
  }
</style>