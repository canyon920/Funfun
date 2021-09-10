import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.prototype.$http = axios

new Vue({
  el:'#app',
  template:'<App/>',
  components:{App},
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
