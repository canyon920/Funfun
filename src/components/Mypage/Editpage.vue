
<template>
  <div class="MyPage">

    <h1 style="margin: 30px 0px; text-align: center">회원정보 설정</h1>

    <div id="app">

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

            <Phone style="width: 100%; margin-bottom: 40px" @birngMethodPhoneIn="phoneInputDataVal"/>


            <v-text-field
                v-model.trim="address"
                label="주소: "
            ></v-text-field>
<!--            <div v-show="errorAddress1Check" class="error-text address1-error">-->
<!--              주소를 입력해 주세요.-->
<!--            </div>-->

            <div class="2">
              <v-text-field label="상세주소 "
                            v-model.trim="address2"
              ></v-text-field>

            </div>
<!--            <div v-show="errorAddress2Check" class="error-text address2-error">-->
<!--              상세주소를 입력해 주세요.-->
<!--            </div>-->

            <div class="div-3">
              <v-text-field label="우편번호 "
                            v-model.trim="postNumber"
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
import axios from "axios";
import Phone from "@/components/login/Phone";

export default {
  name:'Editpage',
  components:{
    Phone
  },
  data (){
    return{
      // message1:'',
      // 닉네임
      nickname:'',
      // 이메일
      email:'',
      // 주소
      address:'',
      // 상세주소
      address2:'',
      // 집코드
      postNumber:'',

      // submit:'',
      // clear:'',

      // 폰 번호
      submitPhoneNumber:'',

      //  error
      errorNicNameCheck:false,
      // errorAddress1Check: true,
      // errorAddress2Check: true,
      // errorFindCheck: true,

    }
  },
  methods: {
    async edit() {
      await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=160f05c35f34aef167fabe796efb2a8e`)
          .then(res => {
            console.log("res : ",res)
            // this.message1 = res.data.results[0].title
            this.nickname = res.data.results[8].title
            this.email = res.data.results[1].title
            this.address = res.data.results[2].title
            this.address2 = res.data.results[3].title
            this.phoneNumber = res.data.results[4].title
            this.postNumber = res.data.results[5].title
            this.submit = res.data.results[6].title
            this.clear = res.data.results[7].title
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
    },
    findAddr() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          console.log(data)
          this.address = data.roadAddress
          this.postNumber = data.zonecode
        }
      }).open()
    },
    phoneInputDataVal(val) {
      console.log("아래서 받은 폰넘버값 : ",val)
      this.submitPhoneNumber = val
      console.log("제출할 폰넘버 : ",this.submitPhoneNumber)
    },
    refreshRouter() {
      this.$router.go(0)
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
    // address() {
    //
    // },
    // address2() {
    //
    // },
    // postNumber() {
    //
    // }
  },

  mounted() {
    console.log("마운티드 실행")
    this.edit()
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