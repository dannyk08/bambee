<template>
  <div id="app">
    <h1>Test</h1>
  </div>
</template>

<script>
import mockTimes from "./mockTimes";
import { getTimeSlots, postScheduleOverview } from "./services";

export default {
  name: "app",
  components: {},
  mounted() {
    // getTimeSlots().then(console.log);
    setTimeout(() => {
      // postScheduleOverview({
      //   schedule: 1556802000000,
      //   phone: "999-999-9999"
      // });
      console.log(mockTimes);
    }, 2000);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
