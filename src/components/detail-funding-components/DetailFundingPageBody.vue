<template>

  <div class="content-body">
    <div class="body-detail">
      <div class="detail-menu">
        <div class="menu-main">
          <div class="main-box menu-first" @click="$emit('bringmainChangeImg1')">상품설명</div>
<!--          <div class="main-box menu-second" @click="$emit('bringmainChangeImg2')">상세정보</div>-->
        </div>
      </div>
      <!--          여기 동적 처리          -->
      <div class="detail-img">
        <img class="img-main" v-bind:src="bringBodyInfo.preforchangMainUrl" alt="#">
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "DetailFundingPageBody",
  props:{
    bringBodyInfo:{
      type:Object
    }
  },
  emits:[
      'bringmainChangeImg1' , 'bringmainChangeImg2'
  ],
  data(){
      return{

      }
  },
  methods:{

  },
  mounted() {
    this.$emit('bringmainChangeImg1')
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