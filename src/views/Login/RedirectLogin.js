import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { api } from '../../utils/api';
import { setUser } from '../../stores/actions/userActions';
const RedicrectLogin=({children})=>{
    const dispatch=useDispatch();
    const isAuthenticated=useSelector(state=>state.user.isAuthenticated);
    const navigate=useNavigate()
    useEffect(()=>{
        async function fetchUser(){
            try {
                const response=await api.get("/api/user",{
                    withCredentials:true,
                    data:{}
                });                
                if(response.status<400){                        
                    dispatch(setUser(response.data));                    
                }
            } catch (error) {
                console.log(error);

            }
            
        }
        if(isAuthenticated){
            navigate("/dashboard");
        }else{
            fetchUser();
        }
    },[navigate, isAuthenticated, dispatch])
    return (isAuthenticated?<div>Redirecting....</div>:children);
}
export default RedicrectLogin;