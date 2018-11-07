/*
路由器对象模块
 */
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import Msite from  '../pages/Msite/Msite.vue'
  import Order from  '../pages/Order/Order.vue'
  import Profile from  '../pages/Profile/Profile.vue'
  import Search from  '../pages/Search/Search.vue'
  import login  from  '../pages/login/login.vue'
  Vue.use(VueRouter)
  export default new VueRouter ({
    routes: [{
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
      {
        path: '/order',
        component: Order,
        meta: {
          showFooter: true
        }
      },
      {
        path: '/profile',
        component: Profile,
        meta: {
          showFooter: true
        }
      },
      {
        path: '/search',
        component: Search,
        meta: {
          showFooter: true
        }
      },
      {
        path: '/login',
        component: login
      },
      {
        path: '/',
        redirect: '/msite'
      }
    ]
  })
