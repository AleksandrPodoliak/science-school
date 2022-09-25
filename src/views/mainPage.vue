<template>
  <contactsFixed />
  <headerBlock />
  <sliderBlock />
  <aboutUsBlock />
  <reasonsBlock />
  <learningBlock />
  <priceBlock />
  <tgBotBlock />
  <teachersBlock />
  <galleryBlock /> 
  <contactsBlock />
  <footerBlock />
</template>

<script>

import contactsFixed from '@/components/contactsFixed.vue';
import headerBlock from '@/components/headerBlock.vue';
import sliderBlock from '@/components/sliderBlock.vue';
import aboutUsBlock from '@/components/aboutUsBlock.vue';
import reasonsBlock from '@/components/reasonsBlock.vue';
import learningBlock from '@/components/learningBlock.vue';
import priceBlock from '@/components/priceBlock.vue';
import tgBotBlock from '@/components/tgBotBlock.vue';
import teachersBlock from '@/components/teachersBlock.vue';
import galleryBlock from '@/components/galleryBlock.vue';
import contactsBlock from '@/components/contactsBlock.vue';
import footerBlock from '@/components/footerBlock.vue';

export default {

  name: 'mainPage',
  components: {
    contactsFixed,
    headerBlock,
    sliderBlock,
    aboutUsBlock,
    reasonsBlock,
    learningBlock,
    priceBlock,
    tgBotBlock,
    teachersBlock,
    galleryBlock,
    contactsBlock,
    footerBlock,
  },

}

</script>
