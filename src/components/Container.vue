<template slot="slotName">
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "bb-container",
  props: {
    slotName: {
      default: Date.now()
    }
  }
};
</script>

<style lang="scss" scoped>
$component-border: 1px solid darken(whitesmoke, 5%);
$height: 4rem;

.container {
  border-radius: var(--border-radius);
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  border: $component-border;
  border-radius: var(--border-radius);
  width: 100%;
  max-width: $height * 7;
}
</style>

