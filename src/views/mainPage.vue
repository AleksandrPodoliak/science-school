<template>
  <div class="container">
    {{ $t('message') }}
  </div>
  
  <LocaleSwitcher />
</template>

<script>

import LocaleSwitcher from '../components/LocaleSwitcher';

export default {

  name: 'mainPage',
  components: {
    LocaleSwitcher,
  },

}
</script>
