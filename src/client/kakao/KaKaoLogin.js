import React from 'react';


const CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
const oauthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

export default () =>{


    const getAuthorizeCode = () =>{
       location.href = oauthUrl;
    }


    return (
        <>
            <button onClick={getAuthorizeCode}>카카오 로그인</button>
        
        
        </>
    )


}