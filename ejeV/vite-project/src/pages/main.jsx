import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Login from './Login.jsx'
import Activities from './Activities.jsx';
import Layout from '@components/Layout.jsx';
import Home from './Home.jsx';
import Store from './Store.jsx';
import Cart from './Cart.jsx';
import Poke from './Poke.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> } >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/actividades" element={<Activities />} />
          <Route path="/tienda" element={<Store />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/poke" element={<Poke />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
