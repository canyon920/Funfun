<template>
<div class="FundingPayment-container">
  <h1>결제 - 펀딩하기</h1>
  <div class="fundingInfo">
    <v-img
        max-height="250"
        max-width="250"
        :src="this.fundingImage"
    ></v-img>
    <div class="fundingTitle">
      {{ this.fundingTitle }}
    </div>
    <div class="moneyInfo">
      모인금액/목표금액<br/>
      {{this.fundingCMoney}} / {{this.fundingTMoney}}
    </div>
  </div>
  <div class="pay">
    <v-text-field
        v-model="amount"
        type="number"
        min="0"
        :rules="[numberRule]"
        label="결제 금액"
    ></v-text-field>
    <br/><br/><br/><br/>
    <v-btn
        max-width="100"
        max-height="40"
        v-on:click="payKakao()"
    >
      <v-img
          max-width="100"
          max-height="40"
          :src="this.kakaoPayBtnImg"
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

export default {
  name: "FundingPayment",
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
      kakaoPayBtnImg: require("@/assets/payImg/kakaopay.png"),
      fundingId:'',
      fundingTitle:'테스트 : 춘식이가 사고 싶다 도와줘 친구들',
      fundingImage: require('@/assets/example-img/chunsicthum.png'),
      fundingCMoney:5600,
      fundingTMoney:30000,
      amount:0,
      numberRule: val => {
        if (val == '') this.amount = 0
        else this.amount = parseInt(val);
        if (val < 0) this.amount = 0
        if(this.amount > this.fundingTMoney - this.fundingCMoney)
          return '결제시 목표금액을 넘습니다'
        return true
      },
      buyer_tel:"000-0000-0000",
      merchant_uid:'',
      orderId:'',
      pg_id:'',
      doublePrevention:false
    }
  },
  methods:{
    set(){
      this.fundingId=this.$route.params.fundingId
      this.memberObj = JSON.parse(window.localStorage.getItem('login_member'))
      //axios 펀딩 정보 + 구매자 정보(=전화번호)
      let setForm = new FormData();
      setForm.append("fundingId",this.fundingId);
      setForm.append("memberId",this.memberObj.memberId);
      axios.post("http://127.0.0.1:9090/fundingPay/fundingInfo/",setForm)
      .then(res => {
        let jdata =  JSON.stringify(res.data);
        let joData = JSON.parse(jdata);
        this.fundingImage = joData.psImg;
        if(!joData.fTitle)
          this.fundingTitle = joData.ftitle;
        else
          this.fundingTitle = joData.fTitle;
        this.fundingCMoney = joData.fcMoney;
        this.fundingTMoney = joData.ftMoney;
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
        name: this.fundingTitle,
        amount: this.amount,
        buyer_tel: this.buyer_tel,
      }, async function(rsp) {
        // console.log("#결제성공");
        //결제 성공
        if(rsp.success){
          //axios로 서버에서 결제 검증
          let form = new FormData();
          form.append("imp_uid", rsp.imp_uid)
          await axios.post("http://127.0.0.1:9090/fundingPay/verifyIamport",form)
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
          await axios.post("http://127.0.0.1:9090/fundingPay/failPay",fform)
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
        name: this.fundingTitle,
        amount: this.amount,
        buyer_tel: this.buyer_tel,
      }, async function(rsp) {
        // console.log("#결제성공");
        //결제 성공
        if(rsp.success){
          //axios로 서버에서 결제 검증
          let form = new FormData();
          form.append("imp_uid", rsp.imp_uid)
          await axios.post("http://127.0.0.1:9090/fundingPay/verifyIamport",form)
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
          await axios.post("http://127.0.0.1:9090/fundingPay/failPay",fform)
              .then(rsp3 => { // eslint-disable-line no-unused-vars
                // console.log("실패정보 등록")
              })
          alert(rsp.error_msg);
        }
        this.orderId=-1
        await router.push({name:"Main"})
      }.bind(this))
    },
    async setPay(){
      let result = false;

      let form = new FormData();
      form.append("fundingId",this.fundingId)
      form.append("memberId", this.memberObj.memberId)
      await axios.post("http://127.0.0.1:9090/fundingPay/setPay",form)
      .then(rsp => {
        let jdata =  JSON.stringify(rsp.data);
        let jodata = JSON.parse(jdata);
        this.merchant_uid = jodata.merchant_uid;
        this.orderId = jodata.orderId;
        // console.log("#setPay",jodata);
      })
      .catch(error=>{ // eslint-disable-line no-unused-vars
        // console.warn(error)
        alert("해당 펀딩 정보가 없습니다");
        router.push({name:"Main"});
        result = true;
      })
      return result;
    },
    async setAfter(rsp,rsp2){
      if(rsp.paid_amount === rsp2.response.amount){
        //성공시의 axios 통신
        // console.log("#this.fundingId",this.fundingId);
        // console.log("#orderId",this.orderId);
        // console.log("#amount",this.amount);
        // console.log("#imp_uid", rsp2.response.imp_uid);
        let sform = new FormData();
        sform.append("fundingId",this.fundingId);
        sform.append("orderId",this.orderId);
        sform.append("amount",this.amount);
        sform.append("imp_uid",rsp2.response.impUid);
        sform.append("pg_id",this.pg_id);
        await axios.post("http://127.0.0.1:9090/fundingPay/successPay",sform)
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
        await axios.post("http://127.0.0.1:9090/fundingPay/failPay",fform)
            .then(rsp3 => { // eslint-disable-line no-unused-vars
              // console.log("실패정보 등록")
              alert("결제를 실패했습니다");
            })
      }
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
      if(this.amount < 100) {
        alert("100원 이상의 금액으로만 결제 가능합니다");
        return true;
      }
      if(!this.fundingId || !this.fundingTitle || !this.fundingCMoney || !this.fundingTMoney){
        alert("펀딩 정보를 제대로 가져오지 못했습니다");
        router.go(-1);
        return true;
      }

      return false;
    }
  },
  mounted() {
    this.set()
  }
}
</script>

<style scoped>

</style>