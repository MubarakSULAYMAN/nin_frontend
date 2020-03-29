import QueryPage from '@/pages/Querypage'
import Table from '@/pages/Table'
import NotFound from './components/Errorpage.vue'

const routes = [
    {
        path: '/',
        component: QueryPage
    },
    {
        path: '/search/:option',
        component: Table
    },
    {
        path: '*',
        component: NotFound
    }
]

export default routes