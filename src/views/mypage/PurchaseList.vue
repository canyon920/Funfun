<template>
  <div class = "Purchase-first">
    <div class = "Purchase-top">
      <div class ="purchase-title1">
        {{bringpurchaseList.title1}}
        <v-dialog
            v-model="dialog2"
            width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" small fab style="margin-bottom: 10px">
              ❔
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              나에게 선물한 상품 (SELF GIFT)
            </v-card-title>
            <v-img src= @/assets/logo/statecode.jpg>
            </v-img>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="primary"
                  text
                  @click="dialog2 = false"
              >
                확인
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
            <th class = "text-left">
              송장번호
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for ="item in paging2" :key="item.no">
            <td>{{item.no}}</td>
            <td><img v-bind:src="item.image" style="width: 100px"></td>
            <td>{{item.title}}</td>
            <td>{{item.price}}</td>
            <td><v-btn plain @click="onClickRedirect()" :disabled="item.buttonShow !== true">{{item.state}}</v-btn></td>
            <td>{{item.delnum}}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-pagination
          v-model="pages"
          :length="Math.ceil( deadlist.length/perPage2)"
      ></v-pagination>

    </div>

    <div class = "Purchase-bottom">
      <div class ="purchase-title2">
        {{bringpurchaseList.title2}}
        <v-dialog
            v-model="dialog"
            width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" small fab style="margin-bottom: 10px">
              ❔
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              마감된 펀딩리스트
            </v-card-title>
            <v-img src= @/assets/logo/statecode.jpg>
            </v-img>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
              >
                확인
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
            <th class = "text-left">
              송장번호
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for ="item in paging" :key="item.no">
            <td>{{item.no}}</td>
            <td><img v-bind:src="item.image" style="width: 100px"></td>
            <td>{{item.title}}</td>
            <td>{{item.price}}</td>
            <td><v-btn  @click="onClickRedirect()" :disabled="item.buttonShow !== true">{{item.state}}</v-btn></td>
            <td>
              <v-dialog v-model="dialog3" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                 <v-btn v-bind="attrs" v-on="on">{{item.delnum}}</v-btn>
                </template>
                <v-card>
                  <v-card-title class="text-h5">
                    대한통운 택배조회
                  </v-card-title>
                  <form action="http://info.sweettracker.co.kr/tracking/5" method="post">
                    <div class="form-group">
                      <input type="hidden" class="form-control" id="t_key" name="t_key" value="mjYqQ7gQ4ZB7QAHYOlWb0w">
                    </div>
                    <div class="form-group">
                      <input type="hidden" class="form-control" name="t_code" id="t_code" value="04">
                    </div>
                    <div class="form-group">
                      <label for="t_invoice">운송장 번호</label>
                      <input type="text" class="form-control" name="t_invoice" id="t_invoice" v-bind:value="item.delnum">
                    </div>
                    <button type="submit" class="btn btn-default">조회하기</button>
                  </form>
                </v-card>
              </v-dialog>
            </td>
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
import Header from "../../components/layout/Header";
import {reServerSend} from "../../service/refreshForAccessToken";

export default {
  name: "PurchaseList",
  components: {},
  data() {
    return {
      golink:'',
      dialog: false,
      dialog2: false,
      dialog3:false,

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
          delnum:'123123123',
          buttonShow: false,

        }
      ],
      deadlist:[
        {
          no:1,
          image:require("@/assets/event/main/light.png"),
          title:'내가널이끄는 boss',
          price:200000,
          state:'배송중',
          delnum: 0,
          buttonShow: false,
        },
      ],
      countTry : 0,
    }
  },
  methods:{
    async bringFundingTypeBuy(){
      let memberId = this.$route.params.memberId
      let access_token = window.sessionStorage.getItem('access_token')
      let config = {
        headers:{
          Authorization : `Bearer ${access_token}`,
        }
      }
      await axios.get("http://localhost:9090/myPurchase/selfGift/"+memberId,config)
          .then(res =>{
            console.log("##res1",res)
            var thumbImg =""
            this.giftlist=[]
            var j = 0
            for(let i in res.data){
              var list = res.data[i].fundingImg
              for(var key in list){
                if(list[key].includes('thumb')){
                  thumbImg = list[key]
                }
              }
              if(res.data[i].delivery_num === 0){
                var delstate = '송장번호가 등록되지 않았습니다'
              }else{
                delstate = res.data[i].delivery_num
              }
              this.giftlist.push({
                no: ++j,
                image: thumbImg,
                title: res.data[i].funding_title,
                price: res.data[i].funding_target_money,
                state: res.data[i].funding_status,
                delnum:delstate
              })
            }

          }).catch(e => {
            console.log("에러에러",e)
            console.log("에러에러",e.response)
            console.log(e.message)

          })
    },
    async bringFundingTypeFunding(){
      let memberId = this.$route.params.memberId
      let access_token = window.sessionStorage.getItem('access_token')
      let config = {
        headers:{
          Authorization : `Bearer ${access_token}`,
        }
      }
      await axios.get("http://localhost:9090/myPurchase/expiredFunding/"+memberId,config)
          .then(res =>{
            this.countTry =0
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
              if(res.data[i].delivery_num === 0){
                var delstate = '송장번호가 등록되지 않았습니다'
              }else{
                delstate = res.data[i].delivery_num
              }

              var buttonStatus = false
              var statelist = []
              statelist.push(res.data[i].funding_status)
              // console.log("123",statelist)

              for(var key2 in statelist){
                if(statelist[key2].includes('CHECKING')){
                  buttonStatus = true
                }else{
                  buttonStatus = false
                }
              }
              this.deadlist.push({
                no: ++j,
                image: thumbImg,
                title: res.data[i].funding_title,
                price: res.data[i].funding_target_money,
                state: res.data[i].funding_status,
                delnum:delstate,
                buttonShow: buttonStatus
              })
            }
          }).catch(e => {
            console.log("에러에러",e.response)
            if (e.response.status === 403) {
              this.countTry++
              if (this.countTry == 1) {
                reServerSend();
                this.bringFundingTypeFunding();
              }
              console.log("세션이 모두 만료되었습니다. 로그인을 다시 해 주세요")
              this.$router.push("/",Header.methods.isLogin)
            }
          })
    },
    onClickRedirect(){
      console.log("############")
      for(var i in this.deadlist){
        console.log("#",this.deadlist[i].state)
      }
      if(this.deadlist[i].state === 'CHECKING'){
        this.buttonShow = true
        this.$router.push("/choose")
      }else{
        this.buttonShow = false
      }
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