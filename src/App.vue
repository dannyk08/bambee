<template>
  <div class="bb-app">
    <Navigation/>
    <main class="flow-main">
      <div class="flow-main__steps-container">
        <section v-if="flowSteps && !!flowSteps.length" class="flow-main__steps-section">
          <FlowStep v-for="(step, index) in flowSteps" :step="step" :key="index"/>
        </section>

        <Button>
          <span>Schedule Call Later</span>
        </Button>
      </div>

      <Separator :label="'OR'"/>
      <Scheduler v-if="schedules" :schedules="schedules"/>
    </main>
  </div>
</template>

<script>
import { formatToTimeZone } from "date-fns-timezone";
import { format } from "date-fns";

import mockTimes from "./mockTimes";
// import { getTimeSlots } from "./services";
import Navigation from "./components/Navigation.vue";
import FlowStep from "./components/FlowStep.vue";
import Button from "./components/Button.vue";
import Scheduler from "./components/Scheduler.vue";
import Separator from "./components/Separator.vue";

export default {
  name: "bb",
  components: {
    Navigation,
    FlowStep,
    Button,
    Scheduler,
    Separator
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
      ],
      schedules: null
    };
  },
  mounted() {
    this.schedules = mockTimes.reduce((prev, timestamp) => {
      let dayLabel = format(timestamp, "dddd, MMMM D, YYYY");
      let fineLabel = formatToTimeZone(new Date(timestamp), "h:mm am", {
        timeZone: "America/Los_Angeles"
      });
      let timeZone = formatToTimeZone(new Date(timestamp), "z", {
        timeZone: "America/Los_Angeles"
      });
      let cleanMicroseconds =
        fineLabel.slice(0, fineLabel.indexOf("m") + 1) + " " + timeZone;
      if (!(dayLabel in prev)) {
        prev[dayLabel] = [cleanMicroseconds];
      } else {
        prev[dayLabel].push(cleanMicroseconds);
      }
      return prev;
    }, {});

    // getTimeSlots().then(data => {
    //   this.schedules = data.reduce((prev, timestamp) => {
    //     let dayLabel = format(timestamp, "dddd, MMMM D, YYYY");
    //     let fineLabel = formatToTimeZone(new Date(timestamp), "h:mm am", {
    //       timeZone: "America/Los_Angeles"
    //     });
    //     let timeZone = formatToTimeZone(new Date(timestamp), "z", {
    //       timeZone: "America/Los_Angeles"
    //     });
    //     let cleanMicroseconds =
    //       fineLabel.slice(0, fineLabel.indexOf("m") + 1) + " " + timeZone;
    //     if (!(dayLabel in prev)) {
    //       prev[dayLabel] = [cleanMicroseconds];
    //     } else {
    //       prev[dayLabel].push(cleanMicroseconds);
    //     }
    //     return prev;
    //   }, {});
    // });

    // postScheduleOverview({
    //   schedule: 1556802000000,
    //   phone: "999-999-9999"
    // });
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

:root {
  --border-radius: #{$border-radius};
  --box-shadow: #{$box-shadow};
  --navigation-background-color: #{$primary-purple};
  --flow-step-background-color: #{$primary-purple};
  --flow-step-label-color: #{$primary-gray2};
  --flow-step-disabled-border-color: #{$primary-gray5};
  --flow-step-disabled-label-color: #{$primary-gray4};
}
</style>

