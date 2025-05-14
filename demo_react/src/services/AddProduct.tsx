import { axiosclient } from './ProductService';
import { InputProductProps } from '../pages/CRUD/InputProducts';


export const AddProduct = async(product: InputProductProps) => {
 try {
        const response = await axiosclient.post('products', { }); 
        console.log('product added successfully:', response.data);
        return response.data;
      } catch (error) {
        console.error('error occured while adding products:', error);
        return null;
      }
}