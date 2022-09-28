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
  </div>
</template>

<script>

import teacherItem from './teacherItem.vue'

export default {
  name: "teachersBlock",
  components: {
    teacherItem,
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-subtitle {
    width: 800px;
    font-family: 'Roboto-Regular';
    font-weight: 400;
    font-size: 18px;
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
}

@media screen and (max-width: 420px) {
  
  .teacher {

    &-subtitle {
      width: 100%;
    }
  }
}

</style>