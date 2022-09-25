<template>
  <button 
    class="button"
    :disabled="disabled"
  >
    <span
      class="button__text"
    >
      {{ text }}
    </span>
  </button>
</template>

<script>
export default {
  name: "customButton",
  props: {
    text: String,
    disabled: {
      default: false
    },
  },
}
</script>

<style lang="scss" scoped>

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  background: #00B2FF;
  border-radius: 8px;
  user-select: none;
  cursor: pointer;

  &__text {
    font-family: 'Roboto-Bold';
    font-weight: 600;
    font-size: 1.25rem;
    color: #FFFFFF;
    text-transform: uppercase;
  }

  &:hover {
    background: linear-gradient(272.74deg, #0078AB 10.08%, #00B2FF 100%);
  }

  &:disabled {
    background: #00B2FF;
    opacity: 0.5;
    cursor: auto;
  }
}

</style>