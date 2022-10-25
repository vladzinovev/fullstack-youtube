import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Types } from 'mongoose';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { IdValidationPipe } from 'src/pipes/id.validation.pipe';
import { CurrentUser } from 'src/user/decorators/user.decorator';
import { UserDto } from 'src/user/user.dto';
import { VideoDto } from './video.dto';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get(':id')
  async getVideo(@Param('id',IdValidationPipe) id:Types.ObjectId){
    return this.videoService.byId(id);
  }

  @Get('by-user/:userId')
  async getVideoByUserId(@Param('id',IdValidationPipe) userId:Types.ObjectId){
    return this.videoService.byUserId(userId);
  }

  @Get('by-user-private')
  @Auth()
  async getVideoByUserIdPrivate(@CurrentUser('_id') _id:Types.ObjectId){
    return this.videoService.byUserId(_id,true);
  }

  @Get()
  async getAll(@Query('searchTerm') searchTerm?:string){
    return this.videoService.getAll(searchTerm);
  }

  @Get('most-popular')
  async getMostPopularByViews(){
    return this.videoService.getMostPopularByViews();
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async createVideo(@CurrentUser('_id') _id:Types.ObjectId){
    return this.videoService.create
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async updateVideo(@Param('id',IdValidationPipe) id:string, @Body() dto:VideoDto){
    return this.videoService.update(id,dto)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async deleteVideo(@Param('id',IdValidationPipe) id:string){
    return this.videoService.delete(id)
  }

  
  @HttpCode(200)
  @Put('update-views/:videoId')
  async updateViews(@Param('videoId',IdValidationPipe) videoId:string){
    return this.videoService.updateCountViews(videoId)
  }

  
  @HttpCode(200)
  @Put('update-likes/:videoId')
  @Auth()
  async updateLikes(@Param('videoId',IdValidationPipe) videoId:string, @Query('type') type:'inc'|'dis'){
    return this.videoService.updateReacton(videoId, type)
  }

  
}
