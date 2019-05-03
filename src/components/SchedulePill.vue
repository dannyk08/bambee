<template>
  <button class="schedule-pill">{{timeStamp}}</button>
</template>

<script>
export default {
  name: "bb-schedule-pill",
  props: ["timeStamp"]
};
</script>


<style lang="scss" scoped>
.schedule-pill {
  border-radius: var(--border-radius);
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid whitesmoke;
  height: 3rem;
  flex: 1;
  transition: 0.5s ease-out;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    background: purple;
    color: white;
  }
}
</style>

