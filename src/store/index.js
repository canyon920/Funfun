import Vue from 'vue'
import Vuex from 'vuex'
import member from "@/store/member";
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    member
  },
  // localStorage 에 저장
  plugins:[
      createPersistedState({
        paths:["member"]
      }),
  ]
})
/*var cat = localStorage.getItem('myCat'); //조회
localStorage.setItem('myCat', 'Tom'); //추가
localStorage.removeItem('myCat'); //삭제
localStorage.clear(); // 전체삭제
//===========> 보안위해 토큰은 로컬에 저장하면 안되기에 따로 관리하는게 맞는것 같다.
출처: https://coding-restaurant.tistory.com/264 [코딩맛집]*/