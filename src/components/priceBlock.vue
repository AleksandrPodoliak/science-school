<template>
  <a id="anchor2"></a>
  <div class="price container container-inner">
    <div class="title">
      {{ this.$t('price.title') }}
    </div>
    <div class="content">
      <div class="content-main">
        <priceItem
          v-for="(item, i) in cardsMainList"
          :key="i"
          :name="item.name || ''"
          :period="item.period || ''"
          :descr="item.descr || ''"
          :sum="item.sum || 0"
          :curr="item.curr || ''"
          :button_name="item.button_name || ''"
          @open-popup="togglePopUpPrice"
        />
      </div>
      <div class="title free">
        {{ this.$t('price.free_lesson.title') }}
      </div>
      <div class="content-freelesson">
        <customButton 
          :text="$t('price.free_lesson.button_name')"
          :width="mobileScreen ? '100%' : '240px'"
          @click="togglePopUpCallback"
        />
      </div>
      <div class="title simple">
        {{ this.$t('price.additional_title') }}
      </div>
      <div class="title info">
        {{ this.$t('price.additional_info') }}
      </div>
      <div class="content-additional">
        <priceItem
          v-for="(item, i) in cardsAdditionalList"
          :key="i"
          :name="item.name || ''"
          :period="item.period || ''"
          :descr="item.descr || ''"
          :sum="item.sum || 0"
          :curr="item.curr || ''"
          :button_name="item.button_name || ''"
          @open-popup="togglePopUpPrice"
        />
      </div>
    </div>
    <img class="price__img_star" src="../assets/price_star.png" alt="star">
  </div>

  <popUp 
    v-if="showPoUpPrice"
    class="popup"
    @close="togglePopUpPrice"
  >
    <formPrice
      :currentCourseData="currentCourseData"
      @success="togglePopUpPrice(); togglePopUpSuccess();"
      @error="togglePopUpPrice(); togglePopUpError();"
    />
  </popUp>

  <popUp 
    v-if="showPoUpCallback"
    class="popup"
    :title="$t('popup.title')"
    @close="togglePopUpCallback"
  >
    <formCallback
      @success="togglePopUpCallback(); togglePopUpSuccess();"
      @error="togglePopUpCallback(); togglePopUpError();"
    />
  </popUp>

  <popUp 
    v-if="showPoUpSuccess"
    class="popup"
    :title="$t('popup.title_success')"
    :button_back="false"
    @close="showPoUpSuccess = false"
    @click="showPoUpSuccess = false"
  >
    <img class="popup__success_img" src="../assets/contacts/contacts-success.png" alt="success">
  </popUp>

  <popUp 
    v-if="showPoUpError"
    class="popup"
    :title="$t('popup.title_error')"
    :button_back="false"
    @close="showPoUpError = false"
    @click="showPoUpError = false"
  >
    <img class="popup__error_img" src="../assets/contacts/contacts-error.png" alt="error">
  </popUp>
</template>

<script>

import priceItem from './priceItem.vue';
import popUp from './popUp.vue'
import formPrice from './formPrice.vue';
import formCallback from './formCallback.vue';
import customButton from './customButton.vue';

export default {
  name: "priceBlock",
  components: {
    priceItem,
    popUp,
    formPrice,
    formCallback,
    customButton, 
  },
  data() {
    return {
      showPoUpPrice: false,
      showPoUpCallback: false,
      showPoUpSuccess: false,
      showPoUpError: false,
      currentCourseData: {},
    }
  },
  computed: {
    mobileScreen() {
      return window.screen.width <= 420
    },
    cardsMainList() {
      return [
        {
          "name": this.$t('price.cards[0].name'),
          "period": this.$t('price.cards[0].period'),
          "descr": this.$t('price.cards[0].descr'),
          "sum": this.$t('price.cards[0].sum'),
          "curr": this.$t('price.cards[0].curr'),
          "button_name": this.$t('price.cards[0].button_name'),
        },
        {
          "name": this.$t('price.cards[1].name'),
          "period": this.$t('price.cards[1].period'),
          "descr": this.$t('price.cards[1].descr'),
          "sum": this.$t('price.cards[1].sum'),
          "curr": this.$t('price.cards[1].curr'),
          "button_name": this.$t('price.cards[1].button_name'),
        },
      ]
    },
    cardsAdditionalList() {
      return [
        {
          "name": this.$t('price.cards[2].name'),
          "period": this.$t('price.cards[2].period'),
          "descr": this.$t('price.cards[2].descr'),
          "sum": this.$t('price.cards[2].sum'),
          "curr": this.$t('price.cards[2].curr'),
          "button_name": this.$t('price.cards[2].button_name'),
        },
        {
          "name": this.$t('price.cards[3].name'),
          "period": this.$t('price.cards[3].period'),
          "descr": this.$t('price.cards[3].descr'),
          "sum": this.$t('price.cards[3].sum'),
          "curr": this.$t('price.cards[3].curr'),
          "button_name": this.$t('price.cards[3].button_name'),
        },
        {
          "name": this.$t('price.cards[4].name'),
          "period": this.$t('price.cards[4].period'),
          "descr": this.$t('price.cards[4].descr'),
          "sum": this.$t('price.cards[4].sum'),
          "curr": this.$t('price.cards[4].curr'),
          "button_name": this.$t('price.cards[4].button_name'),
        },
      ]
    },
  },
  methods: {
    togglePopUpPrice(data) {

      if (data) {
        this.currentCourseData = data;
      } 

      this.showPoUpPrice = !this.showPoUpPrice;
    },
    togglePopUpCallback() {
      this.showPoUpCallback = !this.showPoUpCallback;
    },
    togglePopUpSuccess() {
      this.showPoUpSuccess = !this.showPoUpSuccess;
    },
    togglePopUpError() {
      this.showPoUpError = !this.showPoUpError;
    },
  },
}
</script>

<style lang="scss" scoped>

.price {
  overflow: hidden;
  position: relative;

  &__img_star {
    position: absolute;
    top: -80px;
    left: -40px;
    z-index: 1;
  }
}

.content {
  position: relative;
  z-index: 2;
}

.content-main {
  display: flex;
  justify-content: space-around;
  margin-bottom: 80px;
}

.content-freelesson {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
}

.content-additional {
  display: flex;
  justify-content: space-between;
}

.simple {
  font-size: 1.25rem;
  color: #FFFFFF;
  margin-bottom: 16px;
}

.free {
  text-transform: none;
  font-size: 1.25rem;
  color: #FFFFFF;
  line-height: 150%;
  margin-bottom: 40px;
}

.info {
  font-family: "Roboto-Regular";
  font-size: 0.75rem;
  line-height: 200%;
  color: #FFFFFF;
}

.popup {
  &__success_img,
  &__error_img {
    display: block;
    margin: 0 auto;
  }
}

@media screen and (max-width: 420px) {

  .price {
    &__img_star {
      display: none;
    }
  }

  .content-main {
    flex-direction: column;
  }

  .content-freelesson {
    padding: 0 26px;
  }
  
  .content-additional {
    flex-direction: column;
  }
}

</style>