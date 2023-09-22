<template>
  <!-- <Navbar/> -->
  <router-view></router-view>
  
</template>

<script>

//import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    //Navbar,
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;

  /* background-color: #fcecdc;
  background-image: url('./assets/game_background_1.png');
  background-size: cover;
  background-position: top; */
  min-height: 100vh;
  overflow-y: auto;

}

</style>
