<template>
  <nav class="nav">
    <BambeeLogo class="nav-logo"/>
  </nav>
</template>

<script>
import BambeeLogo from "./../assets/bambee.svg";

export default {
  name: "bb-navigation",
  components: {
    BambeeLogo
  }
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: var(--navigation-background-color, purple);
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 4rem;
  height: 4rem;
}

.nav-logo {
  height: 50%;
}
</style>
