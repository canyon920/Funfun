import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCookies from 'vue-cookies';
import VueCompositionApi from '@vue/composition-api';



Vue.config.productionTip = false
Vue.use(VueCompositionApi);
Vue.use(VueCookies);

// window.Kakao.init(	'9337eb4fe677cb4fc499a1fc8b8ac9d7');

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
