// 여기 변수들도 새로고침시 초기화 된다.
import axios from "axios";
import router from "@/router";

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

// API 로그인 시도 => 새로고침시 로그인 정보 유지할 수 있도록 로컬스트로지에 저장
export async function bringMemberLoginDatafromSerber() {
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
            window.localStorage.setItem('login_member', login_member)
            console.log("로컬에 저장된 값 : ",JSON.parse(window.localStorage.getItem('login_member')))
            router.push('/')

        }).catch(e=>{
            console.log(e)
            window.Kakao.Auth.logout(()=>{
                alert("현재 로그인을 할 수 없습니다..")
                router.push('/')
            })
        })
}