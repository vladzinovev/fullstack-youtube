
import { prop } from '@typegoose/typegoose';
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';

export interface UserModel extends Base{}

export class UserModel extends TimeStamps{

    @prop({unique:true})
    email:string

    @prop()
    password:number

    @prop()
    name:string

    @prop()
    isVerified:string

    @prop()
    subscribersCount:number

    @prop()
    description:string

    @prop()
    location:string

    @prop()
    bannerPath:string

    @prop()
    avatarPath:string

}
