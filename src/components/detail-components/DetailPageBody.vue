<template>

  <div class="content-body">
    <div class="body-detail">
      <div class="detail-menu">
        <div class="menu-main">
          <div class="main-box menu-first">상품설명</div>
<!--          <div class="main-box menu-second" @click="$emit('bringmainChangeImg2')">상세정보</div>-->
        </div>
      </div>
      <!--          여기 동적 처리          -->
      <div class="detail-img">
        <img v-show="bringBodyInfo.premainImgUrl.length === 1" class="img-main" v-bind:src="bringBodyInfo.premainImgUrl[0]" alt="#">
<!--        <div v-show="bringBodyInfo.premainImgUrl.length !== 1" v-for="(main, mkey) in bringBodyInfo" class="img-main" :key="mkey">-->
          <img v-show="bringBodyInfo.premainImgUrl.length !== 1" class="img-main" v-bind:src="main" v-for="(main, mkey) in bringBodyInfo.premainImgUrl" :key="mkey">
<!--        </div>-->
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "DetailPageBody",
  props:{
    bringBodyInfo:{
      type:Object
    }
  },
  emits:[
  ],
  data(){
      return{

      }
  },
  methods:{

  },
  mounted() {
  }
}
</script>

<style scoped>

/*body*/
.inner .container-content .content-body .body-detail {

  border: 2px solid rgb(229, 114, 0);
  margin-top: 30px;

}
.inner .container-content .content-body .body-detail .detail-menu {
  margin: 5px 10%;

}
.inner .container-content .content-body .body-detail .detail-menu .menu-main {
  display: flex;
  justify-content: center;

}
.inner .container-content .content-body .body-detail .detail-menu .menu-main .main-box {
  padding-left: 10%;
  padding-right: 10%;
  /*cursor: pointer;*/
}
.inner .container-content .content-body .body-detail .detail-menu .menu-main .menu-first {
  /*border-right: 2px solid rgb(229, 114, 0);*/
}
.inner .container-content .content-body .body-detail .detail-img {
  text-align: center;
  border-top: 1px solid rgb(229, 114, 0);
}
.inner .container-content .content-body .body-detail .detail-img .img-main {
  width: 1080px;
}

@media screen and (max-width: 800px){
  .inner .container-content .content-body .body-detail {
    width: 96vw;

  }
  .inner .container-content .content-body .body-detail .detail-img .img-main {
    width: 90vw;
  }

}

</style>