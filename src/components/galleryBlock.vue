<template>
  <a id="anchor4"></a>
  <div class="gallery container container-inner">
    <div class="title">
      {{ this.$t('gallery.title') }}
    </div>
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
  name: "galleryBlock",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      sliderListDesktop: [
        require('../assets/gallery/gallery1.png'),
        require('../assets/gallery/gallery2.png'),
        require('../assets/gallery/gallery3.png'),
        require('../assets/gallery/gallery4.png'),
        require('../assets/gallery/gallery5.png'),
      ],
      sliderListMobile: [
        require('../assets/gallery/gallery1Mobile.png'),
        require('../assets/gallery/gallery2Mobile.png'),
        require('../assets/gallery/gallery3Mobile.png'),
        require('../assets/gallery/gallery4Mobile.png'),
        require('../assets/gallery/gallery5Mobile.png'),
      ],
    }
  },
  setup() {
    return {
      modules: [Pagination, A11y, Autoplay],
    };
  },
  methods: {
    mobileScreen() {
      return window.screen.width <= 420
    },
  },
}
</script>

<style lang="scss" scoped>

.swiper-slide__img {
  width: 100%;
}

</style>