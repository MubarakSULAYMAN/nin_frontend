import QueryPage from '@/pages/Querypage'
import Table from '@/pages/Table'

const routes = [
    {
        path: '/',
        component: QueryPage
    },
    {
        path: '/search/:option',
        component: Table
    }
]

export default routes