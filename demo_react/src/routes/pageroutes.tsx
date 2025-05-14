import Login from '../features/auth/Login';
import { InputProducts } from '../pages/CRUD/InputProducts';
import {Routes, Route } from 'react-router-dom';
import {ProductList} from '../pages/CRUD/ProductList';

 const PageRoutes = ()  =>{
    return (
        <div>
         <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/features/auth/Login" element={<Login />}/> 
    <Route path="/pages/CRUD/InputProducts" element={<InputProducts />} />
     <Route path="/pages/CRUD/ProductList" element={<ProductList />} />
    </Routes>
    
        </div>
      );
} 

export default PageRoutes;