<template>
  <div class="popup">
    <div class="popup-container">
      <img 
        class="popup-container__exit" 
        src="../assets/exit.svg" 
        alt="exit"
        @click="$emit('close')"
      >
      <div 
        class="popup-container__back"
        @click="$emit('close')"
      >
        <img src="../assets/arrow-back.svg" alt="back">
        <span> {{ this.$t('popup.button_back') }} </span>
      </div>
      <div
        v-if="title"
        class="popup-container__title"
        v-html="title"
      >
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popUp',
  props: {
    title: String,
  },
}
</script>

<style lang="scss" scoped>

.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);

  &-container {
    position: relative;
    width: 440px;
    padding: 40px 50px;
    background: #010F3E;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    &__exit {
      position: absolute;
      width: 24px;
      height: 24px;
      top: 0;
      right: -40px;
      cursor: pointer;
      user-select: none;
    }

    &__back {
      display: none;
    }

    &__title {
      font-family: 'Raleway-Medium';
      font-size: 0.875rem;
      line-height: 150%;
      text-align: center;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 40px;
    }
  }
}

@media screen and (max-width: 420px) {
  
  .popup {

    &-container {
      width: 100%;
      padding: 2rem;

      &__exit {
        display: none;  
      }

      &__back {
        display: flex;
        align-items: center;
        font-family: 'Roboto-Regular';
        font-size: 0.875rem;
        line-height: 1rem;
        color: #FFFFFF;
        margin-bottom: 2rem;

        & img {
          margin-right: 0.6rem;
          height: 0.8rem;
          width: 0.6rem;
        }
      }

      &__title {
        font-size: 0.75rem;
        margin-bottom: 2rem;
      }
    }
  }
}

</style>