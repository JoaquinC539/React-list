import {Link, Outlet } from 'react-router-dom';
const Layout=()=>{
    return(
        <div className="App" >
      <h1><Link to="/" className="home">Home</Link></h1>
      <div className="card">
        <Outlet />
      </div>

    </div>
    )
    
}
export default Layout;