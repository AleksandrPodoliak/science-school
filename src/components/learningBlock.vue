<template>
  <a id="anchor1"></a>
  <div class="learning container container-inner">
    <div class="title">
      {{ this.$t('learning.title') }}
    </div>
    <div class="content">
      <div class="content-school">
        <img class="content-school__img" src="../assets/learning/learning_img1.png" alt="school">
        <div v-html="$t('learning.description')" class="content-school__text"></div>
        <img class="content-school__img_star" src="../assets/learning/learning_star1.png" alt="star">
      </div>
      <div class="content-ending">
        <ul class="content-ending-list">
          {{ this.$t('learning.list_ending_title') }}
          <li 
          class="content-ending-list__item"
          v-for="(item, i) in endingList"
          :key="i"
          >
          {{ item }}
          </li>
        </ul>
      </div>
      <div class="content-events">
        <img class="content-events__img" src="../assets/learning/learning_img2.png" alt="school">
        <div v-html="$t('learning.list_events_title')" class="content-events__text"></div>
        <img class="content-events__img_star" src="../assets/learning/learning_star2.png" alt="star">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "learningBlock",
  computed: {
    endingList() {
      return [
        this.$t('learning.list_ending_items[0]'),
        this.$t('learning.list_ending_items[1]'),
        this.$t('learning.list_ending_items[2]'),
      ]
    },
  },
};
</script>

<style lang="scss" scoped>

.content {
  display: flex;
  flex-direction: column;

  &-school {
    margin-bottom: 80px;
  }

  &-school, &-events {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    &__text {
      width: 580px;
      font-family: 'Roboto-Regular';
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 200%;
      color: #FFFFFF;
    }
  }

  &-ending {
    margin-bottom: 160px;

    &-list {
      font-family: 'Raleway-Bold';
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 200%;
      color: #00B2FF;
  
      &__item {
        position: relative;
        margin: 16px 0 0 50px;
        font-family: 'Roboto-Regular';
        font-weight: 400;
        font-size: 1rem;
        line-height: 200%;
        color: #FFFFFF;
  
        &::after {
          position: absolute;
          top: 0px;
          left: -50px;
          content: '';
          width: 32px;
          height: 32px;
          background-image: url('../assets/learning/learning_ok.svg');
        }
      }
    }
  }

  &-school__img,
  &-events__img {
    position: relative;
    z-index: 2;
  }

  &-school__img_star,
  &-events__img_star {
    position: absolute;
  }
  
  &-school__img_star {
    z-index: 3;
    top: -100px;
    left: -150px;
  }
  
  &-events__img_star {
    z-index: 1;
    top: -160px;
    left: -180px;
  }

}

@media screen and (max-width: 420px) {
  
  .content {
    &-school, &-events {
      flex-direction: column;
      
      &__text {
        width: 100%;
        font-size: 1rem;
        line-height: 150%;
      }
    }

    &-ending {
      margin-bottom: 4rem;

      &-list {
        font-size: 1rem;
    
        &__item {
          margin: 1rem 0 0 3rem;
          font-size: 1rem;
          line-height: 150%;
        }
      }
    }

    &-school__img,
    &-events__img {
      width: 100%;
    }

    &-school__img_star {
      top: -160px;
      left: -270px;
    }
  }

}

</style>