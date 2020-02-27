<template>
  <div id="app">
    <b-container fluid class="main_app">
      <div>
        <b-row class="h-100 w-100" no-gutters>
          <b-col sm="4" md="3" lg="2">
            <Sidenav />
          </b-col>
          <b-col sm="8" md="9" lg="10" class="section ">
            <Querypage />
          </b-col>
        </b-row>
      </div>
      <!-- </div> -->
    </b-container>
  </div>
</template>

<script>
  import Querypage from './components/Querypage'
  import Sidenav from './components/Sidenav'

  export default {
    name: 'app',
    components: {
      Querypage,
      Sidenav
    },

    data() {
      return {
        loading: false,
      }
    },

    // props: {
    //   data_fetched: Array,
    //   loading_info: Boolean
    // }
  }

</script>

<style scoped>
  .main_app {
    height: 100vh;
    /* height:100%; */
    width: 100%;
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
