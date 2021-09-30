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
import Shop from "@/components/shoplist/Shop";
import Menulist from "@/components/menulist/Menulist"
import EventPage from "@/components/eventlist/EventPage";


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
    path: '/event/:eventId',
    name: 'mainEvent',
    component: EventPage

  },
  {
    path: '/fundinglist',
    name: 'FundingList',
    component: () => import(/* webpackChunkName: "about" */ '../views/FundingList.vue')
  },
  {
    path: '/friendlist',
    name: 'FriendList',
    component: () => import(/* webpackChunkName: "about" */ '../views/FriendList.vue')
  },
  {
    path: '/wishlist',
    name: 'MywishList',
    component: () => import(/* webpackChunkName: "about" */ '../views/MywishtList.vue')
  },
  {
    path: '/joinlist',
    name: 'JoinedList',
    component: () => import(/* webpackChunkName: "about" */ '../views/JoinedmyList.vue')
  },
  {
    path: '/choose',
    name: 'Choose',
    component: () => import(/* webpackChunkName: "about" */ '../views/Choose.vue')
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
    path: '/detail-page/:productId',
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
    component: Menulist
  },
  {
    path: '/my-funding-list/:memberId',
    name: 'FundingList',
    component: FundingList
  },
  {
    path: '/shop-product-lis/:categoryId',
    name: 'Shop',
    component: Shop
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
