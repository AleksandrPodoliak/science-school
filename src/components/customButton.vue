<template>
  <button 
    class="button"
    :disabled="disabled"
    :style="{ width: width}"
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
    width: {
      default: '100%'
    },
  },
}
</script>

<style lang="scss" scoped>

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background: #00B2FF;
  border-radius: 8px;
  user-select: none;
  cursor: pointer;

  &__text {
    font-family: 'Roboto-Bold';
    font-size: 1.25rem;
    color: #FFFFFF;
    text-transform: uppercase;
  }

  &:hover {
    background: #5581F1;
  }

  &:active {
    background: #3F4CD7;
  }

  &:disabled {
    background: #00B2FF;
    opacity: 0.5;
    cursor: auto;
  }
}

</style>