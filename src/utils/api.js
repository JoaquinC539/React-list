import axios from "axios"
export const api=axios.create({
    baseURL:process.env.REACT_APP_APIURL,
    withCredentials:true,
    headers:{
        "Content-Type":"application/json"
    }
});