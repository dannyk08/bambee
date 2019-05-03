<template>
  <button v-if="timeStamp" class="schedule-pill">{{timeStamp}}</button>
</template>

<script>
export default {
  name: "bb-schedule-pill",
  props: ["timeStamp"]
};
</script>


<style lang="scss" scoped>
$spacing: 0.5rem;
$active-background-color: purple;

.schedule-pill {
  border-radius: var(--border-radius);
  margin: $spacing;
  padding: $spacing;
  border: 1px solid whitesmoke;
  height: 3rem;
  flex: 1 1 calc(100% / 3 - #{$spacing * 2});
  transition: 0.5s ease-out;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    background: $active-background-color;
    border-color: $active-background-color;
    color: white;
  }

  &:focus {
    outline: none;
  }
}
</style>

