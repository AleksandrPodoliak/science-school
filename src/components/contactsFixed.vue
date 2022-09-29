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
      src="../assets/contacts/call.svg" alt="call"
      @click="togglePopUp"
    >
      
    <popUp 
      v-if="showPoUp"
      class="popup"
      :title="$t('popup.title')"
      @close="togglePopUp"
    >
      <div 
        class="input input-name"
        :class="{ invalid: v$.username.$dirty && v$.username.required.$invalid }"
      >
        <input
          ref="input-name"
          v-model="username"
          type="text" 
          name="name"
          :placeholder="$t('popup.input_name.placeholder')"
          @focus="v$.username.$reset"
          @blur="v$.username.$touch"
        />
        <label for="name">{{ $t('popup.input_name.label') }}</label>
        <div v-if="v$.username.$error"> 
          {{ $t('popup.input_name.error') }} 
        </div>
      </div>
      <div 
        class="input input-phone"
        :class="{ invalid: v$.phone.$dirty && v$.phone.required.$invalid || v$.phone.$dirty && v$.phone.phoneValidator.$invalid }"
      >
        <input 
          v-model="phone"
          type="number"
          inputmode="numeric"
          name="phone"
          :placeholder="$t('popup.input_phone.placeholder')"
          @focus="v$.phone.$reset"
          @blur="v$.phone.$touch"
        />
        <label for="phone">{{ $t('popup.input_phone.label') }}</label>
        <div v-if="v$.phone.$error">
          {{ $t('popup.input_phone.error') }}
        </div>
      </div>
      <customButton 
        :text="$t('popup.button')"
        :disabled="v$.$invalid || requestInProgress"
        @click="sendForm"
      />
    </popUp>

    <popUp 
      v-if="showPoUpSuccess"
      class="popup"
      :title="$t('popup.title_success')"
      :button_back="false"
      @close="togglePopUpSuccess"
      @click="togglePopUpSuccess"
    >
      <img class="popup__success_img" src="../assets/contacts/contacts-success.png" alt="success">
    </popUp>

    <popUp 
      v-if="showPoUpError"
      class="popup"
      :title="$t('popup.title_error')"
      :button_back="false"
      @close="togglePopUpError"
      @click="togglePopUpError"
    >
      <img class="popup__error_img" src="../assets/contacts/contacts-error.png" alt="error">
    </popUp>
  </div>
</template>

<script>

import popUp from './popUp.vue'
import customButton from './customButton.vue';

import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { requester } from '../requester.js'

const phoneValidator = (value) => {
  const re = /^\d{9}$/
  return re.test(value)
}

export default {
  name: "contactsFixed",
  components: { 
    popUp,
    customButton, 
  },
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      showPoUp: false,
      showPoUpSuccess: false,
      showPoUpError: false,
      username: '',
      phone: '',
      requestInProgress: false,
    }
  },
  validations () {
    return {
      username: { required, $autoDirty: true },
      phone: { required, phoneValidator, $autoDirty: true }
    }
  },
  methods: {
    togglePopUp() {
      this.showPoUp = !this.showPoUp;
      
      if (!this.showPoUp) {
        this.clearForm();
      }
    },
    togglePopUpSuccess() {
      this.showPoUpSuccess = !this.showPoUpSuccess;
    },
    togglePopUpError() {
      this.showPoUpError = !this.showPoUpError;
    },
    clearForm() {
      this.username = '';
      this.phone = '';
      this.v$.username.$reset();
      this.v$.phone.$reset();
    },
    async sendForm() {
      this.requestInProgress = true;

      const payload  = {
        method: 'callback',
        params: {
          username: this.username,
          phone: '380'+this.phone,
        }
      };
      
      try {
        await requester(payload);
        this.togglePopUp();
        this.togglePopUpSuccess();
      } catch (error) {
        this.togglePopUp();
        this.togglePopUpError();
      }

      this.clearForm();

      this.requestInProgress = false;
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
    cursor: pointer;

    &:hover {
      filter: drop-shadow(0px 0px 20px rgba(0, 178, 255, 0.5));
    }
  }
}

.popup {
  .input-name {
    margin-bottom: 10px;
  }
  .input-phone {
    margin-bottom: 20px;
  }

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