import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { CommentDto } from './comment.dto';
import { CommentModel } from './comment.model';

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(CommentModel) private readonly CommentModel:ModelType<CommentModel>
    ) {}

    async byVideoId(videoId:Types.ObjectId, isPrivate =false){

        return this.CommentModel.find({video:videoId}).sort({createdAt:'desc'}).populate('user','name location avatarPath isVerified').exec()
    }

    async create(userId:Types.ObjectId, dto:CommentDto){

        const video=await this.CommentModel.create({message:dto.message, video:dto.videoId, user:userId})
    }
}
