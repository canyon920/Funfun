const naverService = () => {
    //const naver_id_login = new window.naver.LoginWithNaverId("JQ9euvEXzku2NPp27QzO", "http://localhost:8080/auth");
    // const state = naver_id_login.getUniqState();
    // naver_id_login.setButton("white", 1,60); // 버튼 설정
    // naver_id_login.setState(state);
    // naver_id_login.setPopup(); // popup 설정을 위한 코드
    // naver_id_login.init_naver_id_login();
    const naverLogin = new window.naver.LoginWithNaverId({
        clientId: "JQ9euvEXzku2NPp27QzO",
        callbackUrl: "http://localhost:8080/auth",
        isPopup: true
    });

    const setNaver = () => {
        naverLogin.init();
    };

    const getUserInfo = () => {
        setNaver();
        console.log(naverLogin);
        naverLogin.getLoginStatus((status) => {
            if (status) {
                const email =naverLogin.user.email;
                console.log(email);
                console.log(naverLogin.user);
                console.log(naverLogin.accessToken);
            } else {
                console.log("AccessToken이 올바르지 않습니다.");
            }
        });
    };
    return {
        setNaver,
        getUserInfo,
    };
};


export {
    naverService,
}
