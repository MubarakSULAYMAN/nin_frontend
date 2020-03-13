import QueryPage from './components/Querypage.vue'
import Table from './components/Table.vue'

const routes = [{
    path: '/',
    component: QueryPage
}, {
    path: '/table/:nin',
    component: Table
}]

export default routes