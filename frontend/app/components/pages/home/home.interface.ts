import { IUser } from "types/user.interface"
import { IVideo } from "types/video.interface"

export interface IHome{
    randomVideo:IVideo
    topVideo:IVideo
    topChannels:IUser[]
    newVideos:IVideo[]
    weeklyVideos:IVideo[]
}