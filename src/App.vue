<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import './style/reset.css';
@import './style/basic.css';
@import './style/fonts.css';

.container {
  width: 1440px;
  margin: 0 auto;

  &-inner {
    padding: 80px 130px;
  }
}

.title {
  font-family: 'Raleway-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  color: #00B2FF;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 80px;
}

</style>
