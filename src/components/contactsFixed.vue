<template>
  <div class="contacts">
    <div class="socials">
      <a href="https://t.me/scienceschoolua">
        <img
          class="socials-img"
          src="../assets/contacts/tg.svg" alt="tg"
        >
      </a>
      <a href="https://www.facebook.com/scienceschoolua">
        <img
          class="socials-img" 
          src="../assets/contacts/fb.svg" alt="fb"
        >
      </a>
      <a href="https://www.instagram.com/scienceschoolua/">
        <img
          class="socials-img"
          src="../assets/contacts/inst.svg" alt="inst"
        >
      </a>
    </div>
    <img
      class="socials-img_call" 
      src="../assets/contacts/call.svg" alt="call"
    >
  </div>
</template>

<script>
export default {
  name: "contactsFixed",
}
</script>

<style lang="scss" scoped>

.contacts {
  position: fixed;
  z-index: 10;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.socials {
  width: 30px;
  display: flex;
  flex-direction: column;
}

.socials-img {
  cursor: pointer;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 20px;
  }

  &:hover {
    filter: drop-shadow(0px 0px 8px rgba(0, 178, 255, 0.4));
  }

  &_call {
    &:hover {
      filter: drop-shadow(0px 0px 20px rgba(0, 178, 255, 0.5));
    }
  }
}

</style>