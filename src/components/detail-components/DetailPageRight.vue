<template>
  <!--          여기 동적 처리   상품 , 펀딩 , 펀딩작성     -->
  <div class="detail-right">
    <div class="right-content">
      <div class="content-top">
        <div class="title-box">
          "언텍트 맞춤선물" 카카오프렌즈 골드라인 그란데 머그 2종 택일
        </div>
        <div class="subtitle-box">
          <div class="brand-box">
            카카오 프렌즈
          </div>
          <div class="fundingcount-box">
            누적 펀딩수 : 3300 건
          </div>
        </div>
      </div>
      <div class="price-box" style="font-size: 80px">
        12800 원
      </div>

      <div class="content-center">
        <div class="category-box">
          <router-link to="/" style="text-decoration: none; color: black;">카테고리 상품들 보러가기 >></router-link>
        </div>
      </div>

      <!--                옵션 있을 때만 보이도록 -->
<!--      <div class="content-center">-->
<!--&lt;!&ndash;        <v-combobox&ndash;&gt;-->
<!--&lt;!&ndash;            v-model="select"&ndash;&gt;-->
<!--&lt;!&ndash;            :items="items"&ndash;&gt;-->
<!--&lt;!&ndash;            label="옵션선택"&ndash;&gt;-->
<!--&lt;!&ndash;            outlined&ndash;&gt;-->
<!--&lt;!&ndash;            dense&ndash;&gt;-->
<!--&lt;!&ndash;        ></v-combobox>&ndash;&gt;-->
<!--        <div class="category-box">-->
<!--          카테고리 상품들 보러가기>>-->
<!--        </div>-->
<!--      </div>-->

<!--      여기 총가격 옵션선택되어짐에 따라 금액측정     -->
<!--      <div class="final-check-product" style="font-size: 50px; text-align: end" v-if="select.length">-->
<!--        {{ select }}-->
<!--      </div>-->

      <div class="content-bottom">
        <div class="bottom-button">
          <div class="button-box like-box" >
            <!--                    이버튼에 클릭하면 icon 사라지도록 -->
            <v-btn
                color="error"
                elevation="2"
                fab
                large
                tile
                class="like-button"
            >
              <div class="like-button-box">
                <div class="like-love" style="font-size: 25px">
                  ❤
                </div>
                <div class="like-count" style="font-size: 5px">
                  11,001
                </div>
              </div>


            </v-btn>

          </div>
          <div class="button-box giveme-box">
            <div class="my-2">
              <v-btn
                  color="error"
                  dark
                  x-large
                  class="giveme-button"
              >
                나에게 선물하기
              </v-btn>
            </div>
          </div>
          <div class="button-box funding-box">
            <div class="my-2">
              <v-btn
                  color="error"
                  dark
                  x-large
                  class="funding-button"
              >
                🎁펀딩시작하기
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailPageRight",
  data () {
    return{

      //콤보박스
      // select: [],
      // items: [
      //   'Programming',
      //   'Design',
      //   'Vue',
      //   'Vuetify',
      // ],
      //여기까지 콤보박스

      selectContent : '',
      bodyImg: "",
      thumbImg: "",
      subImgs:[]
    }
  },
  methods:{}
}
</script>

<style scoped>

/*top - right*/
.inner .container-content .content-head .head-detail .detail-right {
  width: 50%;
  position: relative;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-top .title-box {
  font-size: 35px;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-top .brand-box {
  font-size: 12px;
  color: rgba(28, 27, 27, 0.6);
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-top .fundingcount-box {
  font-size: 15px;
  color: rgba(28, 27, 27, 0.6);
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-top .subtitle-box {
  display: flex;
  flex-direction: column;
  align-items: end;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-center {
  margin-top: 20px;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 auto;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-center .category-box {
  font-size: 20px;
  text-align: center;
  border: 2px solid rgb(229 114 0);
  border-radius: 4px;
  padding: 15px 15px;
  cursor: pointer;
  margin-top: 50px;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-center .category-box:hover {
  background-color: rgba(229, 114, 0, .1);
  transition: .2s;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-bottom .bottom-button {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-bottom .bottom-button .button-box {
  margin: 15px;
}

</style>