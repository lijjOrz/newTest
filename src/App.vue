<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/page_1">page_1</router-link>
      <router-link to="/page_2">page_2</router-link>
      <router-link to="/page_3">page_3</router-link>
    </div>
    <router-view/>
    <!-- <Loading></Loading> -->
  </div>
</template>



<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,
body {
    height: 100%;
    width: 100%;
    -webkit-overflow-scrolling: touch
}
#app {
    height: 100%;
    width: 100%;
    position: relative;
}




#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px 0;
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
