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
      navigation
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

import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default { 
  name: "galleryBlock",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      sliderList: [
        require('../assets/gallery/gallery1.png'),
        require('../assets/gallery/gallery2.png'),
        require('../assets/gallery/gallery3.png'),
        require('../assets/gallery/gallery4.png'),
        require('../assets/gallery/gallery5.png'),
      ],
    }
  },
  setup() {
    return {
      modules: [Navigation, Pagination, A11y, Autoplay],
    };
  },
}
</script>

<style lang="scss" scoped>

.swiper-slide__img {
  width: 100%;
}

</style>