import axios from 'axios';
export const axiosclient = axios.create({
    baseURL: 'https://fakestoreapi.com/', 
    timeout: 10000, // Request timeout in milliseconds
    headers: {
      'Content-Type': 'application/json',
    },  

})

