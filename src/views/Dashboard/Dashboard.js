import { api } from "../../utils/api"
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import { logoutUser } from "../../stores/actions/userActions";
const Dashboard=()=>{    
    const loading=false;
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(state=>state.user.user);
    
    
   async function logout(e) {
        e.preventDefault();
        try {
            await api.post("/logout",null,{
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            });
            dispatch(logoutUser())
            navigate("/login")
        } catch (error) {
            console.error(error);
        }
    }
    if (loading) {
        return (<p>Loading data...</p>);
    }else{
        return (
            <div className="card w-100">
                <span hidden id="login-test">Login-test</span>
                <div className="card-title text-center mb-2">
                    <b className="sub-title">Dashboard</b>
                    <h1>Welcome {user.name}</h1>
                </div>
                <br />
                <br />
                <div className="card-subtitle">                
                    <form id="logout" className="form" onSubmit={logout}>
                        <div className="row">
                        <div className="d-flex justify-content-center">
                            <input className="btn btn-outline-danger my-2 my-sm-0" type="submit" value="Logout" style={{width:'5em'}}/>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
   
}
export default Dashboard