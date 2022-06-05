import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {  useSearchParams, Navigate  } from 'react-router-dom';



const CLIENT_ID = process.env.NAVER_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/auth/naver/callback";
const CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;

export default () =>{

    const [searchParams] = useSearchParams();
    const [result, setResult] = useState();

    const getData = async () =>{
        let code = searchParams.get("code");
        let state = searchParams.get("state");
        try{
            const url = `http://localhost:8082/auth/naver/callback?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&client_secret=${CLIENT_SECRET}&code=${code}&state=${state}`;
            
            const response = await axios.get(url, {
                headers: {
                    'X-Naver-Client-Secret' : CLIENT_SECRET,
                    'X-Naver-Client-Id' : CLIENT_ID
                }
            });
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
            result && <Navigate to="/naver/success" state={result}/>
        }
        </>

    )
}