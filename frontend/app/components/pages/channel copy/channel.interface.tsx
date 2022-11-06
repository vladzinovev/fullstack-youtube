import { IUser } from "types/user.interface"
import { IVideo } from "types/video.interface"


export interface IChannel{
    channel:IUser
    videos:IVideo[]
    randomVideo:IVideo
}