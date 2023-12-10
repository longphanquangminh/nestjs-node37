import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, AuthModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// protected: ko thể truy cập từ bên ngoài, chỉ những lớp kế thừa mới truy cập được

// đối tượng:

// decorator: @Abc
// cách khai báo decorator: anotation? anotion

// Module (cầu nối): kết nối service và controller lại với nhau của chính đối tượng đó, kết nối module của đối tượng khác

// Controller: Định nghĩa API // router?
// Service: Định nghĩa chức năng, tính toán, ... (thật ra ko cần cũng dc, nhưng có cho rõ)

// endpoint
// localhost:8080/demo

// User
// nest g module [tên module]
// nest g controller [tên module] --no-spec
// nest g service [tên module]

// nest g resource [tên module] --no-spec

// Auth
