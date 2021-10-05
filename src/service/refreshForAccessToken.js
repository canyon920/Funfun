import axios from "axios";
import router from "@/router";
import Header from "@/components/layout/Header";

export async function reServerSend() {
    var memberRefreshToken = window.localStorage.getItem('refresh_token')
    var loginMember = window.localStorage.getItem('login_member')

    const data = JSON.parse(localStorage.getItem('login_member'));
    // console.log("data",data)
    // console.log(data.memberEmail)
    // console.log(loginMember)
    if (loginMember == null || memberRefreshToken == null) {
        alert("로그인 되어있지 않습니다.")
        return false;
    }
    var form = new FormData();
    form.append('email',data.memberEmail)
    var config = {
      headers :{
          Authorization : `Bearer ${memberRefreshToken}`
      }
    }
    await axios.post("http://localhost:9090/api/login/oauth/get/tokens/refresh_token",form,config)
        .then(res=>{
            //세션스토리지에 다시발급 받은 -> 엑세스토큰저장
            window.sessionStorage.setItem('access_token',res.data.access_token)
            //로컬스토리지에 다시발급 받은 -> 리프레시토큰저장
            window.localStorage.setItem('refresh_token',res.data.refresh_token)
        }).catch(e=>{
            console.log(e.response.code)
            alert("세션이 만료되었습니다. 다시 로그인해 주세요.")
            window.localStorage.clear()
            window.sessionStorage.clear()
            router.push("/login",Header.methods.isLogin)
            return false
        })
}