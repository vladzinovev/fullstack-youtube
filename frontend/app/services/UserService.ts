import { IUser, IUserDto } from "../types/user.interface"
import axios, { axiosClassic } from "../api/interceptors"
import { IAuthData, saveToStorage } from "./auth/auth.helper"

export const UserService={
    async getProfile(){
        return axiosClassic.get<IUser>('/user/profile')
    },

    async getMostPopular(){
        return axiosClassic.get<IUser[]>('/user/most-popular')
    },

    async getAll(){
        return axiosClassic.get<IUser[]>('/user')
    },

    async getUser(id:string){
        return axiosClassic.get<IUser>(`/user/by-id/${id}`)
    },

    async updateProfile(body:IUserDto){
        return axios.put<IUser>('/user/profile',body)
    },
}