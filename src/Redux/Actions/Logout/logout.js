import {types} from '../../Types/Logout/types';
import {apiClient} from '../../../Data/apiClient';

export const logout  = ()=>{
  return apiClient.post('/auth/logout').then((response)=>{
    if(response.status === 200){
      deleteUserCredentials();
    }
  })
}

const deleteUserCredentials = () => {
  localStorage.removeItem("username")
  localStorage.removeItem("token")
  localStorage.removeItem("role")
}