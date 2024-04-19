import { render, screen } from '@testing-library/react';
import {App} from '../App';
import LandPage from '../components/landPage/LandPage';
import { MemoryRouter, Routes, Route,BrowserRouter } from 'react-router-dom';


test('renders app', () => {
  const {container}=render(
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
  
  expect(container).toBeInTheDocument();
});

test('renders LandPage component when there are no routes in url',()=>{
  const route="/"
  const links=[
    { to: "/vendedor", label: "Vendedores" },
    { to: "/proveedor", label: "Proveedores" },
    { to: "/producto", label: "Productos" },
    { to: "/register", label: "Registro" },
    { to: "/login", label: "Login" },

  ]
  render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/" element={<LandPage links={links}/>} />
      </Routes>
    </MemoryRouter>
  );
expect(screen.getByText(/Este es un proyecto enfocado en el uso de Java Spring y react/i)).toBeInTheDocument();  
});

test("renders Login page when in /login",()=>{
  const route="/login";

  render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </MemoryRouter>
  )
  const loginElement = screen.getByText(/Login-test/i);
  expect(loginElement).toBeInTheDocument();


});





