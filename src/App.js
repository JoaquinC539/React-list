import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import LandPage from './components/landPage/LandPage';
import NotFound from './components/NotFound/NotFound';
import  Login  from './views/Login/Login';
import Layout from './components/Layout';
import Dashboard from './views/Dashboard/Dashboard';
import Protected from './components/Security/Protected';
import RedicrectLogin from './views/Login/RedirectLogin';
import Vendedores from './views/Vendedores/Vendedores';

export const LocationDisplay = () => {
  const location = useLocation()
  return <div data-testid="localtion-display">{location.pathname}</div>
}
export function App() {
  
  const links=[
    { to: "/vendedor", label: "Vendedores" },
    { to: "/proveedor", label: "Proveedores" },
    { to: "/producto", label: "Productos" },
    { to: "/register", label: "Registro" },
    { to: "/login", label: "Login" },
  ]

  return (

   
        <Routes>
          <Route path='/'  element={<Layout/>}>
              <Route index element={<LandPage links={links}/>} />
              <Route path='/vendedor' element={<Protected><Vendedores /></Protected> } />
              <Route path='/login' element={<RedicrectLogin> <Login /></RedicrectLogin> } />
              <Route path='/dashboard' element={<Protected><Dashboard /></Protected>} />
          <Route path='*' element={<NotFound />} />
              
          </Route>
          
        </Routes>
    
    
  );
}

export default App;
