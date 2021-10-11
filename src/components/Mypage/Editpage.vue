
<template>
  <div class="MyPage">

    <h1 style="margin: 30px 0px; text-align: center">회원정보 설정</h1>

    <div id="app-edit">

      <v-app id="inspire">
        <div class="border-div">
          <div id="input-submit">
            <v-text-field
                v-model="nickname"
                label="닉네임: "
            >
            </v-text-field>
            <div v-show="errorNicNameCheck" class="error-text nic-error">
              닉네임은 필수 입니다.
            </div>

            <v-text-field
                v-model.trim="email"
                label="이메일: "
                readonly
            ></v-text-field>

            <div class="saved-phone-div" style="color: rgba(0,0,0,0.7); border-bottom:0.5px solid rgba(0,0,0,0.7)">
              저장된 번호 : {{savedPhoneNumber}}
            </div>
            <Phone style="width: 100%; margin-bottom: 40px" :bring-hint="'수정을 원하시면 입력해 주세요.'" @birngMethodPhoneIn="phoneInputDataVal"/>


            <v-text-field
                v-model.trim="submitAddress1"
                :label="address"
            ></v-text-field>
<!--            <div v-show="errorAddress1Check" class="error-text address1-error">-->
<!--              주소를 입력해 주세요.-->
<!--            </div>-->

            <div class="2">
              <v-text-field :label="address2"
                            v-model.trim="submitAddress2"
              ></v-text-field>

            </div>
            <div v-show="checkAddress2" class="error-address2" style="color: red;font-size: 10px">
              상세 주소를 입력해 주세요.
            </div>
<!--            <div v-show="errorAddress2Check" class="error-text address2-error">-->
<!--              상세주소를 입력해 주세요.-->
<!--            </div>-->

            <div class="div-3">
              <v-text-field :label="postNumber"
                            v-model.trim="submitAddress3"
              >
              </v-text-field>
              <v-btn
                  outlined
                  rounded
                  small
                  @click="findAddr"
              >
                주소검색
              </v-btn>
            </div>
<!--            <div v-show="errorFindCheck" class="error-text find-error">-->
<!--              주소를 검색해 주세요.-->
<!--            </div>-->

          </div>
        </div>

        <v-btn color="error" style="font-size: 20px" @click="backRouter">뒤로가기</v-btn>
        <br/>
        <v-btn color="error" style="font-size: 20px" @click="refreshRouter">수정하기</v-btn>

      </v-app>
    </div>
  </div>
</template>


<script>
import Phone from "@/components/login/Phone";
import axios from "axios";
import {isLoginMemberCheck} from "@/service/member-login";
import {reServerSend} from "@/service/refreshForAccessToken";

export default {
  name:'Editpage',
  components:{
    Phone
  },
  data (){
    return{
      // message1:'',
      memberId:'',
      // 닉네임
      nickname:'',
      // 이메일
      email:'',
      // 저장 되어 있는 주소
      address:'',
      // 저장 되어 있는 상세주소
      address2:'',
      // 저장 되어 있는 집코드
      postNumber:'',

      // 수정할 주소
      submitAddress1:'',
      submitAddress2:'',
      submitAddress3:'',
      // 수정할 상세주소
      // 수정할 집코드

      // 저장되어있는 폰 번호
      savedPhoneNumber: '',
      // 수정할 폰 번호
      submitPhoneNumber:'',

      //  error
      errorNicNameCheck:false,
      checkAddress2: false,
      // errorAddress1Check: true,
      // errorAddress2Check: true,
      // errorFindCheck: true,

      countTry:0,


    }
  },
  methods: {
    async memberInfoMapping() {
      this.memberId = this.$route.params.memberId
      let access_token = window.sessionStorage.getItem('access_token')
      let config = {
        headers:{
          'Content-Type': 'application/json',
          Authorization : `Bearer ${access_token}`,
        }
      }
      var form = new FormData()
      form.append("memberId", this.memberId);
      //UserEditController 에서 받아오자
      await axios.post("http://localhost:9090/bring/member/edit/info",form, config)
      .then(res =>{
        console.log(res.data)
        this.nickname = res.data.nic_name
        this.email = res.data.email
        this.savedPhoneNumber = res.data.phone_number
        this.address = res.data.city
        this.address2 = res.data.street
        this.postNumber = res.data.zipcode
        this.countTry=0
      }).catch(error=>{
            this.countTry++
            if (error.response.status===403) {
              if (this.countTry == 1) {
                reServerSend();
                this.memberInfoMapping()
              }
              console.log("다시 오류인것 확인 로그")
            }
          })

    },
    findAddr() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          console.log(data)
          this.submitAddress1 = data.roadAddress
          this.submitAddress3 = data.zonecode
        }
      }).open()
    },
    phoneInputDataVal(val) {
      console.log("아래서 받은 폰넘버값 : ",val)
      this.submitPhoneNumber = val
      console.log("제출할 폰넘버 : ",this.submitPhoneNumber)
    },
    async refreshRouter() {
      if (this.submitAddress1) {
        if (!this.submitAddress2) {
          this.checkAddress2 = true
          return false
        }
      }
      let checkedPhone = this.savedPhoneNumber
      let checkedAddress1 = this.address
      let checkedAddress2 = this.address2
      let checkedAddress3 = this.address3
      if (this.submitPhoneNumber) {
        checkedPhone = this.submitPhoneNumber;
      }
      if (this.submitAddress1 && this.submitAddress2) {
        checkedAddress1 = this.submitAddress1
        checkedAddress2 = this.submitAddress2
        checkedAddress3 = this.submitAddress3
      }
      console.log(this.submitPhoneNumber);
      console.log(this.submitAddress1)
      console.log(this.submitAddress2)
      console.log(this.submitAddress3)
      let access_token = window.sessionStorage.getItem('access_token')
      let config = {
        headers:{
          'Content-Type': 'application/json',
          Authorization : `Bearer ${access_token}`,
        }
      }
      const submitEditMember={
        "id" : this.memberId,
        "email" : this.email,
        "nic_name" : this.nic_name,
        "phone_number": checkedPhone,
        "city" : checkedAddress1,
        "street" : checkedAddress2,
        "zipcode" : checkedAddress3
      }
      await axios.post("http://localhost:9090/bring/member/edit/save", submitEditMember, config)
      .then(res=>{
        console.log(res.data)
        this.countTry=0
        if (res.data === true) {
          this.$router.push()
        }
      })
      .catch(error=>{
        console.log(error)
        // 여기 엑세스 만료시 세션으로 요청 로직 넣어주자@!!!!
        if (error.response.status===403) {
          this.countTry++
          if (this.countTry == 1) {
            reServerSend();
            this.memberInfoMapping()
          }
          console.log("다시 오류인것 확인 로그")
        }
      })

      // this.$router.go(0)
    },
    backRouter() {
      this.$router.go(-1)
    }
  },
  watch:{
    nickname() {
      if (this.nickname === "") {
        this.errorNicNameCheck = true
      } else {
        this.errorNicNameCheck = false
      }
    },

  },

  mounted() {
    isLoginMemberCheck()
    this.memberInfoMapping()
  }

}
</script>

<style scoped>


.error-text {
  color: red;
  font-size: 10px;
  margin-bottom: 10px;
}
.MyPage {
  max-width:1100px;
  margin:auto;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.div-3 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.border-div {
  border: 0.5px solid rgb(229,114,0);
  margin-bottom: 30px;
}
#input-submit {
  width: 500px;
  margin: 10px;
}
@media screen and (max-width: 800px){
  #input-submit {
    width: 300px;
  }

}

</style>