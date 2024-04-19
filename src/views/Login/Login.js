import { useState } from "react";
import {api} from '../../utils/api';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        username:"",
        password:""
    })
    const [message,setMessage]=useState("");
    const [isMessage,setIsMessage]=useState(false);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault();           
        api.post('/login',formData,{
            withCredentials:true,
            headers:{
                "Content-Type":"application/json",
            }
        })
        .then(response=>{
            
            navigate("/dashboard")
        })
        .catch((error)=>{
            if(error.code==="ERR_BAD_REQUEST"){
                setMessage("Error at login: Invalid credentials")
                setIsMessage(true);
            }else{
                console.error(error)
                setMessage("Error at login check dev tools or contact support")
                setIsMessage(true);
            }
        })
    }
    

    return (
        <div className="card w-100">
            <span hidden id="login-test">Login-test</span>
            <div className="card-title text-center mb-2">
                <h1>Login</h1>
            </div>
            <div className="card-subtitle">
                <form  id="login" className="form" onSubmit={handleSubmit} >
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <div className="col-12 col-md-4 form-box">
                                <input className="form-control " type="text" placeholder="Usuario" name="username" aria-label="username" required=""
                                onChange={handleChange} />
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <div className="col-12 col-md-4 form-box">
                                <input className="form-control " type="password" placeholder="Contraseña" name="password" aria-label="password" required=""
                                onChange={handleChange} />
                            </div>
                        </div>

                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                        <input className="btn btn-outline-success my-2 my-sm-0" type="submit" value="Login" style={{ width: '5em' }} />
                    </div>
                </form>
                <br/>
                <div className="d-flex justify-content-center">
                    {isMessage ? <p><strong>{message}</strong></p>:null}
                </div>
                
                
            </div>
        </div>
    )


}
export default Login;