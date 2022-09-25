<template>

  <div class="switcher">
    <div 
      class="switcher-button"
      @click="toggleLocaleSelect"
    >
      {{ localeText }}
    </div>

    <div
      v-if="showLocaleSelect"
      class="switcher-select"
      v-click-outside="toggleLocaleSelect"
    >
      <ul class="switcher-select__list">
        <li
          class="switcher-select__item"
          v-for="(locale, i) in locales"
          :key="i"
          @click="selectLocale(locale.value)"
        >
          {{ locale.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return {
      showLocaleSelect: false,
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
  computed: {
    localeText() {
      if (this.$i18n.locale == 'uk') return 'Українська'
      if (this.$i18n.locale == 'ru') return 'Русский'
      if (this.$i18n.locale == 'en') return 'English'
      return 'Українська'
    },
  },
  methods: {
    toggleLocaleSelect() {
      this.showLocaleSelect = !this.showLocaleSelect;
    },
    selectLocale(val) {
      this.$i18n.locale = val;
      this.$router.replace(`/${val}`)
      this.toggleLocaleSelect();
    },
  },
};
</script>

<style lang="scss" scoped>

.switcher {
  position: relative;

  &-button {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 8px;
    background: rgba(85, 129, 241, 0.21);
    backdrop-filter: blur(2px);
    border-radius: 4px;
    font-family: "Raleway-Bold";
    font-weight: 700;
    font-size: 14px;
    color: #00B2FF;
    cursor: pointer;
    user-select: none;
  }

  &-select {
    right: 0;
    position: absolute;

    &__list {
      padding: 0 20px;
      background: #011343;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    &__item {
      padding: 20px 10px;
      font-family: 'Raleway-Medium';
      font-weight: 500;
      font-size: 14px;
      color: #FFFFFF;
      user-select: none;
      cursor: pointer;

      &:hover {
        color: #00B2FF;
      }

      &:not(:last-child) {
        border-bottom: 1px solid rgba(230, 230, 254, 0.1);
      }
    }
  }

}

</style>