import { axiosClassic } from "api/interceptors"
import axios from "axios"
import { IComment, ICommentDto } from "types/comment.interface"

export const CommentService={
    async getCommentsByVideo(videoId:string){
        return axiosClassic.get<IComment[]>(`/comment/by-video/${videoId}`)
    },

    async createComment(body:ICommentDto){
        return axios.post<IComment>(`/comment`, body)
    },

}