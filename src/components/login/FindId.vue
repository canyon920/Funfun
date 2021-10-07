<template>
<div class="find-id-div">

  <Phone :bring-hint="'저장한 비밀번호를 입력해주세요'" id="phone-component" @birngMethodPhoneIn="phoneInputDataVal"/>
  <div v-show="errorInputPhone" class="error-div-text">
    인증을 완료해 주세요.
  </div>
  <div v-show="errorInputPhoneNotFound" class="error-div-text">
    번호와 일치하는 아이디를 찾을 수 없습니다.
  </div>

  <div class="button-content">
    <div class="submit-back">
      <v-btn
          color="error"
          x-large
          class="giveme-button"
          @click="backGO"
      >
        뒤로가기
      </v-btn>
    </div>

    <div class="submit-find">
      <v-btn
          color="error"
          x-large
          class="giveme-button"
          @click="findIdStart"
      >
        아이디찾기
      </v-btn>
    </div>
  </div>

  <div v-show="isFindResult" class="result" :class="{active:isFindResult}">
    <div class="result-text">
      찾은 아이디 :
    </div>
    <div class="result-id">
      {{ findResultId }}
    </div>
  </div>

</div>
</template>

<script>
import Phone from "@/components/login/Phone";
import axios from "axios";
export default {
  name: "FindId",
  data(){
    return{
      submitPhoneNumber:'',
      findResultId:[],
      isFindResult:'',

      errorInputPhone: false,
      errorInputPhoneNotFound: false,
    }
  },
  components: {Phone},
  methods:{
    phoneInputDataVal(val) {
      console.log("아래서 받은 폰넘버값 : ",val)
      this.submitPhoneNumber = val
      console.log("제출할 폰넘버 : ",this.submitPhoneNumber)
    },
    backGO() {
      this.$router.go(-1)
    },
    async findIdStart() {
      if (this.submitPhoneNumber) {
        var form = new FormData()
        form.append("phone", this.submitPhoneNumber)
        //찾아라 아이디
        await axios.post("http://localhost:9090/api/find/id", form)
        .then(res=>{
          this.isFindResult = true
          this.errorInputPhone = false
          this.errorInputPhoneNotFound = false
          this.findResultId = res.data
        })
        .catch(error=>{
          console.log(error)
          this.errorInputPhoneNotFound = true
          this.isFindResult = false
          this.submitPhoneNumber = ''
          this.findResultId = []
          this.findResultId.push("번호와 일치하는 아이디가 없습니다.")
        })
      } else {
        this.errorInputPhone = true
        this.isFindResult = false
      }
    }
  },
}
</script>

<style scoped>
.find-id-div {
  margin: 50px auto 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.find-id-div #phone-component {
  width: 500px;
}
.button-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
}
.submit-back {
  margin-right: 10px;
}
.result {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 500px;
  margin-top: 30px;
  font-size: 25px;
  padding: 10px;
  border: 0.5px solid rgb(229,114,0);
  border-radius: 20px;
}
.error-div-text {
  margin-top: 30px;
  color: red;
  font-size: 10px;
  margin-left: 20%;
}
.active {
  animation: activeX 1s;
}
@keyframes activeX {
  from{
    transform: translateX(200px);
  }
  to{

  }

}
@media screen and (max-width: 800px){
  .find-id-div #phone-component {
    width: 300px;
  }
  .result {
    max-width: 300px;
    font-size: 20px;
  }

}
</style>