<template>
  <a id="anchor5"></a>
  <div class="contacts container container-inner">
    <div class="title">
      {{ this.$t('contacts.title') }}
    </div>
    <div class="content">
      <div v-html="$t('contacts.time')" class="contacts-time"></div>
      <div class="contacts-contact">
        380 63 363 55 77
        <br>
        <br>
        science.school.ua@gmail.com
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactsBlock',
}
</script>

<style lang="scss" scoped>

.content {
  display: flex;
  justify-content: space-around;
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 150%;
  color: #FFFFFF;
}

.contacts {
  
  &-time,
  &-contact {
    position: relative;
  }
  
  &-time {
    &::after {
      position: absolute;
      top: 3px;
      left: -42px;
      content: '';
      height: 24px;
      width: 24px;
      background-image: url('../assets/contacts/contacts-time.svg');
    }
  }

  &-contact {
    &::after {
      position: absolute;
      top: 3px;
      left: -42px;
      content: '';
      height: 24px;
      width: 24px;
      background-image: url('../assets/contacts/contacts-phone.svg');
    }

    &::before {
      position: absolute;
      bottom: 3px;
      left: -42px;
      content: '';
      height: 24px;
      width: 24px;
      background-image: url('../assets/contacts/contacts-mail.svg');
    }
  }
}


</style>