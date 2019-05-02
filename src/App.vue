<template>
  <div class="bb-app">
    <Navigation/>
    <main>
      <h1>Test</h1>
    </main>
  </div>
</template>

<script>
import mockTimes from "./mockTimes";
import { getTimeSlots, postScheduleOverview } from "./services";
import Navigation from "./components/Navigation.vue";

export default {
  name: "bb",
  components: {
    Navigation
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
</style>

<style lang="scss">
:root {
  // --navigation-background-color: #4f3073;
  --navigation-background-color: #825fa8;
}
</style>

