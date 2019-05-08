<template>
  <section class="flow-step" :class="{
      'active': active, 
      'disabled': disabled
    }">
    <span>{{signupStep.label}}</span>
  </section>
</template>

<script>
export default {
  name: "bb-flow-step",
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    },
    disabled: {
      type: Boolean,
      required: true,
      default: false
    },
    signupStep: {
      required: true,
      default() {
        return {
          label: "",
          path: "",
          name: ""
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$border-radius: 2rem;

.flow-step {
  // default for all
  background: white;
  border: 1px solid var(--flow-step-background-color);
  padding: 0.5rem;
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
    border-left: none;
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
