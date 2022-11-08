import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import App from './App';
import Home from './Home/Home'
import Profile from './Profile/Profile';
import About from './About/About';
import Product from './Product/Product';

function RoutesComp(){
  return (
  <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Profile' element={<Profile />}></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='Product' element={<Product />}></Route>
        <Route path='*' element={<Navigate to="/" />}></Route>
     </Routes>
  </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RoutesComp />);


