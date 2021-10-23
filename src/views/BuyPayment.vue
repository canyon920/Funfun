<template>
<div class="BuyPayment-container">
  <h1>결제 - 나에게 선물하기</h1>

  <v-divider
  ></v-divider>

  <div class="productInfo">
    <h2>상품 정보</h2>
    <v-img
        max-height="250"
        max-width="250"
        :src="this.productImage"
    ></v-img>
    <div class="productTitle">
      {{ this.productTitle }}
    </div>
    <div class="moneyInfo">
      <p id="money-text">결제할 금액</p>
      <p id="money-num">&#8361; {{this.amount}}</p>
    </div>
    <div class="ws"></div>
  </div>

  <v-divider
  ></v-divider>

  <div class="btns">
    <v-btn
        max-width="100"
        max-height="40"
    >
      <v-img
          max-width="100"
          max-height="40"
          :src="this.kakaoPayBtnImg"
          v-on:click="payKakao()"
      ></v-img>
    </v-btn>
    &nbsp;&nbsp;
    <v-btn
        v-on:click="payKG()"
    >카드 결제</v-btn>
    &nbsp;&nbsp;
    <v-btn
        v-on:click="cancelBtn()"
    >취소</v-btn>
  </div>
  <br/><br/><br/><br/><br/>
</div>
</template>

<script>
import axios from "axios";
import router from "../router";
import {getHeaders} from "../service/header";

export default {
  name: "BuyPayment",
  data(){
    return{
      memberObj : {
        memberId : '',
        memberEmail : '',
        memberNicname : '',
        memberApi : '',
        memberRole : '',
        memberProfile : ''
      },
      productId:'',
      kakaoPayBtnImg: require("@/assets/payImg/kakaopay.png"),
      //productInfo, makeFundingInfo
      productImage:require('@/assets/example-img/chunsicthum.png'),
      productTitle:'상품 제목',
      amount:0,
      buyer_tel:"000-0000-0000",
      merchant_uid:'',
      orderId:'',
      pg_id:'',
      doublePrevention:false
    }
  },
  methods:{
    set(){
      this.productId=this.$route.params.productId
      this.memberObj = JSON.parse(window.localStorage.getItem('login_member'))
      //axios 상품 정보+구매자 번호
      let setForm = new FormData();
      setForm.append("productId",this.productId);
      setForm.append("memberId",this.memberObj.memberId);
      axios.post("http://127.0.0.1:9090/buyPay/productInfo",setForm,getHeaders())
          .then(res => {
            let jdata =  JSON.stringify(res.data);
            let joData = JSON.parse(jdata);
            this.productImage = joData.psImg;
            if(!joData.pTitle)
              this.productTitle = joData.ptitle;
            else
              this.productTitle = joData.pTitle;
            this.amount = joData.pprice;
            if(joData.btel)
              this.buyer_tel = joData.btel;
          })

    },
    async payKakao(){
      //중복 클릭 방지
      if(this.clickOLP()) return;
      if(this.checkBI()) return;

      var IMP = window.IMP;
      IMP.init("imp66582532");
      this.pg_id = 'kakaopay';
      //param.request 셋팅전 axios 통신 및 데이터 셋팅 - merchant_uid,   fundingTitle,buyer_tel
      //orders에 row 추가
      if(await this.setPay()){
        return;
      }
      // console.log("#this.merchant_uid",this.merchant_uid);
      //결제창
      await IMP.request_pay({
        pg: "kakaopay",
        pay_method: "kakaopay",
        merchant_uid: this.merchant_uid,
        name: this.productTitle,
        amount: this.amount,
        buyer_tel: this.buyer_tel,
      }, async function(rsp) {
        // console.log("#결제성공");
        //결제 성공
        if(rsp.success){
          //axios로 서버에서 결제 검증
          let form = new FormData();
          form.append("imp_uid", rsp.imp_uid)
          await axios.post("http://127.0.0.1:9090/buyPay/verifyIamport",form,getHeaders())
              .then(async rsp2 => {
                // console.log("#검증성공");
                let jdata =  JSON.stringify(rsp2.data);
                let jodata = JSON.parse(jdata);
                // console.log("#검증 데이터",jodata)
                await this.setAfter(rsp,jodata);
              })
        }else{
          //결제 실패
          //실패 처리 axios
          let fform = new FormData();
          fform.append("orderId",this.orderId);
          await axios.post("http://127.0.0.1:9090/buyPay/failPay",fform,getHeaders())
              .then(rsp3 => { // eslint-disable-line no-unused-vars
                // console.log("실패정보 등록")
              })
          alert(rsp.error_msg);
        }
        this.orderId=-1
        await router.push({name:"Main"})
      }.bind(this))
    },
    async payKG(){
      //중복 클릭 방지
      if(this.clickOLP()) return;
      if(this.checkBI()) return;

      var IMP = window.IMP;
      IMP.init("imp66582532");
      this.pg_id = 'html5_inicis';
      //param.request 셋팅전 axios 통신 및 데이터 셋팅 - merchant_uid,   fundingTitle,buyer_tel
      //orders에 row 추가
      if(await this.setPay()){
        return;
      }
      // console.log("#this.merchant_uid",this.merchant_uid);
      //결제창
      await IMP.request_pay({
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: this.merchant_uid,
        name: this.productTitle,
        amount: this.amount,
        buyer_tel: this.buyer_tel,
      }, async function(rsp) {
        // console.log("#결제성공");
        //결제 성공
        if(rsp.success){
          //axios로 서버에서 결제 검증
          let form = new FormData();
          form.append("imp_uid", rsp.imp_uid)
          await axios.post("http://127.0.0.1:9090/buyPay/verifyIamport",form,getHeaders())
              .then(async rsp2 => {
                // console.log("#검증성공");
                let jdata =  JSON.stringify(rsp2.data);
                let jodata = JSON.parse(jdata);
                // console.log("#검증 데이터",jodata)
                await this.setAfter(rsp,jodata);
              })
        }else{
          //결제 실패
          //실패 처리 axios
          let fform = new FormData();
          fform.append("orderId",this.orderId);
          await axios.post("http://127.0.0.1:9090/buyPay/failPay",fform,getHeaders())
              .then(rsp3 => { // eslint-disable-line no-unused-vars
                // console.log("실패정보 등록")
              })
          alert(rsp.error_msg);
        }
        this.orderId=-1
        await router.push({name:"Main"})
      }.bind(this))
    },
    async setAfter(rsp,rsp2){
      if(rsp.paid_amount === rsp2.response.amount){
        //성공시의 axios 통신
        let sform = new FormData();
        sform.append("productId",this.productId);
        sform.append("orderId",this.orderId);
        sform.append("amount",this.amount);
        sform.append("imp_uid",rsp2.response.impUid);
        sform.append("pg_id",this.pg_id);
        await axios.post("http://127.0.0.1:9090/buyPay/successPay",sform,getHeaders())
            .then(rsp3 => {
              // console.log("#성공 정보 등록")
              if(rsp3){
                alert("결제를 성공했습니다");
              }else{
                alert("결제 도중에 문제가 생겼습니다");
              }
            })
            .catch(error =>{
              alert("#Error",error);
            })
      }else{
        //실패시의 axios 통신
        let fform = new FormData();
        fform.append("orderId",this.orderId);
        await axios.post("http://127.0.0.1:9090/buyPay/failPay",fform,getHeaders())
            .then(rsp3 => { // eslint-disable-line no-unused-vars
              // console.log("실패정보 등록")
              alert("결제를 실패했습니다");
            })
      }
    },
    async setPay(){
      let result = false;

      let form = new FormData();
      form.append("productId",this.productId)
      form.append("memberId", this.memberObj.memberId)
      await axios.post("http://127.0.0.1:9090/buyPay/setPay",form,getHeaders())
          .then(rsp => {
            let jdata =  JSON.stringify(rsp.data);
            let jodata = JSON.parse(jdata);
            this.merchant_uid = jodata.merchant_uid;
            this.orderId = jodata.orderId;
            console.log("#setPay",jodata);
          })
          .catch(error=>{ // eslint-disable-line no-unused-vars
            // console.warn(error)
            alert("해당 상품 정보가 없습니다");
            router.push({name:"Main"});
            result = true;
          })
      return result;
    },
    clickOLP(){
      if(this.doublePrevention){
        return this.doublePrevention;
      }else{
        this.doublePrevention=true;
        return false;
      }
    },
    cancelBtn(){
      router.go(-1);
    },
    checkBI(){
      //buyInfo 체크
      return false;
    }
  },
  beforeMount() {
    if (!JSON.parse(window.localStorage.getItem('login_member'))) {
      alert("로그인이 필요한 서비스 입니다.")
      this.$router.push("/login")
    }
  },
  mounted() {
    this.set()
  }
}
</script>

<style scoped>
.productInfo{
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top:15px;
  padding-bottom: 15px;
}

.productTitle{
  font-size: 25px;
  font-weight: 900;
  margin-top:10px;
  margin-bottom:10px;
}

.btns{
  margin-top:30px;
}

.ws{
  margin-bottom:60px;
}

h1{
  margin-top:5px;
  margin-bottom:5px;
}

h2{
  margin-bottom: 10px;
}

#money-text{
  font-size: 20px;
  font-weight:400;
  margin-top:5px;
  margin-bottom:3px;
}

#money-num{
  font-size: 20px;
  font-weight:700;
  margin-top:1px;
  margin-bottom:5px;
}

.v-btn{
  font-size:13px;
  font-weight:900;
  margin-right:6px;
  margin-bottom:10px;
}

</style>