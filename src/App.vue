<template>
  <div id="app">
    <b-container class="main_app">

      <!-- <Querypage/> -->
      <Nav/>

    </b-container> 
  </div>
</template>

<script>
// import Querypage from './components/Querypage'
import Nav from './components/Nav'

export default {
  name: 'app',
  components: {
    // Querypage
    Nav
  }
}
</script>

<style>

</style>
