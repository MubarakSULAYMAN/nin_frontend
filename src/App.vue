<template>
  <div id="app">
    <b-container fluid class="main_app">
      <div>
        <b-row class="h-100 w-100" no-gutters>
          <b-col sm="4" md="3" lg="2">
            <Sidenav />
          </b-col>
          <b-col sm="8" md="9" lg="10" class="section ">
            <router-view></router-view>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
  import Sidenav from '@/components/Sidenav'

  export default {
    name: 'app',
    components: {
      Sidenav
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
