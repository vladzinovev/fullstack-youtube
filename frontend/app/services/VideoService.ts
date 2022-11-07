import { axiosClassic } from "api/interceptors"
import axios from "axios"
import { IVideo, IVideoDto } from "types/video.interface"

export const VideoService={
    async getVideosByUser(userId:string){
        return axiosClassic.get<IVideo[]>(`/video/by-user/${userId}`)
    },

    async getVideosByCurrentUser(){
        return axios.get<IVideo[]>(`/video/by-user-private`)
    },

    async getVideoById(id:string){
        return axiosClassic.get<IVideo>(`/video/${id}`)
    },

    async getAll(searchTerm?:string){
        return axiosClassic.get<IVideo[]>(`/video`,{
            params: searchTerm ? {searchTerm} :{}
        })
    },

    async getMostPopular(){
        return axiosClassic.get<IVideo[]>(`/video/most-popular`)
    },
    
    async getVideoPrivateById(id:string){
        return axios.get<IVideo>(`/video/get-private/${id}`)
    },

    async createVideo(){
        return axios.post<string>(`/video`)
    },

    async updateVideo(id:string, body:IVideoDto){
        return axios.put<IVideo>(`/video/${id}`, body)
    },

    async updateViews(id:string){
        return axios.put<IVideo>(`/video/update-views/${id}`)
    },

    async updateLikes(id:string){
        return axios.put<IVideo>(`/video/update-likes/${id}`)
    },

    async deleteVideo(id:string){
        return axios.delete(`/video/${id}`)
    },
}