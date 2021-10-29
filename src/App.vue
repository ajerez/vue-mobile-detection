<template>
  <div id="app">
    <!-- Use in template -->
    <div v-if="$isMobile()">MOBILE</div>
    <div v-else>DESKTOP OR TABLET</div>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    // Use in js
    console.log(this.$isMobile());
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 5000px;
}
</style>
