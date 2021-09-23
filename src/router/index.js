import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: First
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
      path: '/main',
      name: 'Main',
      component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue')
    },
  {
    path: '/event:eventTitle',
    name: 'mainEvent',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue')

  },
  {
    path:'/login',
    name:'Login',
    component: () =>import('../views/Login.vue')
  },
  {
    path:'/auth',
    name:'Auth',
    component: () =>import('../views/Auth.vue')
  },
  {
    path:'/funlogin',
    name:'LoginFunfun',
    component: () =>import('../components/login/LoginFunfun.vue')
  },
  {
    path:'/loginkakao',
    name:'LoginKakao',
    component: () =>import('../components/login/LoginKakao.vue')
  },
  {
    path: '/detail-page',
    name: 'detail_page',

    component: () => import('../views/Detail_page.vue')
  },
  //  라우터 쿼리 / 파람 예시
  {
    path: '/detail-page',
    name: 'detail_page_Q',
    component: () => import('../views/Detail_page.vue')
  },
  {
    path: '/detail-page/:memberId',
    name: 'detail_page_P',
    component: () => import('../views/Detail_page.vue')
  },
  //  라우터 쿼리 / 파람 예시 여기까지
  {
    path: '/funding-detail-page',
    name: 'DetailFundingPage',
    component: () => import('../views/DetailFundingPage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
