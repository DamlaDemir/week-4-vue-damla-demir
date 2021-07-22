<template>
  <ul class="nav-bar">
    <li>
      <router-link to="/"> Home </router-link>
    </li>
    <li>
      <router-link to="/starships"> Star Ships </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.nav-bar {
  background-color: #030329; /*282a35*/
  display: flex;
  justify-content: center;
  list-style: none;
  font-size: 20px;
  color: white;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 2;
  gap: 25px;
}

.nav-bar li {
  padding: 15px;
}
.nav-bar li a {
  color: white;
  text-decoration: none;
}

.nav-bar li:hover {
  background-color: #ddd;
  color: black;
}
</style>
