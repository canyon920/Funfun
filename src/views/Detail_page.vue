<template>
  <div class="inner">
    <div class="container-content">
      <div class="content-head">
        <div class="head-detail">
<!--          여기 썸네일과 서브 이미지 넘겨줘야함 총 4개     -->
          <Detail-page-left/>

          <!--          여기 동적 처리   상품 , 펀딩 , 펀딩작성     -->
          <Detail-page-right/>
        </div>
      </div>
<!--      여기 동적 처리 바디 이미지 바디 상세이미지 넘겨줘야함-->
      <DetailPageBody/>
    </div>
  </div>
</template>

<script>
import DetailPageRight from "@/components/detail-components/DetailPageRight";
import DetailPageLeft from "@/components/detail-components/DetailPageLeft";
import DetailPageBody from "@/components/detail-components/DetailPageBody";

export default {
  name: "detail_page",
  components: {DetailPageBody, DetailPageLeft, DetailPageRight},
  data () {
    return{
      detailData:'',

      //콤보박스***
      // select: ['Vuetify'],
      // items: [
      //   'Programming',
      //   'Design',
      //   'Vue',
      //   'Vuetify',
      // ],
      //여기까지 콤보박스***

      selectContent : '',
      bodyImg: "",
      thumbImg: "",
      subImgs:[]
    }
  },
  methods:{
    changeImg1(){
      this.bodyImg = ""
    },
    changeImg2(){
      this.bodyImg = ""
    },
    changeImg3(){
      this.bodyImg = ""
    },
    async getData() {
      this.$store.dispatch('member/getTokens')
    }
  }
}

// //콤보박스
// export default {
//   data () {
//     return {
//
//     }
//   },
// }
</script>

<style scoped>

.inner {
  width: 1100px;
}

.inner .container-content .content-head .head-detail {
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  justify-content: space-between;

}

/*body*/
.inner .container-content .content-body .body-detail {

  border: 2px solid rgb(229 114 0);
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
  cursor: pointer;
}
.inner .container-content .content-body .body-detail .detail-menu .menu-main .menu-first {
  border-right: 2px solid rgb(229 114 0);
}
.inner .container-content .content-body .body-detail .detail-img {
  border-top: 1px solid rgb(229 114 0);
}


</style>