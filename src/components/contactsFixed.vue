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
      :title="$t('popup.title1')"
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
        :class="{ invalid: v$.phone.$dirty && v$.phone.required.$invalid || v$.phone.$dirty && v$.phone.mustBeCool.$invalid }"
      >
        <input 
          v-model="phone"
          type="phone" 
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
        :disabled="v$.$invalid"
        @click="sendForm"
      />
    </popUp>
  </div>
</template>

<script>

import popUp from './popUp.vue'
import customButton from './customButton.vue';

import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { requester } from "../requester.js"

const mustBeCool = (value) => {
  const re = /380\d{9}/
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
      username: '',
      phone: '',
    }
  },
  validations () {
    return {
      username: { required, $autoDirty: true },
      phone: { required, mustBeCool, $autoDirty: true }
    }
  },
  methods: {
    togglePopUp() {
      this.showPoUp = !this.showPoUp;
      if (this.showPoUp) {
        setTimeout(() => {
          this.$refs['input-name'].focus();
        }, 0);
      } 
    },
    async sendForm() {

      const payload  = {
        username: this.username,
        phone: this.phone,
      };

      const resp = await requester(payload);

      console.log('resp :>> ', resp);
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
    margin-bottom: 20px;
  }
  .input-phone {
    margin-bottom: 40px;
  }
}
</style>