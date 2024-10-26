import axios from "axios";
import { getToken } from "../auth/authService";

const API_URL:string = 'https://api.zamorano.edu/estdatos/estdatos/v1/datos/getDatos';  

export const fetchUsers = async () => {
    const token = getToken();  // Obtener el token almacenado

    if (!token) {
      throw new Error('No token found');
    }

    try {
        const response = await axios.post(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`  // Enviar el token en el header
          }
        });

        return response.data;
        
      } catch (error) {
        console.error('Error fetching users', error);
        throw error;
      }

};