<template>
  <div id="app">
    <main-tab-bar />
    <router-view />
  </div>
</template>
<script>
import MainTabBar from "./components/MainTabBar.vue";
export default {
  components: { MainTabBar },
  name: "App",
  component: {
    MainTabBar
  }
};
</script>

<style lang="scss">
@import "./assets/css/base.css";
</style>
