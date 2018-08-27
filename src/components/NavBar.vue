<template>
  <div class="NavBar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Trivia App</router-link>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
         <router-link class="nav-item nav-link" to="/chuck">Chuck App</router-link>
          <Search />
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import Search from "./Search.vue";
export default {
  name: "NavBar",
  components: {
    Search
  }
};
</script>
<style scoped>
</style>
