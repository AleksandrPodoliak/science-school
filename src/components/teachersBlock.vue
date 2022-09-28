<template>
  <a id="anchor3"></a>
  <div class="teacher container container-inner">
    <div class="title">
      {{ this.$t('teacher.title') }}
    </div>
    <div class="teacher-subtitle">
      {{ this.$t('teacher.descr') }}
    </div>
    <div class="teacher-cards">
      <teacherItem
        v-for="(item, i) in teachersList"
        :key="i"
        :name="item.name"
        :position="item.position"
        :image="item.image"
      />
    </div>

    <div class="teacher-cards-swiper">
      <swiper 
        class="swiper-wrapper"
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :pagination="{ clickable: true }"
        :speed="300"
        >
        <swiper-slide
          class="swiper-slide"
          v-for="(item, i) in teachersList"
          :key="i"
        >
          <teacherItem
            :name="item.name"
            :position="item.position"
            :image="item.image"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>

import teacherItem from './teacherItem.vue'

import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  name: "teachersBlock",
  components: {
    teacherItem,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, A11y],
    };
  },
  computed: {
    teachersList() {
      return [
        {
          "name": this.$t('teacher.teachers[0].name'),
          "position": this.$t('teacher.teachers[0].position'),
          "image": require('../assets/teachers/teacher1.png'),
        },
        {
          "name": this.$t('teacher.teachers[1].name'),
          "position": this.$t('teacher.teachers[1].position'),
          "image": require('../assets/teachers/teacher2.png'),
        },
        {
          "name": this.$t('teacher.teachers[2].name'),
          "position": this.$t('teacher.teachers[2].position'),
          "image": require('../assets/teachers/teacher3.png'),
        },
        {
          "name": this.$t('teacher.teachers[3].name'),
          "position": this.$t('teacher.teachers[3].position'),
          "image": require('../assets/teachers/teacher4.png'),
        },
        {
          "name": this.$t('teacher.teachers[4].name'),
          "position": this.$t('teacher.teachers[4].position'),
          "image": require('../assets/teachers/teacher5.png'),
        },
        {
          "name": this.$t('teacher.teachers[5].name'),
          "position": this.$t('teacher.teachers[5].position'),
          "image": require('../assets/teachers/teacher6.png'),
        },
        {
          "name": this.$t('teacher.teachers[6].name'),
          "position": this.$t('teacher.teachers[6].position'),
          "image": require('../assets/teachers/teacher7.png'),
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>

.teacher {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-subtitle {
    width: 800px;
    font-family: 'Roboto-Regular';
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 150%;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 30px;
  }

  &-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &-cards-swiper {
    display: none;
  }
}

@media screen and (max-width: 420px) {
  
  .teacher {

    display: block;

    &-subtitle {
      width: 100%;
      line-height: 175%;
    }

    &-cards {
      display: none;
    }

    &-cards-swiper {
      display: block;
    }
  }
}

</style>