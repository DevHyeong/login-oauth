import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AuthSuccess from './AuthSuccess';
import {  useSearchParams, Navigate  } from 'react-router-dom';

const CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";

export default () =>{

    const [searchParams] = useSearchParams();
    const [result, setResult] = useState();

    const getData = async () =>{
        let code = searchParams.get("code");
        console.log(CLIENT_ID)
        try{

            const url = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_url=${REDIRECT_URI}&code=${code}`;
            
            const response = await axios.post(url);
            setResult(response.data);
            
        }catch(e){

        }
        


    }
    useEffect(()=>{
        getData();
    }, [])



    return (
        <>        
        {
           result && <Navigate to="/kakao/success" state={result}/>
        }
        </>

    )
}