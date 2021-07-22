<template>
  <div>
    <header>
      <navbar />
    </header>
    <main class="content-wrapper"><router-view /></main>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "Layout",
  components: {
    Navbar,
  },
};
</script>

<style></style>
