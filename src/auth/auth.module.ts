import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModel } from 'src/user/user.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[
    TypegooseModule.forFeature([
      {
        typegooseClass:UserModel,
        schemaOptions:{
          collection:"User",
        }
      }
    ]),
    ConfigModule
  ]
  
})
export class AuthModule {}
