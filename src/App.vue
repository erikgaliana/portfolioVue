<template>
  <div id="app">
   
    <NavBar></NavBar>
    <Home></Home>
    <!--- <router-view /> -->
  </div> <!-- end app -->
</template>  

<script>


import NavBar from './components/Navbar'
import Home from './components/Home'

export default {
  name: 'app',
  components :{
    NavBar,Home
  }
}
</script>

<style>

</style>
