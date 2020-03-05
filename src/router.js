import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from './views/Home.vue'
// import Querypage from './views/Querypage.vue'
import Querypage from '@/components/Querypage'
import Table from '@/components/Table'
// import Queryresult from './views/Queryresults'
// import Table from './views/Table'

Vue.use(VueRouter)

export default new VueRouter({
    // node: 'history',
    base: process.env.BASE_URL,

    routes: [{
            path: '/',
            redirect: {
                name: "Querypage",
                component: Querypage
            }
        },

        {
            path: '/querypage',
            name: 'Querypage',
            component: Querypage
        },

        {
            path: '/table',
            name: 'Table',
            component: Table
        }
    ]
})