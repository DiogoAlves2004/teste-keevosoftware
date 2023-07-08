<script>
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
  import Navbar from './components/navbar/Navbar.vue'

  import Products from './services/products.js'



  export default {

    name: 'App',
    components: {
      Navbar
    },

    mounted(){

    }

  }

</script>

<template>
  <div class="container">
    <Navbar />
    
    <RouterView />
    
  </div>
</template>

<style scoped>
.container{
  background: #360D5A;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
