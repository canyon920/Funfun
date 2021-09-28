import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCookies from 'vue-cookies';
import VueCompositionApi from '@vue/composition-api';
import VueKakaoSdk from 'vue-kakao-sdk'



Vue.config.productionTip = false
Vue.use(VueCompositionApi);
Vue.use(VueCookies);

const apiKey = '9337eb4fe677cb4fc499a1fc8b8ac9d7'
Vue.use(VueKakaoSdk, { apiKey }) // apiKey 를 반드시 입력해줘야한다.

// window.Kakao.init(	'9337eb4fe677cb4fc499a1fc8b8ac9d7');

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
