import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/views/Main";
import Home from "@/views/Home";
import About from "@/views/About";
import Singup from "@/views/Singup";
import AboutPage from "@/components/about/AboutPage";
import Login from "@/views/Login";
import FundingList from "@/views/mypage/FundingList";
import DetailFundingPage from "@/views/DetailFundingPage";
import Shop from "@/components/shoplist/Shop";
import Menulist from "@/components/menulist/Menulist"
import EventPage from "@/components/eventlist/EventPage";
import Detail_page from "@/views/Detail_page";
import LoginFunfun from "@/components/login/LoginFunfun";
import Auth from "@/views/Auth";
import ShopFirst from "@/components/shoplist/ShopFirst";
import FundingListPage from "@/views/FundingListPage";
import Admin from "@/views/Admin";
import User from "@/components/admin/User";
import Product from "@/components/admin/Product";
import Funding from "@/components/admin/Funding";
import Complete from "@/components/admin/Complete";
import Editpage from "@/components/Mypage/Editpage";
import FindId from "@/components/login/FindId";
import FindPassword from "@/components/login/FindPassword";
import FriendList from "@/views/mypage/FriendList";
import MywishtList from "@/views/mypage/MywishtList";
import JoinedmyList from "@/views/mypage/JoinedmyList";
import Choose from "@/views/Choose";
import PurchaseList from "@/views/mypage/PurchaseList";


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
    name: 'EventPage',
    component: EventPage

  },
  {
    path: '/fundinglist/:memberId',
    name: 'FundingList',
    component: FundingList
  },
  {
    path: '/friendlist/:memberId',
    name: 'FriendList',
    component: FriendList
  },
  {
    path: '/wishlist/:memberId',
    name: 'MywishList',
    component: MywishtList
  },
  {
    path: '/joinlist/:memberId',
    name: 'JoinedList',
    component: JoinedmyList
  },
  {
    path: '/choose',
    name: 'Choose',
    component: Choose
  },
  {
    path: '/purchaselist/:memberId',
    name: 'PurchaseList',
    // component: () => import(/* webpackChunkName: "about" */ '../views/PurchaseList.vue')
    component: PurchaseList
  },
  {
    path:'/funlogin',
    name:'LoginFunfun',
    component: LoginFunfun
  },


  {
    path: '/detail-page/:productId',
    name: 'detail_page',

    component: Detail_page
  },
  // //  라우터 쿼리 / 파람 예시
  // {
  //   path: '/detail-page',
  //   name: 'detail_page_Q',
  //   component: Detail_page
  // },
  // {
  //   path: '/detail-page/:productId',
  //   name: 'detail_page_P',
  //   component: Detail_page
  // },
  // //  라우터 쿼리 / 파람 예시 여기까지
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
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/shop',
    name: 'ShopFirst',
    component: ShopFirst
  },
  {
    path: '/funding',
    name: 'FundingListPage',
    component: FundingListPage
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/user',
    name: 'User',
    component: User
  },
  {
    path: '/admin/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/admin/funding',
    name: 'Funding',
    component: Funding
  },
  {
    path: '/admin/complete-funding',
    name: 'Complete',
    component: Complete
  },
  {
    path: '/mypage/edit/:memberId',
    name: 'Editpage',
    component: Editpage
  },
  {
    path: '/find/id',
    name: 'FindId',
    component: FindId
  },
  {
    path: '/find/password',
    name: 'FindPassword',
    component: FindPassword
  }
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
