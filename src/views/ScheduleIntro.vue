<template>
  <main class="schedule-page">
    <Button>
      <span>Schedule Call Later</span>
    </Button>

    <Separator :label="'OR'"/>
    <Scheduler v-if="schedules" :schedules="schedules"/>
  </main>
</template>

<script>
import { format } from "date-fns";
import { formatToTimeZone } from "date-fns-timezone";

import Separator from "../components/Separator.vue";
import Scheduler from "../components/Scheduler.vue";
import Button from "../components/Button.vue";
import mockTimes from "../mockTimes";
import { getTimeSlots } from "./../services/timeSlots";

export default {
  name: "bb-page-schedule-intro",
  components: {
    Separator,
    Scheduler,
    Button
  },
  data() {
    return {
      scheduleData: []
    };
  },
  mounted() {
    getTimeSlots().then(data => (this.scheduleData = data));
  },
  computed: {
    schedules() {
      return this.scheduleData.reduce((prev, timestamp) => {
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
    }
  }
};
</script>


<style lang="scss" scoped>
.schedule-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

