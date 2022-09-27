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
          @open-popup="togglePopUp"
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
          @open-popup="togglePopUp"
        />
      </div>
    </div>
    <img class="price__img_star" src="../assets/price_star.png" alt="star">
  </div>

  <popUp 
    v-if="showPoUp"
    class="popup"
    @close="togglePopUp"
  >
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
      class="input input-child"
      :class="{ invalid: v$.childname.$dirty && v$.childname.required.$invalid }"
    >
      <input
        v-model="childname"
        type="text" 
        name="child"
        :placeholder="$t('popup.input_child.placeholder')"
        @focus="v$.childname.$reset"
        @blur="v$.childname.$touch"
      />
      <label for="child">{{ $t('popup.input_child.label') }}</label>
      <div v-if="v$.childname.$error"> 
        {{ $t('popup.input_child.error') }} 
      </div>
    </div>
    <div 
      class="input input-phone"
      :class="{ invalid: v$.phone.$dirty && v$.phone.required.$invalid || v$.phone.$dirty && v$.phone.phoneValidator.$invalid }"
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
        {{ $t('popup.input_mail.error') }}
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
  </popUp>

  <popUp 
    v-if="showPoUpSuccess"
    class="popup"
    :title="$t('popup.title_success')"
    @close="togglePopUpSuccess"
  >
    <img class="popup__success_img" src="../assets/contacts/contacts-success.png" alt="success">
  </popUp>

  <popUp 
    v-if="showPoUpError"
    class="popup"
    :title="$t('popup.title_error')"
    @close="togglePopUpError"
  >
    <img class="popup__error_img" src="../assets/contacts/contacts-error.png" alt="error">
  </popUp>
</template>

<script>

import priceItem from './priceItem.vue';
import popUp from './popUp.vue'
import customButton from './customButton.vue';

import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { requester } from '../requester.js'

const phoneValidator = (value) => {
  const re = /380\d{9}$/
  return re.test(value)
}
const isRulesAcceptValidator = (value) => {
  return value
}

export default {
  name: "priceBlock",
  components: {
    priceItem,
    popUp,
    customButton, 
  },
  data() {
    return {
      showPoUp: false,
      showPoUpSuccess: false,
      showPoUpError: false,
      username: '',
      childname: '',
      phone: '',
      mail: '',
      isRulesAccept: false,
      currentCourseData: {},
      requestInProgress: false,
    }
  },
  validations () {
    return {
      username: { required, $autoDirty: true },
      childname: { required, $autoDirty: true },
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
  methods: {
    togglePopUp(data) {

      if (data) {
        this.currentCourseData = data;
      } 

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
      this.childname = '';
      this.phone = '';
      this.mail = '';
      this.isRulesAccept = false;
      this.v$.username.$reset();
      this.v$.childname.$reset();
      this.v$.phone.$reset();
      this.v$.mail.$reset();
      this.v$.isRulesAccept.$reset();
      this.currentCourseData = {};
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
          childname: this.childname,
          phone: this.phone,
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

.popup {

  &-course {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    &__name {
      font-family: 'Raleway-ExtraBold';
      font-weight: 800;
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
        font-weight: 500;
        font-size: 0.875rem;
        text-transform: uppercase;
        color: #FFFFFF;
        line-height: 120%;
      }

      &_sum {

        span {
          &:first-child {
            font-family: 'Roboto-Bold';
            font-weight: 800;
            font-size: 1.25rem;
            color: #FFFFFF;
          }

          &:last-child {
            font-family: 'Roboto-Regular';
            font-weight: 400;
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
    margin-bottom: 20px;
  }
  .input-check {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
  }

  &__success_img,
  &__error_img {
    display: block;
    margin: 0 auto;
  }
}

</style>