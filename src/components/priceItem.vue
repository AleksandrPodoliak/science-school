<template>
  <div class="price-item">
    <div class="price-item__name">
      {{ name }}
    </div>
    <div class="price-item__period">
      {{ period }}
    </div>
    <div
      class="price-item__descr"
      v-html="descr" 
    >
    </div>
    <div class="price-item__price">
      <span class="price-item__price_sum">
        {{ formatSum(sum) }}
      </span>
      <span class="price-item__price_curr">
        {{ " "+curr }}
      </span>
    </div>

    <customButton
      :text="button_name"
      @click="onClick"
    />
  </div>
</template>

<script>

import customButton from './customButton.vue'

export default {
  name: "priceItem",
  components: {
    customButton,
  },
  props: {
    name: String,
    period: String,
    descr: String,
    sum: String,
    curr: String,
    button_name: String,
  },
  methods: {
    formatSum(sum) {
      return new Intl.NumberFormat('ru-RU').format(sum);
    },
    onClick() {
      this.$emit('openPopup', {
        name: this.name, 
        period: this.period,
        sum: this.sum,
        curr: this.curr,
      })
    },
  },
}
</script>

<style lang="scss" scoped>

.price-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  box-sizing: border-box;
  width: 280px;
  height: 430px;
  background: rgba(230, 230, 254, 0.1);
  border: 2px solid #00B2FF;
  border-radius: 16px;

  &__name {
    font-family: 'Raleway-ExtraBold';
    font-weight: 800;
    font-size: 1.25rem;
    line-height: 150%;
    text-transform: uppercase;
    color: #00B2FF;
    margin-bottom: 16px;
  }

  &__period {
    height: 21px;
    font-family: 'Raleway-SemiBold';
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 150%;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 40px;
  }

  &__descr {
    height: 144px;
    overflow: hidden;
    font-family: 'Roboto-Regular';
    font-weight: 400;
    font-size: 1.125;
    line-height: 200%;
    color: #FFFFFF;
    margin-bottom: 16px;
  }

  &__price {
    line-height: 150%;
    color: #FFFFFF;
    margin-bottom: 40px;

    &_sum {
      font-family: 'Roboto-Bold';
      font-weight: 800;
      font-size: 1.25rem;
    }

    &_curr {
      font-family: 'Roboto-Regular';
      font-weight: 400;
      font-size: 1.125rem;
    }
  }
}

</style>