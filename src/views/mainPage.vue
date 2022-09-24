<template>
  <contactsFixed />
  <headerBlock />
  <sliderBlock />
  <aboutUsBlock />
  <reasonsBlock />
</template>

<script>

import contactsFixed from '@/components/contactsFixed.vue';
import headerBlock from '@/components/headerBlock.vue';
import sliderBlock from '@/components/sliderBlock.vue';
import aboutUsBlock from '@/components/aboutUsBlock.vue';
import reasonsBlock from '@/components/reasonsBlock.vue';

export default {

  name: 'mainPage',
  components: {
    contactsFixed,
    headerBlock,
    sliderBlock,
    aboutUsBlock,
    reasonsBlock,
  },

}

</script>
