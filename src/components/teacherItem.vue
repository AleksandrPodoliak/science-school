<template>
  <div class="teacher-item">
    <div class="teacher-item-info">
      <img class="teacher-item-info__circle" src="../assets/teachers/bg-circle.png" alt="circle">
      <div class="teacher-item-info__back"></div>
      <img class="teacher-item-info__img" :src="image" alt="teacher">
      <div class="teacher-item-info__name">
        {{ name }}
      </div>
      <div v-html="position" class="teacher-item-info__position"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "teacherItem",
  props: {
    name: String,
    position: String,
    image: String,
  },
}
</script>

<style lang="scss" scoped>

.teacher-item {
  margin-top: 40px;
  width: 360px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  
  &-info {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    padding: 60px 40px;
    width: 100%;
    height: 380px;
    border: 2px solid #00B2FF;
    border-radius: 16px;

    &__circle {
      width: 600px;
      position: absolute;
      z-index: 4;
      top: -275px;
      left: -120px;
    }

    &__back {
      background-color: #011343;
      position: absolute;
      z-index: 3;
      top: -120px;
      left: 50%;
      margin-left: -120px;
      width: 200px;
      height: 200px;
      border: 2px solid #00B2FF;
      border-radius: 8px;
    }
    
    &__img {
      position: absolute;
      z-index: 5;
      top: -100px;
      left: 50%;
      margin-left: -100px;
      border-radius: 8px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    &__name {
      height: 72px;
      font-family: 'Raleway-Bold';;
      font-size: 1.5rem;
      line-height: 150%;
      text-align: center;
      color: #FFFFFF;
    }

    &__position {
      height: 48px;
      font-family: 'Raleway-Italic';
      font-size: 0.875rem;
      line-height: 150%;
      text-align: center;
      color: #FFFFFF;
      margin-top: 16px;
    }
  }
}

@media screen and (max-width: 420px) {
  
  .teacher-item {
    width: 100%;
    margin-top: 0;

    &-info {

      &__circle {
        display: none;
      }
    }
  }
}
</style>