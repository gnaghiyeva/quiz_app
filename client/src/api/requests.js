import { BASE_URL } from "./base_url";
import axios from 'axios'

//register
export const signUp = (payload)=>{
    axios.post(`${BASE_URL}/register`,payload)
}

//login
export const signIn = async(payload)=>{
    const response =  await axios.post(`${BASE_URL}/login`,payload);
    return response.data;
}

//users
export const getUsers = async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/users`, {
        headers: {
          'x-access-token': token
        }
      });

      return response.data.users;
    } catch (error) {
      console.error('Kullanıcıları alma hatası:', error);
      throw error;
    }
  };

