<template>
  <div id="app">
    <b-container fluid class="main_app">
      <div id="content-wrap">
        <b-row class="h-100 w-100" no-gutters>
          <b-col sm="4" md="3" lg="2">
            <!-- <Sidenav /> -->
          </b-col>
          <b-col sm="8" md="9" lg="10" class="section">
            <Topnav />
            <router-view></router-view>
          </b-col>
        </b-row>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </b-container>
  </div>
</template>

<script>
  import Topnav from '@/components/Topnav'
  // import Sidenav from '@/components/Sidenav'
  import Footer from '@/components/Footer'

  export default {
    name: 'app',
    components: {
      Topnav,
      // Sidenav,
      Footer
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
    position: relative;
    min-height: 100%;
  }

  #content-wrap {
    padding-bottom: 2.5rem;
  }

  #footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
  }

</style>
