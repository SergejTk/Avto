<template>
  <div id="app">
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/avto">Avto</router-link>
    </div>
    <router-view /-->
    <div class="contaner">
      <avto></avto>
      <listavto></listavto>
    </div>
  </div>
</template>
<script>
import Avto from './views/Avto.vue';
import ListAvto from './views/ListAvto.vue';
//import VuePaginator from 'vuejs-paginator';

export default {
  data(){
    return{

    }
  },
  components: {
    Avto,
    'listavto': ListAvto
  }
}
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
