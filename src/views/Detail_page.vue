<template>
  <div class="inner">
    <div class="container-content">
      <div class="content-head">
        <div class="head-detail">
<!--          여기 썸네일과 서브 이미지 넘겨줘야함      -->
          <Detail-page-left/>

          <!--          여기 동적 처리   상품 , 펀딩 , 펀딩작성     -->
          <Detail-page-right/>
<!--바디는 컴포넌트화 할지???-->

        </div>
      </div>
      <div class="content-body">
        <div class="body-detail">
          <div class="detail-menu">
            <div class="menu-main">
              <div class="main-box menu-first" @click="changeImg1">상품설명</div>
              <div class="main-box menu-second" @click="changeImg2">상세정보</div>
            </div>
          </div>
          <!--          여기 동적 처리          -->
          <div class="detail-img">
            <img src="../assets/example-img/chunsic.png" alt="#">
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailPageRight from "@/components/detail-components/DetailPageRight";
import DetailPageLeft from "@/components/detail-components/DetailPageLeft";

export default {
  name: "detail_page",
  components: {DetailPageLeft, DetailPageRight},
  data () {
    return{

      //콤보박스***
      select: ['Vuetify'],
      items: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ],
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