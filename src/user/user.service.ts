import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { genSalt, hash } from 'bcryptjs';
import { InjectModel } from 'nestjs-typegoose';
import { UserDto } from './user.dto';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(UserModel) private readonly UserModel:ModelType<UserModel>
    ) {}

    async byId(_id:string){
        const user=await this.UserModel.findById(_id);
        if(!user) throw new UnauthorizedException('User not found');

        return user;
    }

    async updateProfile(_id:string,dto:UserDto){
        const user = await this.byId(_id)

        const isSameUser=await this.UserModel.findOne({email:dto.email})
        if(isSameUser && _id===String(isSameUser._id)) throw new NotFoundException('Email is busy');

        if(dto.password){
            const salt = await genSalt(10)
            user.password=await hash(dto.password, salt)
        }

        
        user.email=dto.email;
        user.password=dto.password;
        user.description=dto.description;
        user.location=dto.location;
        user.bannerPath=dto.bannerPath;
        user.avatarPath=dto.avatarPath;

        await user.save();

        return

    }

    async getMostPopular(){
        return this.UserModel.find({subscribersCount:{$gt:0}}).sort({subscribersCount:-1}).exec()
    }
}
