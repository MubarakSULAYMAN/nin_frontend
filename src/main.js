import Vue from 'vue'
import App from './App.vue'

import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {
  store
} from './store/store'

import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.use(VueRouter)

// Vue.use(this.$router, this.route)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  // router,
  store,
  // routes,
  router,
  render: h => h(App),
}).$mount('#app')