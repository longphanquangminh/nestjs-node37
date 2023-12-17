import {
  BadRequestException,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(201)
  @Post('login')
  login() {
    try {
      // sai mật khẩu hoặc email
      // throw new HttpException('Sai email', 400);
      // throw new HttpException('Sai email', HttpStatus.BAD_REQUEST);
      throw new BadRequestException('Sai email');

      return this.authService.login();
    } catch (exception) {
      if (exception.status !== 500) {
        throw new HttpException(exception.response, exception.status);
      }
      throw new HttpException('Lỗi ...', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('signup')
  signup() {
    return this.authService.signup();
  }
}
