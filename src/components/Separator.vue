<template>
  <div class="separator">
    <hr class="separator__break">
    <label class="separator__label" v-if="label && label.length">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: "bb-separator",
  props: ["label"]
};
</script>

<style lang="scss" scoped>
$component-height: 4rem;
$label-color: lightgray;
$label-background: lighten(lightgray, 12.5%);

.separator {
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: $component-height;
  justify-content: center;
  width: 100%;
  flex: 1;

  &__break {
    width: 100%;
    max-width: 25rem;
  }

  &__label {
    position: absolute;
    left: 50%;
    width: 100%;
    max-width: 3rem;
    height: $component-height/2;
    background: $label-background;
    color: $label-color;
    top: 50%;
    transform: translate(-50%, -50%);
    line-height: $component-height/2;
    text-align: center;
  }
}
</style>

