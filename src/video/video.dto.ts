import { prop } from "@typegoose/typegoose"
import { IsBoolean, IsString } from "class-validator"
import { IsObjectId } from "class-validator-mongo-object-id"

export class VideoDto {

    @IsString()
    name:string

    isPublic?:boolean

    @prop({default:0})
    view?:number

    @IsString()
    description:string

    @IsString()
    videoPath:string

    @IsString()
    thumbnailPath:string

    user?:string
    
}
