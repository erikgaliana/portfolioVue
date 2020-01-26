<template>

<div>

    <!-- Header -->

        <Header />

    <!-- Portfolio Grid -->

        <PortfolioList/>

    <!-- About -->

        <About/>

     <!-- Contact -->
  
        <Contact />

   

  </div>
</template>
<script>

import Header from './Header'
import PortfolioList from './PortfolioList'
import About from './About'
import Contact from './Contact'



export default {
  name: 'app',
  components :{
    Header,PortfolioList,About,Contact
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
} */
</style>