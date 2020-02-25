<template>
  <div id="app">
    <b-container fluid class="main_app">
      <!-- <Table :data_fetched="responses[index]"/> -->
      <!-- <Table :data_fetched="queried_data" :loading_info="loading" /> -->

      <b-row class="h-100 w-100" no-gutters>
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
  import axios from "axios";

  // import Table from './components/Table'
  import Querypage from './components/Querypage'
  import Sidenav from './components/Sidenav'

  export default {
    name: 'app',
    components: {
      // Table,
      Querypage,
      Sidenav,
    },

    data() {
      return {
        loading: false,
        queried_data: null
      }
    },

    mounted: function () {
      this.loading = true,

      // let url = 'http://127.0.0.1:5000/filter_by_nin/44645520375'

        axios
        // .get('http://127.0.0.1:5000/restricted_raw')
        .get('http://127.0.0.1:5000/filter_by_nin/44645520375')
        // .get(url)
        .then(response => (this.queried_data = response.data.query_term))
        // eslint-disable-next-line no-console
        .catch(error => console.log(error))
        .finally(() => this.loading = false)
    }
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
