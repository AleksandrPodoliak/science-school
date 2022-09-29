<template>
  <div class="swiper container">
    <swiper 
      class="swiper-wrapper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      :loop="true"
      :speed="500"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
    >
      <swiper-slide
        class="swiper-slide"
        v-for="(slide, i) in mobileScreen ? sliderListMobile : sliderListDesktop"
        :key="i"
      >
        <img
          class="swiper-slide__img"
          :src="slide" 
          alt="slide"
        >
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  name: "sliderBlock",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      banersDesktop: {
        ru: [
          require("../assets/slides/slide1ru.png"),
          require("../assets/slides/slide2ru.png"),
          require("../assets/slides/slide3ru.png"),
          require("../assets/slides/slide4ru.png"),
          require("../assets/slides/slide5ru.png"),
        ],
        uk: [
          require("../assets/slides/slide1uk.png"),
          require("../assets/slides/slide2uk.png"),
          require("../assets/slides/slide3uk.png"),
          require("../assets/slides/slide4uk.png"),
          require("../assets/slides/slide5uk.png"),
        ],
        en: [
          require("../assets/slides/slide1en.png"),
          require("../assets/slides/slide2en.png"),
          require("../assets/slides/slide3en.png"),
          require("../assets/slides/slide4en.png"),
          require("../assets/slides/slide5en.png"),
        ],
      },
      banersMobile: {
        ru: [
          require("../assets/slides/slide1ruMobile.png"),
          require("../assets/slides/slide2ruMobile.png"),
          require("../assets/slides/slide3ruMobile.png"),
          require("../assets/slides/slide4ruMobile.png"),
          require("../assets/slides/slide5ruMobile.png"),
        ],
        uk: [
          require("../assets/slides/slide1ukMobile.png"),
          require("../assets/slides/slide2ukMobile.png"),
          require("../assets/slides/slide3ukMobile.png"),
          require("../assets/slides/slide4ukMobile.png"),
          require("../assets/slides/slide5ukMobile.png"),
        ],
        en: [
          require("../assets/slides/slide1enMobile.png"),
          require("../assets/slides/slide2enMobile.png"),
          require("../assets/slides/slide3enMobile.png"),
          require("../assets/slides/slide4enMobile.png"),
          require("../assets/slides/slide5enMobile.png"),
        ],
      },
    }
  },
  setup() {
    return {
      modules: [Pagination, A11y, Autoplay],
    };
  },
  computed: {
    mobileScreen() {
      return window.screen.width <= 420
    },
    sliderListDesktop() {
      return this.banersDesktop[this.$i18n.locale];
    },
    sliderListMobile() {
      return this.banersMobile[this.$i18n.locale];
    },
  },
}
</script>

<style lang="scss" scoped>

.swiper.container {
  padding-top: 96px;
}
.swiper-slide__img {
  width: 100%;
}

@media screen and (max-width: 420px) {

  .swiper.container {
    padding-top: 64px;
  }
}

</style>