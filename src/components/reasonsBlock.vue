<template>
  <div class="reasons container container-inner">
    <div class="title">
      {{ this.$t('reasons.title') }}
    </div>
    <div class="content">
      <div 
        class="reasons-item"
        v-for="(item, i) in reasonsList"
        :key="i"
      >
        <img :src="item.img" alt="reason">
        <p> {{ item.descr }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reasonsBlock",
  computed: {
    reasonsList() {
      return [
        {
          img: require('../assets/reasons/reason1.svg'),
          descr: this.$t('reasons.reason[0]'),
        },
        {
          img: require('../assets/reasons/reason2.svg'),
          descr: this.$t('reasons.reason[1]'),
        },
        {
          img: require('../assets/reasons/reason3.svg'),
          descr: this.$t('reasons.reason[2]'),
        },
        {
          img: require('../assets/reasons/reason4.svg'),
          descr: this.$t('reasons.reason[3]'),
        },
        {
          img: require('../assets/reasons/reason5.svg'),
          descr: this.$t('reasons.reason[4]'),
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>

.content {
  display: flex;
  justify-content: space-between;

  .reasons-item {
    display: flex;
    flex-direction: column;
    max-width: 180px;

    img {
      max-height: 80px;
      margin-bottom: 25px;
    }

    p {
      font-family: 'Raleway-Medium';
      font-size: 1.125rem;
      line-height: 150%;
      text-align: center;
      color: #FFFFFF;
    }
  }
}

@media screen and (max-width: 420px) {

  .content {
    flex-wrap: wrap;

    .reasons-item {
      width: 45%;

      p {
        font-size: 0.875rem;
        line-height: 175%;
      }

      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    }
  }

}

</style>