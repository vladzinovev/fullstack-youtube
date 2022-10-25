export class CommentDto {

    @IsString()
    message:string

    @IsObjectId()
    videoId:string
}
