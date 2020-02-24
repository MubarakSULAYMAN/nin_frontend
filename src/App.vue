<template>
  <div id="app">
    <b-container fluid class="main_app">
      <!-- <Table :data_fetched="responses[index]"/> -->

      <b-row class="h-100 w-100" no-gutters="false">
        <b-col sm="4" md="3" lg="2">
          <Sidenav />
        </b-col>
        <b-col sm="8" md="9" lg="10" class="section ">
          <Querypage :responses="responses[index]"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
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
        responses: [],
        index: 0
      }
    },

    mounted: function () {
      fetch('http://127.0.0.1:5000/restricted_raw', {
          method: 'get'
        })
        .then((response) => {
          // eslint-disable-next-line no-console
          // console.log(response.json)
          return response.json()
        })
        .then((dataResponse) => {
          this.responses = dataResponse.query_term
        })
      // .then(response => this.posts = response.data.query_term)
      // .catch(error => this.posts = [{tracking_id: "No Query result found."}])
      // .finally(() => console.log("Data loaded completely."));
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
