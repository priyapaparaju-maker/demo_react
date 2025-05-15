import { InputBox } from '../../components/InputBox';
import { Button } from '../../components/Button';
import { AddProduct } from '../../services/AddProduct';
import { Logout } from '../../features/Logout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useUser} from '../../store/UserContext';
export type InputProductProps = {
    id?: number;
    title?: string;
    price: number;
    description?: string;  
    category?: string;
    image?: string;
 
}

const initialState: InputProductProps = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
}
export const InputProducts = () => {
    const navigate= useNavigate();
     const { username } = useUser();
 const [product, setProduct] = useState<InputProductProps>(initialState);
  
    const handleaction = async () => {
         try {
            await AddProduct(product); // Ensure AddProduct takes `product` as input
            console.log("Product added successfully", product);
        } catch (error) {
            console.error("Failed to add product", error);
        }
    };
  
    const handleInputChange = (field: keyof InputProductProps, value: string | number) => {
        setProduct((prev) => ({ ...prev, [field]: value}));
    };
    const handleClick=()=>{
     console.log('Successfully ProductList page opened');
      navigate('/pages/CRUD/ProductList');
  }


    return(
      <div>
             <div><Logout/></div>
               <div>
      <h1>Welcome, {username}!</h1>
    </div>
             <div style={{display: 'flex', padding: '1rem'}}>
                    <Button  name="View Product List" handleClick={handleClick}/>
                  </div>
        <div>
          < div style={{display: 'flex', padding: '1rem'}}>
           <label htmlFor="title">Title:</label> <InputBox type ="text" placeholder="Enter the title" value={product.title} onChange={(e) => handleInputChange('title', e.target.value)}/>
           
           </div>
           <div style={{display: 'flex', padding: '1rem'}}>
              <label htmlFor="price">Price:</label> <InputBox type ="text" placeholder="Enter the price" value={product.price.toString()} onChange={(e) => handleInputChange('price', parseFloat(e.target.value))}/> 
              </div>
             
           <div style={{display: 'flex', padding: '1rem'}}> 
                <label htmlFor="description">Description:</label> <InputBox type ="text" placeholder="Enter the description" value={product.description} onChange={(e) => handleInputChange('description', e.target.value)}/> 
            
                </div>
              <div style={{display: 'flex', padding: '1rem'}}>
                <label htmlFor="category">Category:</label> <InputBox type ="text" placeholder="Enter the category" value={product.category} onChange={(e) => handleInputChange('category', e.target.value)}/>       
                </div> 
                <Button name="Save" handleClick={()=>handleaction()}/>
        </div>
        </div>
    )
}