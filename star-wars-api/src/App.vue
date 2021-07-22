<template>
  <div id="app">
    <layout />
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style>
body {
  font-family: "Otomanopee One", sans-serif;
  font-size: 14px;
  background-image: url(./assets/images/wallpaper.jpg);
  background-attachment: fixed;
  background-size: cover;
}

* {
  box-sizing: border-box;
}
</style>
