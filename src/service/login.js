// import axios from "axios";
//
// const kakaoHeader = {
//     'Authorization': '5d4291f082b3ce17a2c2e98f4a57f404',
//     'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
// };
//
// export const getKakaoToken = async (code) => {
//     console.log('loginWithKakao');
//     try {
//         const data = {
//             grant_type: 'authorization_code',
//             client_id: '08cab2069b3bd09e1d21ad0b6746e4d9',
//             redirect_uri: 'http://localhost:8080/login',
//             code: code,
//         };
//         const queryString = Object.keys(data)
//             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
//             .join('&');
//         const result = await axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader });
//         console.log('카카오 토큰', queryString);
//         return result;
//     } catch (e) {
//         return e;
//     }
// };
// export const getKakaoUserInfo = async () => {
//     let data = '';
//     await window.Kakao.API.request({
//         url: "/v2/user/me",
//         success: function (response) {
//             data = response;
//         },
//         fail: function (error) {
//             console.log(error);
//         },
//     });
//     console.log('카카오 계정 정보', data);
//     return data;
// }