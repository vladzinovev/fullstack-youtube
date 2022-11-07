import { IVideo } from "types/video.interface";

export interface IVideoItem{
    item:IVideo
    isLarge?:boolean
    isAvatar?:boolean
    tag?:string
    removeHandler?:(videoId:string)=>void
    isUpdateLink?:boolean
}