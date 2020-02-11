<template>
  <div id="app">
    <b-container class="main_app">
      <!-- <b-row class="justify-content-md-center">
        <b-col-md-6>
          <b-card> -->
          <!-- <b-card title="Card Title" body-class="text-center" header-tag="nav"> -->
        
          <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
          <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        
          <!-- <Nav/> -->
          <!-- <Form/> -->
          

          <!-- </b-card>
        </b-col-md-6>
      </b-row> -->
      <Dashboard/>
    </b-container> 
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Nav from './components/Nav'
import Form from './components/Form'

export default {
  name: 'app',
  components: {
    // HelloWorld
    // Nav,
    Form
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
