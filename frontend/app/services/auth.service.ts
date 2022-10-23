import { axiosClassic } from "api/interceptors"
import axios from "axios"
import { MdLogout } from "react-icons/md"
import { IAuthData, removeTokenFromStorage, saveToStorage } from "./auth.helper"

export const AuthService={
    async login(email:string, password:string){
        const response=await axiosClassic.post<IAuthData>('/auth/login',{
            email, password
        })
        if(response.data.accessToken){
            saveToStorage(response.data)
        }
        return response
    },

    async register(email:string, password:string){
        const response=await axiosClassic.post<IAuthData>('/auth/register',{
            email, password
        })
        if(response.data.accessToken){
            saveToStorage(response.data)
        }
        return response
    },
    Logout(){
        removeTokenFromStorage();
        localStorage.removeItem('user');
    }
}