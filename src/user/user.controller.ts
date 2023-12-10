import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
import { users } from '@prisma/client';

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

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private configService: ConfigService,
  ) {}

  @Post('/upload')
  upload(file) {
    return file;
  }
  @Get()
  findAll(): Promise<users[]> {
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
