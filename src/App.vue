<template>
  <div id="bb-app">
    <Navigation/>
    <SignupSteps :signupSteps="signupSteps" :currentRoute="$router.currentRoute.name"/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import SignupSteps from "./components/SignupSteps.vue";
import { signupSteps } from "./utils";

export default {
  components: {
    Navigation,
    SignupSteps
  },
  data() {
    return {
      signupSteps
    };
  }
};
</script>



<style lang="scss" scoped>
.bb-app {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.flow-main {
  display: flex;
  flex-direction: column;
  flex: 1;

  &__steps-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
  }

  &__steps-section {
    display: flex;
    margin-bottom: 1rem;
  }
}
</style>

<style lang="scss">
$primary-gray5: #bdbcbe;
$primary-gray4: #a2a1a3;
$primary-gray2: #6f6d70;
$primary-purple: #825fa8;
$box-shadow: 0px 6px 6px -6px #{$primary-gray2};
$border-radius: 0.5rem;
$signup-step-height: 2.5rem;

:root {
  --border-radius: #{$border-radius};
  --box-shadow: #{$box-shadow};
  --navigation-background-color: #{$primary-purple};
  --flow-step-background-color: #{$primary-purple};
  --flow-step-label-color: #{$primary-gray2};
  --flow-step-disabled-border-color: #{$primary-gray5};
  --flow-step-disabled-label-color: #{$primary-gray4};
  --signup-step-height: #{$signup-step-height};
}
</style>

