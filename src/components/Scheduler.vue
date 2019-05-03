<template>
  <div class="scheduler">
    <header class="scheduler__header">
      <h3>Schedule a 20-30 minute Overview Call</h3>
    </header>

    <main class="scheduler__main">
      <SchedulePill v-for="(schedule, index ) in schedules" :key="index" :timeStamp="schedule"/>
    </main>

    <footer class="scheduler__footer">
      <div></div>
      <Button>
        <span>button call</span>
      </Button>
    </footer>
  </div>
</template>

<script>
import Button from "./Button.vue";
import SchedulePill from "./SchedulePill.vue";

export default {
  name: "bb-scheduler",
  props: ["schedules"],
  components: {
    Button,
    SchedulePill
  }
};
</script>

<style lang="scss" scoped>
$component-border: 1px solid darken(whitesmoke, 5%);
$height: 4rem;
$padding: 0.5rem;

.scheduler {
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  border: $component-border;
  border-radius: var(--border-radius);
  max-width: $height * 7;
  margin: 0 auto;

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: $height;
    border-bottom: $component-border;
  }

  &__main {
    max-height: $height * 6;
    overflow: auto;
    border-bottom: $component-border;
    padding: $padding;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  &__footer {
    min-height: $height;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $padding * 2;
  }
}
</style>
