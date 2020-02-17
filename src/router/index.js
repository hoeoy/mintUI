import Vue from 'vue'
import Router from 'vue-router'

/* Router Modules */
import businessRouter from './modules/business'
import personRouter from './modules/person'
import governmentRouter from './modules/government'

Vue.use(Router)

const router = new Router({
    routes:[
        // ...businessRouter,   // 企业
        // ...personRouter,   // 个人
        // ...governmentRouter,  // 政府
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: 'about' */ '../views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
        },
        {
            path: '/login/person',
            name: '/login/person',
            component: () => import(/* webpackChunkName: 'about' */ '../views/login/Person.vue')
        },
        {
            path: '/login/government',
            name: '/login/government',
            component: () => import(/* webpackChunkName: 'about' */ '../views/login/Government.vue')
        }
    ]
});
// router.beforeEach((to, from, next) => {
//     //全局异常处理
//   alert("asfdd")
// });
//
// router.afterEach(() => {
//   NProgress.done() // finish progress bar
// })

export default router
