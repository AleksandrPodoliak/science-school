<template>
  <div class="header">
    <div class="header-wrapper container">
      <img src="../assets/logo-header.svg" alt="logo" class="header-logo">
      <nav class="header-nav">
        <ul class="header-nav__list">
          <li
            class="header-nav__list-item"
            v-for="(item, i) in navList"
            :key="i"
          > 
            <a :href="'#anchor'+i">
              {{ item }} 
            </a>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </div>
  </div>
</template>

<script>

import LocaleSwitcher from '../components/LocaleSwitcher';

export default {
  name: "headerBlock",
  components: {
    LocaleSwitcher, 
  },
  computed: {
    navList() {
      return [
        this.$t('header.nav[0]'), this.$t('header.nav[1]'),
        this.$t('header.nav[2]'), this.$t('header.nav[3]'),
        this.$t('header.nav[4]'), this.$t('header.nav[5]'),
      ]
    },
  },
};
</script>

<style lang="scss" scoped>

.header {
  position: relative;
  z-index: 2;
  font-family: "Raleway-Bold";
  font-weight: 700;
  font-size: 0.875rem;
  background-image: url(../assets/header-bg.png);
  background-size: cover;
  filter: drop-shadow(0px 4px 8px rgba(1, 29, 60, 0.25));

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 16px 130px 24px;
  }

  &-nav {
    display: flex;
  }

  &-nav__list {
    display: flex;
    padding: 8px 0;

    &-item {
      user-select: none;
      margin-right: 48px;

      &:last-child {
        margin-right: 65px;
      }

      & a {
        color: #fff;
        text-transform: uppercase;

        &:hover {
          color: #00B2FF;
        }
      }
    }
  }
}

</style>