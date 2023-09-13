<script>
  import skin1 from '$lib/assets/skin1.png';
  import skin2 from '$lib/assets/skin2.png';
  import skin3 from '$lib/assets/skin3.png';
  import skin4 from '$lib/assets/skin4.png';
</script>

<div class="skins">
  <div class="skins-text">
    <h1 class="hero-text">Beautiful Skins</h1>
    <h2 class="hero-description">Onmyoji Arena: Unveil a World of Aesthetic Mastery</h2>
  </div>
  <div class="skins-gallery">
    <div class="skin">
      <img class="skin-image-glow" src={skin1} alt="skin">
      <img class="skin-image" src={skin1} alt="skin">
    </div>
    <div class="skin">
      <img class="skin-image-glow" src={skin2} alt="skin">
      <img class="skin-image" src={skin2} alt="skin">
    </div>
    <div class="skin">
      <img class="skin-image-glow" src={skin4} alt="skin">
      <img class="skin-image" src={skin4} alt="skin">
    </div>
  </div>
</div>

<style>
  .skins {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
        "text gallery"
      ;
  }

  .skins-text {
    grid-area: text;
    display: flex;
    row-gap: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .skins-gallery {
    grid-area: gallery;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 20px;
  }

  .skin {
    position: relative;
    width: 200px;
  }

  .skin-image-glow {
    position: absolute;
    width: 100%;
    filter: blur(30px);
    opacity: .5;
    display: none;
  }

  .skin:hover .skin-image-glow {
    display: block;
  }

  .skin > .skin-image {
    box-shadow: 0 10px #282A2F;
    width: 100%;
    transition: .2s;
    border-radius: 30px;
    border: 4px solid #ffffff25;
  }

  .skin > .skin-image:hover {
    transform: scale(110%) translateY(-10px);
    filter: none;
    border-color: #ffffff91;
    box-shadow: none;
  }

  .hero-text {
    font-size: 4rem;
  }

  .hero-description {
    font-size: 1.3rem;
    font-weight: normal;
    line-height: 35px;
    width: 400px;
  }

  @media only screen and (width < 1222px) {
    .skins {
      grid-template-columns: 1fr;
      row-gap: 40px;
      grid-template-rows: repeat(2, auto);
      grid-template-areas: 
        "gallery"
        "text"
      ;
    }
    .skins-gallery {
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 20px;
    }
  }

  @media only screen and (width < 500px) {
    .skins-gallery {
      justify-content: center;
    }
    .skin {
      position: relative;
      width: 140px;
    }
    .hero-text {
      font-size: 2rem;
    }
    .skins-text {
      row-gap: 20px;
      text-align: center;
      align-items: center;
    }
    .hero-description {
      font-size: 1rem;
      width: 90%;
    }
  }
</style>