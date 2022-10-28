<template>
  <div class="contacts">
    <div class="socials">
      <a href="https://t.me/scienceschoolua" target="_blank">
        <img
          class="socials-img"
          src="../assets/contacts/tg.svg" alt="tg"
        >
      </a>
      <a href="https://www.facebook.com/scienceschoolua" target="_blank">
        <img
          class="socials-img" 
          src="../assets/contacts/fb.svg" alt="fb"
        >
      </a>
      <a href="https://www.instagram.com/scienceschoolua/" target="_blank">
        <img
          class="socials-img"
          src="../assets/contacts/inst.svg" alt="inst"
        >
      </a>
    </div>
    <img
      class="socials-img_call" 
      src="../assets/contacts/call-btn.svg" alt="call"
      @click="togglePopUp"
    >

    <popUp 
      v-if="showPopUpOnTimer"
      class="popup"
      @close="togglePopUpOnTimer"
    >
      <div class="popup-on-timer">
        <div class="popup-on-timer__title">
          <img class="popup-on-timer__title-img" src="../assets/hand.svg" alt="hand">
          <div class="popup-on-timer__title-text"> {{ this.$t('popup_on_timer.title') }} </div>
        </div>
        <div 
          class="popup-on-timer__descr"
          v-html="$t('popup_on_timer.descr')"
        >
        </div>
        <customButton 
          :text="$t('price.free_lesson.button_name')"
          :width="mobileScreen ? '100%' : '270px'"
          @click="togglePopUp(); togglePopUpOnTimer();"
        />
      </div>
    </popUp>

    <popUp 
      v-if="showPopUp"
      class="popup"
      :title="$t('popup.title')"
      @close="togglePopUp"
    >
      <formCallback
        @success="togglePopUp(); togglePopUpSuccess();"
        @error="togglePopUp(); togglePopUpError();"
      />
    </popUp>

    <popUp 
      v-if="showPopUpSuccess"
      class="popup"
      :title="$t('popup.title_success')"
      :button_back="false"
      @close="showPopUpSuccess = false"
      @click="showPopUpSuccess = false"
    >
      <img class="popup__success_img" src="../assets/contacts/contacts-success.png" alt="success">
    </popUp>

    <popUp 
      v-if="showPopUpError"
      class="popup"
      :title="$t('popup.title_error')"
      :button_back="false"
      @close="showPopUpError = false"
      @click="showPopUpError = false"
    >
      <img class="popup__error_img" src="../assets/contacts/contacts-error.png" alt="error">
    </popUp>
  </div>
</template>

<script>

import popUp from './popUp.vue'
import formCallback from './formCallback.vue';
import customButton from './customButton.vue';

export default {
  name: "contactsFixed",
  components: {
    popUp,
    formCallback,
    customButton,
  },
  data() {
    return {
      showPopUp: false,
      showPopUpOnTimer: false,
      showPopUpSuccess: false,
      showPopUpError: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.togglePopUpOnTimer();
    }, 15000);
  },
  computed: {
    mobileScreen() {
      return window.screen.width <= 420
    },
  },
  methods: {
    togglePopUp() {
      this.showPopUp = !this.showPopUp;
    },
    togglePopUpOnTimer() {
      this.showPopUpOnTimer = !this.showPopUpOnTimer;
    },
    togglePopUpSuccess() {
      this.showPopUpSuccess = !this.showPopUpSuccess;
    },
    togglePopUpError() {
      this.showPopUpError = !this.showPopUpError;
    },
  },
}
</script>

<style lang="scss" scoped>

.contacts {
  position: fixed;
  z-index: 10;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.socials {
  width: 30px;
  display: flex;
  flex-direction: column;
}

.socials-img {
  cursor: pointer;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 20px;
  }

  &:hover {
    filter: drop-shadow(0px 0px 8px rgba(0, 178, 255, 0.4));
  }

  &_call {
    width: 80px;
    cursor: pointer;

    &:hover {
      filter: drop-shadow(0px 0px 20px rgba(0, 178, 255, 0.5));
    }
  }
}

.popup-on-timer {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    display: flex;
    margin-bottom: 3.75rem;

    &-text {
      margin-left: 1.25rem;
      font-family: "Raleway-Bold";
      font-size: 2rem;
      color: #00B2FF;
      letter-spacing: 0.05rem;
      line-height: 150%;
    }
  }

  &__descr {
    text-align: center;
    line-height: 200%;
    font-family: 'Raleway-Medium';
    font-size: 0.875rem;
    color: #fff;
    margin-bottom: 3.75rem;
  }
}

.popup {
  &__success_img,
  &__error_img {
    display: block;
    margin: 0 auto;
  }
}

@media screen and (max-width: 420px) {
  
  .socials {
    display: none;

    &-img_call {
      width: 4rem;
    }
  }
}
</style>