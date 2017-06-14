
import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import Page8 from './views/nav3/page8.vue'
import Page9 from './views/nav3/page9.vue'
import Page7 from './views/nav2/sas.vue'
import echarts from './views/charts/echarts.vue'
let routes = [
    {
        path: '/login',
        component: Login,
        name: '登录',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '404',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '系统设置',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '权限管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' },
            { path: '/sas', component: Page7, name: '页面6' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '基础数据',
        iconCls: 'fa fa-address-card',
        children: [
            { path: '/page6', component: Page6, name: '基础数据' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '客户管理',
        iconCls: 'fa fa-address-card',
        children: [
            { path: '/page8', component: Page8, name: '客户管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '中转外发商管理',
        iconCls: 'fa fa-address-card',

        children: [
            { path: '/page9', component: Page9, name: '中转外发商管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        //leaf: true,只有一个节点
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
]
export default routes
