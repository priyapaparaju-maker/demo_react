import { axiosclient } from './ProductService';
import { InputProductProps } from '../pages/CRUD/InputProducts';


export const GetAllProducts = async() => {
 try {
        const response = await axiosclient.get('products', { }); 
        console.log('product retrieved successfully:', response.data);
          // Convert response.data into an array of Product objects
    const products: InputProductProps[] = response.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
        image: item.image
    }));

    return products;
      } catch (error) {
        console.error('error occured while retrieving products:', error);
        return null;
      }
}