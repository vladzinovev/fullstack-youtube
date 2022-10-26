import axios from "../../api/interceptors"
import { IAuthData, saveToStorage } from "../auth/auth.helper"

export const UserService={
    async login(email:string, password:string){
        const response=await axios.post<IAuthData>('/auth/login',{
            email, password
        })
        if(response.data.accessToken){
            saveToStorage(response.data)
        }
        return response.data
    },
}