<template>
  <div class="header">
    <div class="container container-inner">
      <div class="header-wrapper">
        <img src="../assets/logo-header.svg" alt="logo" class="header-logo">
        <div>
          <nav
            ref="header-nav" 
            class="header-nav"
          >
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
            <LocaleSwitcher class="header-nav__switcher"/>
          </nav>

          <div 
            class="header-burger"
            @click="toggleNavigation"
          >
            <div class="header-burger__item"></div>
            <div class="header-burger__item"></div>
            <div class="header-burger__item"></div>
          </div>

        </div>
      </div>
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
  methods: {
    toggleNavigation() {

      if (this.$refs['header-nav'].style.display == 'none' || !this.$refs['header-nav'].style.display) {
        this.$refs['header-nav'].style.display = 'flex'
        return
      }

      this.$refs['header-nav'].style.display = 'none'
    },
  },
};
</script>

<style lang="scss" scoped>

.container-inner {
  padding: 16px 130px 24px;
}

.header {
  position: fixed;
  width: 100%;
  height: 96px;
  z-index: 9;
  font-family: "Raleway-Bold";
  font-size: 0.875rem;
  background-image: url(../assets/header-bg.png);
  background-size: cover;
  filter: drop-shadow(0px 4px 8px rgba(1, 29, 60, 0.25));

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
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



@media screen and (max-width: 420px) {

  .container-inner {
    padding: 0.75rem 2.5rem;
  }

  .header {
    height: 64px;
    z-index: 9;

    &-wrapper {
      align-items: center;
    }

    &-logo {
      width: 83px;
    }

    &-nav {
      display: none;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 9;
      width: 100%;
      left: 0;
      top: 100%;
      background-color: #02103F;

      &__list {
        width: 100%;
        flex-direction: column;
        padding: 0 1rem;

        &-item {
          font-family: 'Raleway-Medium';
          font-size: 0.875rem;
          line-height: 1rem;
          text-align: center;
          margin: 0;
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(230, 230, 254, 0.1);

          &:last-child {
            margin: 0;
          }
        }
      }

      &__switcher {
        margin: 1.5rem 0;
      }
    }

    &-burger {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 1.5rem;
      height: 1.125rem;

      &__item {
        width: 100%;
        border: 1px solid #fff;
        border-radius: 1px;
        background-color: #fff;
      }
    }
  }
  

}

</style>