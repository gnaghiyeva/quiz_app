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

  //*********************  home model  **************************** */
export const getAllModels = async()=>{
  let globalData

  await axios.get(`${BASE_URL}/home-model`)
  .then(res => {
      globalData = res.data;
  })
  return globalData
}

export const getModelById = async(id)=>{
  let globalData;
  await axios.get(`${BASE_URL}/home-model/${id}`).then((res)=>{
      globalData=res.data
      })
      return globalData
}

export const deleteModel = async(id)=>{
 let deletedModel
  await axios.delete(`${BASE_URL}/home-model/${id}`).then((res)=>{
      deletedModel=res.data
  })
  return deletedModel
}

export const editModel = (id,updatedModel)=>{
 axios.put(`${BASE_URL}/home-model/${id}`,updatedModel)
}

export const postModel = (newModel)=>{
  axios.post(`${BASE_URL}/home-model`,newModel)
}

  //*********************  categories  **************************** */
//logo
export const getAllCategories = async()=>{
  let globalData

  await axios.get(`${BASE_URL}/categories`)
  .then(res => {
      globalData = res.data;
  })
  return globalData
}

export const getCategoryById = async(id)=>{
  let globalData;
  await axios.get(`${BASE_URL}/categories/${id}`).then((res)=>{
      globalData=res.data
      })
      return globalData
}

export const deleteCategory = async(id)=>{
 let deletedModel
  await axios.delete(`${BASE_URL}/categories/${id}`).then((res)=>{
      deletedModel=res.data
  })
  return deletedModel
}

export const editCategory = (id,updatedModel)=>{
 axios.put(`${BASE_URL}/categories/${id}`,updatedModel)
}

export const postCategory = (newModel)=>{
  axios.post(`${BASE_URL}/categories`,newModel)
}