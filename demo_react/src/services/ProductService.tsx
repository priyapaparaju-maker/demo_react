import axios from 'axios';
export const axiosclient = axios.create({
    baseURL: 'https://fakestoreapi.com/docs#tag/Products/operation', 
    timeout: 10000, // Request timeout in milliseconds
    headers: {
      'Content-Type': 'application/json',
    },  

})

