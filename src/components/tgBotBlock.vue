<template>
  <div class="bot container container-inner">
    <div class="title simple">
      {{ this.$t('bot.title') }}
    </div>
    <div class="bot-btn">
      <a href="https://t.me/scienceschool_bot" target="_blank">
        <customButton 
          text="TELEGRAM BOT"
        />
      </a>
    </div>
  </div>
</template>

<script>

import customButton from './customButton.vue'

export default {
  name: "tgBotBlock",
  components: {
    customButton,
  },
}
</script>

<style lang="scss" scoped>

.simple {
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 40px;
}

.bot {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-btn {
    width: 200px;
  }
}

</style>