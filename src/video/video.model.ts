

import { prop, Ref } from '@typegoose/typegoose';
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';

export interface VideoModel extends Base{}

export class VideoModel extends TimeStamps{

    @prop()
    name:string

    @prop()
    isPublic:string

    @prop({default:0})
    view?:number

    @prop({default:0})
    like?:number

    @prop({default:0})
    dislike?:number

    @prop()
    description:string

    @prop()
    videoPath:string

    @prop()
    avatarPath:string

    @prop()
    thumbnailPath:string

}

