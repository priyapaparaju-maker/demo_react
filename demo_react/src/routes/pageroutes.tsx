import Login from '../features/auth/Login';
import { InputProducts } from '../pages/CRUD/InputProducts';
import {Routes, Route } from 'react-router-dom';

 const PageRoutes = ()  =>{
    return (
        <div>
         <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/features/auth/Login" element={<Login />}/> 
    <Route path="/pages/CRUD/InputProducts" element={<InputProducts />} />
    </Routes>
    
        </div>
      );
} 

export default PageRoutes;