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
  font-size: 1.25rem;
  line-height: 150%;
  color: #FFFFFF;
}

.socials {
  display: none;
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

@media screen and (max-width: 420px) {
  
  .content {
    flex-direction: column;
    margin-left: 3rem;
    font-size: 1rem;
    line-height: 125%;
  }

  .socials {
    display: flex;
    justify-content: center;

    a + a {
      margin-left: 2.5rem;
    }
  }

  .contacts {
    
    &-time,
    &-contact {
      margin-bottom: 2.5rem;
    }

    &-time {
      &::after {
        top: -0.1rem;
        left: -3rem;
        height: 1.5rem;
        width: 1.5rem;
      }
    }

    &-contact {
      &::after {
        top: -0.1rem;
        left: -3rem;
        height: 1.5rem;
        width: 1.5rem;
      }

      &::before {
        bottom: -0.1rem;
        left: -3rem;
        height: 1.5rem;
        width: 1.5rem;
      }
    }
  }
}


</style>