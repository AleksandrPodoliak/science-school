<template>
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
</template>

<script>

import customButton from './customButton.vue';

import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { requester } from '../requester.js'

const phoneValidator = (value) => {
  const re = /^\d{9}$/
  return re.test(value)
}

export default {
  name: "formCallback",
  emits: ["success", "error"],
  components: {
    customButton,
  },
  data() {
    return {
      username: '',
      phone: '',
      requestInProgress: false,
    }
  },
  validations () {
    return {
      username: { required, $autoDirty: true },
      phone: { required, phoneValidator, $autoDirty: true },
    }
  },
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  methods: {
    success() {
      this.$emit('success')
    },
    error() {
      this.$emit('error')
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
        this.success();
      } catch (error) {
        this.error();
      }

      this.clearForm();

      this.requestInProgress = false;
    },
  },
}
</script>

<style lang="scss" scoped>

.popup {

  .input-name {
    margin-bottom: 10px;
  }
  .input-phone {
    margin-bottom: 20px;
  }
}

</style>