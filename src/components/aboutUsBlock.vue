<template>
  <a id="anchor0"></a>
  <div class="about container container-inner">
    <div class="title">
      {{ this.$t('about.title') }}
    </div>
    <div class="content">
      <img class="content-img" src="../assets/about-us.png" alt="science">
      <div v-html="$t('about.text')" class="content-text"></div>
    </div>
    <img class="content-img_star" src="../assets/about-us-star.png" alt="science">
  </div>
</template>

<script>
export default {
  name: "aboutUsBlock",
}
</script>

<style lang="scss" scoped>

.about {
  position: relative;
  .content {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;

    &-text {
      width: 580px;
      font-family: 'Roboto-Regular';
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 200%;
      color: #FFFFFF;
    }

    &-img_star {
      position: absolute;
      z-index: 1;
      top: 80px;
      left: -40px;
    }
  }
}

@media screen and (max-width: 420px) {
  
.about {
  .content {
    flex-direction: column;

    &-text {
      margin-top: 2rem;
      width: 100%;
      font-size: 1rem;
      line-height: 175%;
      color: #FFFFFF;
    }

    &-img_star {
      top: -70px;
      left: -220px;
    }
  }
}
}
</style>