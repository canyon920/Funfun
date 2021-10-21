<template>
  <div class = "Purchase-first">
    <div class = "Purchase-top">
      <div class ="purchase-title1">
        {{bringpurchaseList.title1}}
      </div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th class = "text-left">
              NO
            </th>
            <th class = "text-left">
              img
            </th>
            <th class = "text-left">
              상품이름
            </th>
            <th class = "text-left">
              상품가격
            </th>
            <th class = "text-left">
              상태
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for ="item in giftlist" :key="item.no">
            <td>{{item.no}}</td>
            <td><img v-bind:src="item.image" width="100" height="100"></td>
            <td>{{item.title}}</td>
            <td>{{item.price}}</td>
            <td>{{item.state}}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>

    </div>
    <div class = "Purchase-bottom">
      <div class ="purchase-title2">
        {{bringpurchaseList.title2}}
      </div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th class = "text-left">
              NO
            </th>
            <th class = "text-left">
              img
            </th>
            <th class = "text-left">
              상품이름
            </th>
            <th class = "text-left">
              상품가격
            </th>
            <th class = "text-left">
              상태
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for ="item in deadlist" :key="item.no">
            <td>{{item.no}}</td>
            <td><img v-bind:src="item.image"></td>
            <td>{{item.title}}</td>
            <td>{{item.price}}</td>
            <td>{{item.state}}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>

  </div>
</template>
<script>


export default {
  name: "PurchaseList",
  components: {},
  data() {
    return {
      bringpurchaseList:{
        title1:'나에게 선물한 상품리스트',
        title2:'마감된 펀딩 리스트',
      },
      giftlist:[
        {
          no:1,
          image: "https://ssl.pstatic.net/imgmovie/mdi/mit110/1619/161967_P153_134645.jpg",
          title:'내가널이끄는 boss',
          price:200000,
          state:'펀딩 완료 확인을 회원이 확인후 정보입력 필요',
        }
      ],
      deadlist:[
        {
          no:1,
          image:"https://ssl.pstatic.net/imgmovie/mdi/mit110/1619/161967_P153_134645.jpg",
          title:'내가널이끄는 boss',
          price:200000,
          state:'배송중',
        }
      ],
    }
  }
}
</script>
<style scoped>
.Purchase-first{
  max-width: 1400px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 50px;
  -webkit-animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-name: fadeIn;
  animation-duration: 1s;

}
.Purchase-top{
  margin-bottom: 50px;
  padding-bottom: 70px;


}
.purchase-title1{
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  padding-bottom: 15px;

}
.purchase-title2{
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  padding-bottom: 15px;

}
.Purchase-bottom{
  padding-top: 70px;
  padding-bottom:90px;
}

@keyframes fadeIn {
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
}
</style>