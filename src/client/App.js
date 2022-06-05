import React from 'react';
import Main from './Main';
import KaKaoCallback from './kakao/Callback';
import NaverCallback from './naver/Callback';
import KaKaoAuthSuccess from './kakao/AuthSuccess';
import NaverAuthSuccess from './naver/AuthSuccess';
import {Routes, Route,Switch} from 'react-router-dom';

export default () =>{

    return (
        <Routes>   
            <Route path="/" element={<Main/>}/>
            <Route path="/auth/kakao/callback" element={<KaKaoCallback/>}/>
            <Route path="/kakao/success" element={<KaKaoAuthSuccess/>}/>

            <Route path="/auth/naver/callback" element={<NaverCallback/>}/>
            <Route path="/naver/success" element={<NaverAuthSuccess/>}/>
            
        </Routes>


        
    )
}