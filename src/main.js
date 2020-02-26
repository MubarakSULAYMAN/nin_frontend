import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import VueRouter from 'vue-router'

// import Querypage from './components/Querypage.vue'
// import Errorpage from './components/Errorpage.vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Vue.use(VueRouter); 

Vue.config.productionTip = false

// const router = new VueRouter({
//   routes: [
//     {path: '/', component: Querypage},
//     {path: '*', component: Errorpage}
//   ],
//   mode: 'history'
// });

new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')
