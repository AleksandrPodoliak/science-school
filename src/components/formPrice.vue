<template>
  <div class="popup-course">
    <div class="popup-course__name">
      {{ currentCourseData.name }}
    </div>
    <div class="popup-course__price">
      <div class="popup-course__price_period"> {{ currentCourseData.period }} </div>
      <div class="popup-course__price_sum"> 
        <span> {{ formatSum(currentCourseData.sum) }} </span> 
        <span> {{ " "+currentCourseData.curr }} </span>
      </div>
    </div>
  </div>
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
  <div 
    class="input input-mail"
    :class="{ invalid: v$.mail.$dirty && v$.mail.required.$invalid || v$.mail.$dirty && v$.mail.email.$invalid }"
  >
    <input 
      v-model="mail"
      type="email"
      name="mail"
      :placeholder="$t('popup.input_mail.placeholder')"
      @focus="v$.mail.$reset"
      @blur="v$.mail.$touch"
    />
    <label for="mail">{{ $t('popup.input_mail.label') }}</label>
    <div v-if="v$.mail.$error">
      {{ $t('popup.input_mail.error')+'email@example.com' }}
    </div>
  </div>
  <div 
    class="input input-check"
    :class="{ invalid: v$.isRulesAccept.$dirty && v$.isRulesAccept.isRulesAcceptValidator.$invalid }"
  >
    <input
      v-model="isRulesAccept"
      type="checkbox"
      name="checkbox"
      @focus="v$.isRulesAccept.$reset"
      @blur="v$.isRulesAccept.$touch"
    />
    <label for="checkbox">{{ $t('popup.input_check.label') }}</label>
    <span v-html="$t('popup.input_check.document')"></span>
  </div>
  <customButton 
    :text="$t('popup.button_pay')"
    :disabled="v$.$invalid || requestInProgress"
    @click="sendForm"
  />
</template>

<script>

import customButton from './customButton.vue';

import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { requester } from '../requester.js'

const phoneValidator = (value) => {
  const re = /^\d{9}$/
  return re.test(value)
}
const isRulesAcceptValidator = (value) => {
  return value
}

export default {
  name: "formPrice",
  emits: ["success", "error"],
  components: {
    customButton, 
  },
  props: {
    currentCourseData: Object,
  },
  data() {
    return {
      username: '',
      phone: '',
      mail: '',
      isRulesAccept: false,
      requestInProgress: false,
    }
  },
  validations () {
    return {
      username: { required, $autoDirty: true },
      phone: { required, phoneValidator, $autoDirty: true },
      mail: { required, email, $autoDirty: true },
      isRulesAccept: { isRulesAcceptValidator, $autoDirty: true },
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
      this.mail = '';
      this.isRulesAccept = false;
      this.v$.username.$reset();
      this.v$.phone.$reset();
      this.v$.mail.$reset();
      this.v$.isRulesAccept.$reset();
    },
    formatSum(sum) {
      return new Intl.NumberFormat('ru-RU').format(sum);
    },
    async sendForm() {
      this.requestInProgress = true;

      const payload  = {
        method: 'course',
        params: {
          username: this.username,
          phone: '380'+this.phone,
          mail: this.mail,
          sum: this.currentCourseData.sum,
          product: this.currentCourseData.name,
          lang: this.$i18n.locale,
        }
      };
      
      try {
        const resp = await requester(payload);
        
        if (resp.result) {
          window.open(resp.result, '_blank');
        }
        
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

  &-course {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    &__name {
      font-family: 'Raleway-ExtraBold';
      font-size: 1.25rem;
      line-height: 150%;
      text-transform: uppercase;
      color: #00B2FF;
      margin-bottom: 16px;
    }

    &__price {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      &_period {
        font-family: 'Raleway-Medium';
        font-size: 0.875rem;
        text-transform: uppercase;
        color: #FFFFFF;
        line-height: 120%;
      }

      &_sum {

        span {
          &:first-child {
            font-family: 'Roboto-Bold';
            font-size: 1.25rem;
            color: #FFFFFF;
          }

          &:last-child {
            font-family: 'Roboto-Regular';
            font-size: 1.125rem;
            color: #FFFFFF;
          }
        }
      }
    }
  }
  .input-name,
  .input-child,
  .input-phone,
  .input-mail {
    margin-bottom: 10px;
  }
  .input-check {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
}

</style>