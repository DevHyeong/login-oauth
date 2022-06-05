import React from 'react';

const CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/auth/naver/callback";
const oauthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;


export default () =>{
   
    const getAuthorizeCode = () =>{
        location.href = oauthUrl;
 
    }
    return (
        <> 
            <button onClick={getAuthorizeCode}>네이버 로그인</button>
        </>
    )
}

