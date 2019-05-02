<template>
  <section class="flow-step" :class="{'active': step.active, 'disabled': step.disabled}">
    <span>{{step.label}}</span>
  </section>
</template>

<script>
export default {
  name: "bb-flow-step",
  props: ["step"]
};
</script>

<style lang="scss" scoped>
$border-radius: 2rem;

.flow-step {
  // default for all
  background: white;
  border: 1px solid var(--flow-step-background-color);
  padding: 1rem;
  height: 2.5rem;
  min-width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;

  // :UI
  &:first-of-type {
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
  }
  &:last-of-type {
    border-top-right-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }

  // :state => active, disabled
  &.active {
    background: var(--flow-step-background-color);
    color: white;
  }
  &.disabled {
    color: var(--flow-step-disabled-label-color);
    border-color: var(--flow-step-disabled-border-color);
  }
}
</style>
