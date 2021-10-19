<template>
  <div class = "Purchase-first">
    <div class = "Purchase-second">
      <NormalListComponent :bringProductList="purchaselistS" :bringscript="purchasetitle"/>
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
            <th class = "text-left" >
              상태
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for ="item in paging" :key="item.no">
            <td>{{item.no}}</td>
            <td><img v-bind:src="item.image" style="width: 100px"></td>
            <td>{{item.title}}</td>
            <td>{{item.price}}</td>
            <td>{{item.state}}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-pagination
          v-model="page"
          :length="Math.ceil( deadlist.length/perPage)"
      ></v-pagination>
    </div>

  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "PurchaseList",
  components: {},
  data() {
    return {
      dialog: false,
      page: 1,
      pages:1,
      perPage: 4,
      perPage2: 4,
      bringpurchaseList:{
        title1:'나에게 선물한 상품리스트',
        title2:'마감된 펀딩 리스트',
      },
      giftlist:[
        {
          no:1,
          image: require("@/assets/event/main/light.png"),
          title:'내가널이끄는 boss',
          price:200000,
          state:'펀딩 완료 확인을 회원이 확인후 정보입력 필요',
        }
      ],
      deadlist:[
        {
          no:1,
          image:require("@/assets/event/main/light.png"),
          title:'내가널이끄는 boss',
          price:200000,
          state:'배송중',
        },
      ],
    }
  },
  methods:{
    async bringFundingTypeBuy(){
      let mdata = JSON.parse(localStorage.getItem('login_member'));
      let access_token = window.sessionStorage.getItem('access_token')
      let config = {
        headers:{
          Authorization : `Bearer ${access_token}`,
        }
      }
      await axios.get("http://localhost:9090/myPurchase/selfGift/"+mdata.memberId,config)
          .then(res =>{
            console.log("##res",res)
              // var thumbImg =""
              /*for(var i in res.data){
                // console.log("##test",res.data[i])
                var list = res.data[i].fundingImg
                for(var key in list){
                  if(list[key].includes('thumb')){
                    thumbImg = list[key]
                  }
                }

                this.deadlist.push({
                  no:this.no+1,
                  img:thumbImg,
                  title:res.data[i].funding_title,
                  price:res.data[i].funding_target_money,
                  state:res.data[i].funding_status}
                )}
*/
          }).catch(e => {
            console.log("에러에러",e)
            console.log("에러에러",e.response)
            /* if (e.response.status===403) {
               reServerSend();
               this.bringMyLikeList()
             }
             console.log("세션이 모두 만료되었습니다. 로그인을 다시 해 주세요")
             this.$router.push("/login",Header.methods.isLogin)*/
          })
    },
    async bringFundingTypeFunding(){
      let mdata = JSON.parse(localStorage.getItem('login_member'));
      let access_token = window.sessionStorage.getItem('access_token')
      let config = {
        headers:{
          Authorization : `Bearer ${access_token}`,
        }
      }
      await axios.get("http://localhost:9090/myPurchase/expiredFunding/"+mdata.memberId,config)
          .then(res =>{
            console.log("##res",res)
            var thumbImg =""
            this.deadlist=[]
            var j = 0
            for(let i in res.data){
              var list = res.data[i].fundingImg
              for(var key in list){
                if(list[key].includes('thumb')){
                  thumbImg = list[key]
                }
              }
              console.log('test',thumbImg)
              this.deadlist.push({
                no: ++j,
                image: thumbImg,
                title: res.data[i].funding_title,
                price: res.data[i].funding_target_money,
                state: res.data[i].funding_status
              })
            }
          }).catch(e => {
            console.log("에러에러",e)
            console.log("에러에러",e.response)
            /* if (e.response.status===403) {
               reServerSend();
               this.bringMyLikeList()
             }
             console.log("세션이 모두 만료되었습니다. 로그인을 다시 해 주세요")
             this.$router.push("/login",Header.methods.isLogin)*/
          })
    },

  },
  mounted() {
    this.bringFundingTypeBuy()
    this.bringFundingTypeFunding()
  },
  computed: {
    paging() {
      return this.deadlist.slice((this.page - 1) * this.perPage,
          this.page * this.perPage)
    },
    paging2() {
      return this.giftlist.slice((this.pages - 1) * this.perPage2,
          this.pages * this.perPage2)
    },
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
  padding-bottom:70px;
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