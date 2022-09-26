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
        v-for="(slide, i) in sliderList"
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
      baners: {
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
    }
  },
  setup() {
    return {
      modules: [Pagination, A11y, Autoplay],
    };
  },
  computed: {
    sliderList() {
      return this.baners[this.$i18n.locale];
    },
  },
}
</script>

<style lang="scss" scoped>

.swiper-slide__img {
  width: 100%;
}

</style>