<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/page_1">page_1</router-link>
      <router-link to="/page_2">page_2</router-link>
    </div>
    <router-view/>
    <!-- <Loading></Loading> -->
  </div>
</template>



<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    display: inline-block;
    margin-right: 20px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-active {
      color: #42b983;
    }
  }
}
</style>
