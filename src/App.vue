<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/counter">Contador</router-link> |
    <router-link to="/loading">Loading</router-link> |
    <router-link to="/login">Login Form</router-link>
    <router-link to="/module">Modulos</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
