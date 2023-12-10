import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient, users } from '@prisma/client';

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

@Injectable()
export class UserService {
  prisma = new PrismaClient();

  async findAll(): Promise<users[]> {
    const data = await this.prisma.users.findMany();
    // const data = this.prisma.users.findMany(); // nó tự xử lý đồng bộ cho mình
    // return `This action returns all user`;
    return data;
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  async findName(uName) {
    const data = await this.prisma.users.findMany({
      where: {
        full_name: {
          contains: uName,
        },
      },
    });
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
