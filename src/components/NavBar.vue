<template>
  <div class="NavBar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Trivia App</router-link>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
         <router-link class="nav-item nav-link" to="/chuck">Chuck App</router-link>
        <a class="nav-item nav-link" href="#">Features</a>
        <a class="nav-item nav-link" href="#">Pricing</a>
        <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

}
</script>
<style scoped>

</style>
