<template>
  <div class="schedule">
    <header class="schedule__header">{{scheduleLabel}}</header>
    <section class="schedule__stamp-list">
      <SchedulePill
        v-for="(timeStamp, timeStampIndex ) in schedule"
        :key="timeStampIndex"
        :timeStamp="timeStamp"
      />
    </section>
  </div>
</template>

<script>
import SchedulePill from "./SchedulePill.vue";
export default {
  name: "bb-schedule",
  props: ["scheduleLabel", "schedule"],
  components: {
    SchedulePill
  }
};
</script>

<style lang="scss" scoped>
$component-border: 1px solid darken(whitesmoke, 5%);
$padding: 0.5rem;

.schedule {
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    align-items: center;
    padding: $padding $padding * 2;
    background: white;
    border-bottom: $component-border;
    font-weight: 600;
  }

  &__stamp-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: $padding;
    justify-content: space-evenly;
  }
}
</style>


