<template>
  <div id="app">
    <b-container fluid class="main_app">
      <div>
        <b-row class="h-100 w-100" no-gutters>
          <b-col sm="4" md="3" lg="2">
            <Sidenav />
          </b-col>
          <b-col sm="8" md="9" lg="10" class="section">
            <Topnav/>
            <router-view></router-view>
          </b-col>
        </b-row>
      </div>
      <div class="fixed-bottom">
        <Date />
      </div>
    </b-container>
  </div>
</template>

<script>
  import Topnav from '@/components/Topnav'
  import Sidenav from '@/components/Sidenav'
  import Date from '@/components/Date'

  export default {
    name: 'app',
    components: {
      Topnav,
      Sidenav,
      Date
    },

    data() {
      return {
        loading: false,
      }
    }
  }

</script>

<style scoped>
  .main_app {
    height: 100vh;
    width: 100%;
    position: absolute;
  }

</style>
