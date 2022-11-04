import axios from "axios"

export interface IMediaResponse{
    name:string
    url:string
}

export const MediaService={
    async upload(media: FormData, folder?:string){
        return axios.post<IMediaResponse>('/media', media,{
            params:{folder},
            headers:{'Content-Type':'multipart/form-data'},
        })
    }
}