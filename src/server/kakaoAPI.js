
import fetch from 'node-fetch';

const REST_API_KEY = "465f2d63b7b4475da85679ba4b7cd463";
const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";



export default {

    getAuthorizationToken : async(code) =>{
        const url = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_url=${REDIRECT_URI}&code=${code}`;
        const options = {
            method : 'POST'
        }
        
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        return json;
    },

    getProfile : async(token) =>{
        const url = `https://kapi.kakao.com/v2/user/me`;
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