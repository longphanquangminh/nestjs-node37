import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return 'token';
  }

  signup() {
    return 'Đăng ký thành công';
  }
}

// yarn add @nestjs/passport passport passport-local @nestjs/jwt passport-jwt @types/passport-jwt
