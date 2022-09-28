<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import './style/reset.css';
@import './style/basic.scss';
@import './style/fonts.css';


.container {
  width: 1440px;
  margin: 0 auto;

  &-inner {
    padding: 80px 130px;
  }
}

@media screen and (max-width: 420px) {
  .container {
    width: 100%;

    &-inner {
      padding: 2.5rem 2rem;
    }
  }
}

</style>
