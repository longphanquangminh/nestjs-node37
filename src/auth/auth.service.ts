import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  login() {
    let token = this.jwtService.signAsync(
      {
        data: {
          userId: 1,
        },
      },
      { expiresIn: '10m', secret: 'BI_MAT' },
    );
    return token;
  }

  signup() {
    return 'Đăng ký thành công';
  }
}

// yarn add @nestjs/passport passport passport-local @nestjs/jwt passport-jwt @types/passport-jwt
