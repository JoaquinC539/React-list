import { useEffect,  cloneElement } from "react";
import {useNavigate} from "react-router-dom";
import { useSelector,useDispatch} from 'react-redux';
import { api } from "../../utils/api";
import { setUser } from "../../stores/userActions";
const Protected=({children})=>{
    const isAuthenticated=useSelector(state=>state.user.isAuthenticated)
    const dispatch=useDispatch();

    const navigate=useNavigate();
    useEffect( ()=>{
        async function fetchUser(){
            try {
                const response=await api.get("/api/user",{
                    withCredentials:true,
                    data:{}
                });
                
                if(response.status<400){                        
                    dispatch(setUser(response.data));
                }else{
                    navigate("/login")
                }
            } catch (error) {
                console.error("Error fetching user: ", error);
                navigate("/login");
            }
            
        }
            
            if(!isAuthenticated){
                fetchUser()              
               
            }
            
    },[dispatch, isAuthenticated, navigate]);
    
    return isAuthenticated?cloneElement(children):<div>Redirecting....</div>;
}
export default Protected;