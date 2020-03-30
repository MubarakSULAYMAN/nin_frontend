import QueryPage from '@/pages/Querypage'
import Table from '@/pages/Table'
import Activities from '@/components/Activities.vue'
import Report from '@/components/Report.vue'
import Comments from '@/components/Comments.vue'
import Graph from '@/components/Graph.vue'
import Pie from '@/components/PieChart.vue'
import Bar from '@/components/BarChart.vue'
import NotFound from '@/components/Errorpage.vue'

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
        path: '/my-activities',
        component: Activities
    },
    {
        path: '/overview-report',
        component: Report
    },
    {
        path: '/overview-comments',
        component: Comments
    },
    {
        path: '/overview-graph',
        component: Graph
    },
    {
        path: '/overview-pie-chart',
        component: Pie
    },
    {
        path: '/overview-bar-chart',
        component: Bar
    },
    {
        path: '*',
        component: NotFound
    }
]

export default routes