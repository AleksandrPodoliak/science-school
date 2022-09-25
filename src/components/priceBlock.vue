<template>
  <a id="anchor2"></a>
  <div class="price container container-inner">
    <div class="title">
      {{ this.$t('price.title') }}
    </div>
    <div class="content">
      <div class="contant-main">
        <priceItem
          v-for="(item, i) in cardsMainList"
          :key="i"
          :name="item.name || ''"
          :period="item.period || ''"
          :descr="item.descr || ''"
          :sum="item.sum || 0"
          :curr="item.curr || ''"
          :button_name="item.button_name || ''"
        />
      </div>
      <div class="title simple">
        {{ this.$t('price.additional_title') }}
      </div>
      <div class="title info">
        {{ this.$t('price.additional_info') }}
      </div>
      <div class="contant-additional">
        <priceItem
          v-for="(item, i) in cardsAdditionalList"
          :key="i"
          :name="item.name || ''"
          :period="item.period || ''"
          :descr="item.descr || ''"
          :sum="item.sum || 0"
          :curr="item.curr || ''"
          :button_name="item.button_name || ''"
        />
      </div>
    </div>
    <img class="price__img_star" src="../assets/price_star.png" alt="star">
  </div>
</template>

<script>

import priceItem from './priceItem.vue';

export default {
  name: "priceBlock",
  components: {
    priceItem,
  },
  computed: {
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

.contant-additional {
  display: flex;
  justify-content: space-between;
}

.contant-main {
  display: flex;
  justify-content: space-around;
  margin-bottom: 80px;
}

.simple {
  font-size: 1.25rem;
  color: #FFFFFF;
  margin-bottom: 16px;
}

.info {
  font-family: "Roboto-Regular";
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 200%;
  color: #FFFFFF;
}

</style>