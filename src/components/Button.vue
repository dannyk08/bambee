<template>
  <button class="button" @click="console.log('clicking me!')">
    <slot>testing</slot>
  </button>
</template>

<script>
export default {
  name: "bb-button"
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2.5rem;
  background: transparent;
  padding: 0.5rem;
  border: 1px solid whitesmoke;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  font-weight: 600;

  &:focus {
    outline: none;
  }

  span {
    min-width: 1.5rem;
  }
}
</style>

