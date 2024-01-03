import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
import { users } from '@prisma/client';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { UploadDto } from './dto/uploadDto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

// type UserType = {
//   user_id: number;
//   full_name: string;
//   email: string;
//   avatar: string;
//   pass_word: string;
//   face_app_id: string;
//   role: string;
//   refresh_token: string;
// };

// @ApiBearerAuth()
// @UseGuards(AuthGuard('jwt'))
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private configService: ConfigService,
  ) {}
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: UploadDto,
  })
  @UseInterceptors(
    FilesInterceptor('avatar', 10, {
      storage: diskStorage({
        destination: process.cwd() + '/public/img',
        filename: (req, file, callback) =>
          callback(null, new Date().getTime() + '_' + file.originalname),
      }),
    }),
  )
  @Post('/upload')
  upload(@UploadedFiles() file: Express.Multer.File[]) {
    return file;
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Req() req: Request): Promise<users[]> {
    // const data = req.user; // lấy từ async validate
    // return this.configService.get('TITLE');
    return this.userService.findAll();
  }
  @Get('/search/:uName')
  findName(@Param('uName') uName: string) {
    return this.userService.findName(uName);
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
