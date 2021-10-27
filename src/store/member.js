import axios from "axios";

export default {
    // module!
    namespaced: true,
    // data
    state: function () {
        return {
            memberId: '',
            memberEmail:'',
            memberNicname:'',
            memberApi:'',
            memberRole:'',
            memberProfile:''
        }
    },
    // cpomputed
    getters: {},

    // 변이 -> 데이터를 변경시켜주는 메소드 commit
    mutations: {
        setMember(state, res){
            console.log(res)
            state.memberId = res.data.id
            state.memberEmail = res.data.email
            state.memberNicname = res.data.nic_name
            state.memberApi = res.data.login_api
            state.memberRole = res.data.role
            state.memberProfile = res.data.profileImg
            return true
        }
    },
    // 비동기 메소드 => dispatch
    actions: {

        async oauthApiLogin(context, payload) {
            console.log("# oauthApiLogin()  실행")
            const {memberEmail, memberNicname, memberApi, memberProfile} = payload
            let form = new FormData()
            form.append("email", memberEmail)
            form.append("nic_name", memberNicname)
            form.append("login_api", memberApi)
            form.append("file_src", memberProfile)
            await axios.post("http://192.168.0.165:9090/api/login/oauth/save/member", form)
                .then(res => {
                    console.log(res)
                    context.commit('setMember',res)
                }).catch(e =>{
                    console.log(e)
                    alert("로그인 통신 오류입니다.")
                    window.Kakao.Auth.logout(
                        this.$router.push("/")
                    )
                })
        },

        // async normalLogin ({ commit }, payload) {
        //     console.log("뷰x 로 실행")
        //     const { memberEmail, memberPwd } = payload
        //     let form = new FormData();
        //     form.append("username", memberEmail)
        //     form.append("password", memberPwd)
        //     console.log("아시오스 전송 전")
        //     await axios.post("http://192.168.0.165:9090/api/login",form,
        //     ).then(res =>{
        //         console.log(res)
        //         commit('setMember', res)
        //         }
        //     ).catch(e=>{
        //         console.log("아시오스 전송 실패")
        //         console.log(e)
        //         console.log(e.status)
        //         console.log(e.statusMessage)
        //         console.log(e.statusCode)
        //     })
            // if (this.accessToken.length) {
            //     console.log("로그인 성공 이동해야한다")
            //     this.$router.push("/detail-page")
            // }
        // }

        /*
        * setMember(state, payload){
            Object.keys(payload).forEach(key=>{
                state[key] = payload[key]
            })
        }
    },
    // 비동기 메소드
    actions: {
        async normalLogin (context, payload) {
            const { memberEmail, memberPwd } = payload
            console.log(this.memberEmail)
            console.log(this.memberPwd)
            let form = new FormData();
            form.append("username", memberEmail)
            form.append("password", memberPwd)
            await axios.post("http://192.168.0.165:9090/api/login",form,
            ).then(res =>{
                context.commit('setMember', {
                    accessToken : res.data.access_token,
                    refreshToken : res.data.refresh_token,
                    memberId : res.data.member_id,
                    memberEmail : res.data.member_email,
                    memberApi : 'normal',
                    memberNicname : res.data.member_nic_name
                })
                }
            ).catch(e=>{
                console.log(e.status)
                console.log(e.statusMessage)
                console.log(e.statusCode)
            })
            if (this.accessToken.length) {
                console.log("로그인 성공 이동해야한다")
                this.$router.push("/detail-page")
            }
        }
        * */


        // async getTokens(context, payload) {
        //     const{memberEmail, memberPwd} = payload
        //     let form = new FormData();
        //     form.append("username", this.memberEmail)
        //     form.append("password", this.memberPwd)
        //     await axios.post("http://192.168.0.165:9090/api/login",form,
        //     ).then(res => {
        //         console.log("응답: "+ res.data.access_token)
        //         console.log("응답: "+ res.data.refresh_token)
        //         this.accessToken = res.data.access_token
        //         this.refreshToken = res.data.refresh_token
        //     })
        // }
        // }
    }
}

