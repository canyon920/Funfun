import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/views/Main";
import Home from "@/views/Home";
import About from "@/views/About";
import Singup from "@/views/Singup";
import AboutPage from "@/components/about/AboutPage";
import Login from "@/views/Login";
import FundingList from "@/views/FundingList";
import DetailFundingPage from "@/views/DetailFundingPage";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/aboutpage',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/menu',
    name: 'about',
    component: About
  },
  {
    path: '/join',
    name: 'Signup',
    component: Singup
  },
  {
    path:'/login',
    name:'Login',
    component: Login
  },
  {
    path: '/event:eventTitle',
    name: 'mainEvent',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue')

  },
  {
    path: '/fundinglist',
    name: 'FundingList',
    component: () => import(/* webpackChunkName: "about" */ '../views/FundingList.vue')
  },
  {
    path:'/funlogin',
    name:'LoginFunfun',
    component: () =>import('../components/login/LoginFunfun.vue')
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
    path: '/funding-detail-page/:fundingId',
    name: 'DetailFundingPage',
    // component: () => import('../views/DetailFundingPage')
    component: DetailFundingPage
  },
  {
    path: '/mypage-list',
    name: 'menulist',
    component: ()=> import('../components/menulist/menulist')
  },
  {
    path: '/my-funding-list/:memberId',
    name: 'FundingList',
    component: FundingList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
