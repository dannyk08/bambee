<template>
  <input
    class="input"
    ref="inputRef"
    :name="inputName"
    :id="inputId"
    :type="type"
    :placeholder="placeholder"
    :class="{'has-error':hasError}"
    @input="handleInput($event)"
  >
</template>

<script>
export default {
  name: "bb-input",
  props: {
    inputId: {
      type: String,
      default: ""
    },
    inputName: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: null
    },
    hasError: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput($event) {
      this.$emit("input", $event);
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  border-radius: var(--border-radius);
  min-height: var(--signup-step-height);
  height: var(--signup-step-height);
  max-height: var(--signup-step-height);
  border: 1px solid gray;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;

  &:focus {
    outline: none;
    border-color: darken(gray, 20%);
  }
}
</style>

