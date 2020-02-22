<template>
  <div id="app">
    <b-container fluid class="main_app">
      <b-row class="h-100 w-100">
        <b-col sm="4" md="3" lg="2">
          <Sidenav />
        </b-col>
        <b-col sm="8" md="9" lg="10" class="section ">
          <Querypage />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Querypage from './components/Querypage'
  import Sidenav from './components/Sidenav'
  // import Topnav from './components/Topnav'

  export default {
    name: 'app',
    components: {
      Querypage,
      Sidenav,
      // Topnav,
    }
  }

</script>

<style scoped>
  .main_app {
    height: 100vh;
    /* height:100%; */
    position: absolute;
  }

  /* .section {
  height: 100%;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */

</style>
