<template>
  <div class="bb-app">
    <Navigation/>
    <main class="flow-main">
      <section v-if="flowSteps && !!flowSteps.length" class="flow-steps">
        <FlowStep v-for="(step, index) in flowSteps" :step="step" :key="index"/>
      </section>

      <Button>
        <span>Schedule Call Later</span>
      </Button>

      <p>OR</p>
    </main>
  </div>
</template>

<script>
import mockTimes from "./mockTimes";
import { getTimeSlots, postScheduleOverview } from "./services";
import Navigation from "./components/Navigation.vue";
import FlowStep from "./components/FlowStep.vue";
import Button from "./components/Button.vue";

export default {
  name: "bb",
  components: {
    Navigation,
    FlowStep,
    Button
  },
  data: () => {
    return {
      flowSteps: [
        {
          label: "Create Account",
          active: true,
          disabled: false
        },
        {
          label: "Schedule Intro",
          active: false,
          disabled: false
        },
        {
          label: "Try Bambee",
          active: false,
          disabled: true
        }
      ]
    };
  },
  mounted() {
    // getTimeSlots().then(console.log);
    // setTimeout(() => {
    // postScheduleOverview({
    //   schedule: 1556802000000,
    //   phone: "999-999-9999"
    // });
    // console.log(mockTimes);
    // }, 2000);
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
  align-items: center;
}

.flow-steps {
  display: flex;
  max-width: 75%;
  margin: 1rem auto;
}
</style>

<style lang="scss">
$primary-gray5: #bdbcbe;
$primary-gray4: #a2a1a3;
$primary-gray2: #6f6d70;
$primary-purple: #825fa8;

:root {
  --navigation-background-color: #{$primary-purple};
  --flow-step-background-color: #{$primary-purple};
  --flow-step-label-color: #{$primary-gray2};
  --flow-step-disabled-border-color: #{$primary-gray5};
  --flow-step-disabled-label-color: #{$primary-gray4};
}
</style>

