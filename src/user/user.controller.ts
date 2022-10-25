import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpCode, Put } from '@nestjs/common';
import { isConstructor } from '@typegoose/typegoose/lib/internal/utils';
import { Types } from 'mongoose';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { IdValidationPipe } from 'src/pipes/id.validation.pipe';
import { CurrentUser } from './decorators/user.decorator';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @Auth()
  async getProfile(@CurrentUser('_id') _id:Types.ObjectId){
    return this.userService.byId(_id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('profile')
  @Auth()
  async updateProfile(@CurrentUser('_id') _id:Types.ObjectId, @Body() dto:UserDto){
    return this.userService.updateProfile(_id,dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async updateUser(@Param('id', IdValidationPipe) id:Types.ObjectId, @Body() dto: UserDto){
    return this.userService.updateProfile(id,dto)
  }

  @Get('most-popular')
  async getMostPopular(){
    return this.userService.getMostPopular();
  }
}