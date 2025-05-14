import { useEffect, useState } from 'react';
import { GetAllProducts } from '../../services/GetAllProducts'; // Import your API function
import { InputProductProps, InputProducts } from './InputProducts'; // Import the product type
import { Logout } from '../../features/Logout';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import '../../styles/Tablestyle.css'; // Import the CSS file

export const ProductList = () => {
      const navigate= useNavigate();
      const [products, setProducts] = useState<InputProductProps[]>([]);
    // Fetch products when the component mounts
 // useEffect(() => {
    const fetchProducts = async () => {
      const data = await GetAllProducts();
      if (data) {
        setProducts(data); // Set the fetched products to state
      }
    };
    fetchProducts();
 // }, []);

  const handleClick=()=>{
     console.log('Successfully InputProducts page opened');
      navigate('/pages/CRUD/InputProducts');
  }
    
      return(
         <div>
            <div><Logout/></div>
              <div style={{display: 'flex', padding: '1rem'}}>
                    <Button  name="Enter new Product details" handleClick={handleClick}/>
                  </div>
      <table style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>
                <img src={product.image} alt={product.title} style={{ width: '50px', height: '50px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default ProductList;