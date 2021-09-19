// 여기 변수들도 새로고침시 초기화 된다.
import axios from "axios";
import router from "@/router";
import Header from "@/components/layout/Header";

export var OauthSendServerData = {
    sendMemberEmail : "",
    sendMemberNicname : '',
    sendMemberApi : '',
    sendMemberProfile : '',
}

export var memberObj = {
    memberId : '',
    memberEmail : '',
    memberNicname : '',
    memberApi : '',
    memberRole : '',
    memberProfile : ''
}

export var funTokens = {
    access_token: '',
    refresh_token: '',
}

// API 로그인 시도 => 새로고침시 로그인 정보 유지할 수 있도록 로컬스트로지에 저장
export async function bringMemberLoginDataFromServer() {
    let form = new FormData()
    form.append("email", OauthSendServerData.sendMemberEmail)
    form.append("nic_name", OauthSendServerData.sendMemberNicname)
    form.append("login_api", OauthSendServerData.sendMemberApi)
    form.append("file_src", OauthSendServerData.sendMemberProfile)
    await axios.post("http://localhost:9090/api/login/oauth/save/member",form)
        .then(res=>{
            memberObj.memberId = res.data.id
            memberObj.memberEmail = res.data.email
            memberObj.memberNicname = res.data.nic_name
            memberObj.memberApi = res.data.login_api
            memberObj.memberRole = res.data.role
            memberObj.memberProfile = res.data.profileImg

            let login_member = JSON.stringify(memberObj)
            //로컬스토리지에 -> 로그인사용자정보저장
            window.localStorage.setItem('login_member', login_member)

            bringFunTokens()

        }).catch(e=>{
            console.log(e)
            window.Kakao.Auth.logout(()=>{
                alert("현재 로그인을 할 수 없습니다..")
                router.push('/',Header.methods.isLogin())

            })
        })
}

export async function bringFunTokens() {
    let form = new FormData()
    form.append('email', memberObj.memberEmail);
    await axios.post("http://localhost:9090/api/login/oauth/get/tokens",form)
        .then(res => {
            console.log("응답 : ", res)
            funTokens.access_token = res.data.access_token
            funTokens.refresh_token = res.data.refresh_token
            //세션스토리지에 -> 엑세스토큰저장
            window.sessionStorage.setItem('access_token',funTokens.access_token)
            //로컬스토리지에 -> 리프레시토큰저장
            window.localStorage.setItem('refresh_token',funTokens.refresh_token)

            router.push("/",Header.methods.isLogin())

        }).catch(e=>{
            console.log(e)
        })
}