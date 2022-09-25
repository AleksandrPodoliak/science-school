<template>
  <div class="footer">
    <img src="../assets/logo-header.svg" alt="logo" class="footer-logo">
    <span class="footer-copy">2022 © ScienceSchool</span>
    <div class="footer-socials">
      <a href="https://t.me/scienceschoolua" target="_blank">
        <img
          class="footer-socials-img"
          src="../assets/contacts/footer-tg.svg" alt="tg"
        >
      </a>
      <a href="https://www.instagram.com/scienceschoolua/" target="_blank">
        <img
          class="footer-socials-img"
          src="../assets/contacts/footer-inst.svg" alt="inst"
        >
      </a>
      <a href="https://www.facebook.com/scienceschoolua" target="_blank">
        <img
          class="footer-socials-img" 
          src="../assets/contacts/footer-fb.svg" alt="fb"
        >
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: "footerBlock",
};
</script>

<style lang="scss" scoped>

.footer {
  position: relative;
  z-index: 2;
  font-family: "Raleway-Bold";
  font-weight: 700;
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 130px;
  background-image: url(../assets/header-bg.png);
  background-size: cover;
  filter: drop-shadow(0px 4px 8px rgba(1, 29, 60, 0.25));

  &-copy {
    font-family: 'Roboto-Regular';
    font-weight: 400;
    font-size: 0.875rem;
    color: #FFFFFF;
  }

  &-socials {
    &-img {
      height: 24px;
      width: 24px;
      margin-left: 16px;
    }
  }
}

</style>