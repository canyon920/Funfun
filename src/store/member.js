import axios from "axios";

export default {
    // module!
    namespaced: true,
    // data
    state: function () {
        return {
            accessToken: '',
            refreshToken: '',
            memberId: '',
            memberEmail:'',
            memberApi:'',
            memberNicname:''
        }
    },
    // cpomputed
    getters: {},

    // 변이 -> 데이터를 변경시켜주는 메소드 commit
    mutations: {
        setMember(state, res){
            console.log(res)
            state.accessToken = res.data.access_token
            state.refreshToken = res.data.refresh_token
            state.memberId = res.data.member_id
            state.memberEmail = res.data.member_email
            state.memberApi = "normal"
            state.memberNicname = res.data.member_nic_name
            return true
        }
    },
    // 비동기 메소드
    actions: {
        async normalLogin ({ commit }, payload) {
            console.log("뷰x 로 실행")
            const { memberEmail, memberPwd } = payload
            let form = new FormData();
            form.append("username", memberEmail)
            form.append("password", memberPwd)
            console.log("아시오스 전송 전")
            await axios.post("http://localhost:9090/api/login",form,
            ).then(res =>{
                console.log(res)
                commit('setMember', res)
                }
            ).catch(e=>{
                console.log("아시오스 전송 실패")
                console.log(e)
                console.log(e.status)
                console.log(e.statusMessage)
                console.log(e.statusCode)
            })
            // if (this.accessToken.length) {
            //     console.log("로그인 성공 이동해야한다")
            //     this.$router.push("/detail-page")
            // }
        }

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
            await axios.post("http://localhost:9090/api/login",form,
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
        //     await axios.post("http://localhost:9090/api/login",form,
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

