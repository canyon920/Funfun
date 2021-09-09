
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
            memberPwd: '',
        }
    },
    // cpomputed
    getters: {},
    // 변이
    mutations: {},
    // 비동기
    actions: {
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

