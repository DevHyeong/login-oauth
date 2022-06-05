import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default () =>{
    let location = useLocation();
    
    const [profile, setProfile] = useState();

    const getProfile = async () =>{
        const {access_token, expires_in, refresh_token, refresh_token_expires_in, scope} = location.state;
        const response = await axios.get('http://localhost:8082/auth/kakao/profile' ,{
            headers: {
                Authorization: 'Bearer ' + access_token
            }
        });
        
        setProfile(response.data);

    }

    useEffect(() =>{
        getProfile();
    },[])

    /*useEffect(()=>{
        getProfile();
    }, [location])
*/

    return <>성공</>
};