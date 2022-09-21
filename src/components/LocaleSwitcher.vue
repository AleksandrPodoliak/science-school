<template>
  <!-- v-model="$i18n.locale" -->
  <select
    :value="$i18n.locale"
    @change="switchLanguage($event)"
  >
    <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale.value">
      {{ locale.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return { 
      locales: [
        {
          value: 'uk',
          text: 'Українська',
        },
        {
          value: 'en',
          text: 'English',
        }, 
        {
          value: 'ru',
          text: 'Русский',
        },
      ] 
    };
  },
  methods: {
    switchLanguage(event) {
      this.$i18n.locale = event.target.value;
      this.$router.replace(`/${event.target.value}`)
    },
  },
};
</script>