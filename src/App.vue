<template>
  <div>      
    <router-view />    
  </div>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.loader {
  position: fixed;
  top:0px;
  right:0px;
  width:100%;
  height:100%;
  background-color:#ffffff;
  background-image: url('assets/wait.gif');
  background-repeat:no-repeat;
  background-position:center;
  z-index:10000000;
  opacity: 0.4;
  filter: alpha(opacity=40);
}

body{
background: #47a8ff;
background: -webkit-radial-gradient(circle, #47a8ff 0%, #1b19ab 100%);
background: radial-gradient(circle, #47a8ff 0%, #1b19ab 100%);
}

.vidrio{
  background: rgba(0, 0, 0, 0.75);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(0, 0, 0, 0.25);
  width:100%;
  height: 100vh;
}

</style>