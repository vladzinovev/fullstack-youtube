import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpCode, Put } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('profile')
  @Auth()

  async updateProfile(@Body() dto:UserDto){
    return this.userService.updateProfile('62665872d79',dto)
  }
}