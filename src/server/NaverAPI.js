
import fetch from 'node-fetch';

const CLIENT_ID = "60veFPmflfjcSeHyDEBB";
const REDIRECT_URI = "http://localhost:8082/auth/kakao/callback";
const CLIENT_SECRET = "uidONHIR7m";


let options = {
    headers:{
        'X-Naver-Client-Secret' : CLIENT_SECRET,
        'X-Naver-Client-Id' : CLIENT_ID
    },
    method : 'get'
}

export default {

    getAuthorizationToken : async(code, state) =>{
        const url = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&client_secret=${CLIENT_SECRET}&code=${code}&state=${state}`;
        const options = {
            headers:{
                'X-Naver-Client-Secret' : CLIENT_SECRET,
                'X-Naver-Client-Id' : CLIENT_ID
            },
            method : 'get'
        }

        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        return json;
    },


    getProfile : async(token) =>{
        const url = `https://openapi.naver.com/v1/nid/me`;
        const options = {
            headers:{
                'Authorization' : token,
            },
            method : 'get'
        }

        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        return json;

    }


}