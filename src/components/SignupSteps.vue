<template>
  <div class="signup-steps" v-if="signupSteps && signupSteps.length">
    <SignupStep
      v-for="(signupStep, index) in signupSteps"
      :active="signupStep.name === currentRoute"
      :key="index"
      :disabled="false"
      :signupStep="signupStep"
    />
  </div>
</template>

<script>
import SignupStep from "./SignupStep.vue";

export default {
  props: {
    signupSteps: {
      required: true,
      default: []
    },
    currentRoute: {
      required: true,
      default: ""
    }
  },
  components: {
    SignupStep
  }
};
</script>

<style lang="scss" scoped>
.signup-steps {
  display: flex;
  height: calc(var(--signup-step-height) * 2);
  justify-content: center;
  align-items: center;
}
</style>

