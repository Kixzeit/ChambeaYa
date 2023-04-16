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
background: 
      linear-gradient(135deg,#0000 20.5%,#303737 0 29.5%,#0000 0) 0 15px,
      linear-gradient( 45deg,#0000 8%,#303737 0 17%, #0000 0 58%) 30px 0,
      linear-gradient(135deg,#0000 8%,#303737 0 17%, #0000 0 58%,#303737 0 67%,#0000 0),        
      linear-gradient( 45deg,#0000 8%,#303737 0 17%, #0000 0 58%,#303737 0 67%,#0000 0 83%,#303737 0 92%,#0000 0),
      #6b35b5;
background-size: 60px 60px;

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