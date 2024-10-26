import axios from "axios";

const API_URL:string = 'https://api.zamorano.edu/estdatos/auth/token';  
//const VERSION: string   = '/V1/';  

export const login = async (username: string, password: string) => {
    try{
      

        const response = await axios.post(API_URL, {
            username,
            password
          });

           // Asumimos que la respuesta contiene el token en `response.data.token`
            const token = response.data.token;
            if (token) {
            // Guardamos el token en localStorage o sessionStorage
                localStorage.setItem('token', token);
            }

        return token;
    }catch(error) {
        console.error('Error logging in', error);
        throw error;
    }
}

export const logout = () => {
    localStorage.removeItem('token');
};
  
export const getToken = () => {
    return localStorage.getItem('token');
};