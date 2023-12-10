// import { Body, Controller, Get, Param, Query, Req } from '@nestjs/common';
import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
// import { Request } from 'express';

type DemoBody = {
  ma2: string;
  hoTen2: string;
};

@Controller('/app') // endpoint cho cấp đối tượng?
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // endpoint cho cấp chức năng?
  getHello(): string {
    return this.appService.getHello();
  }

  // @Post()
  // postDemo() {
  //   return 'demo node37';
  // }

  @Get('/demo/:email/:phone')
  getDemo(
    // @Req() req: Request,
    @Query('id') id2: string,
    @Query('uName') uName2: string,
    @Param('email') email2: string,
    @Param('phone') phone2: string,
    @Body() body: DemoBody,
  ) {
    // request
    // - url:
    //  + query string
    // const { id, uName } = req.query;
    //  + query param
    // const { email, phone } = req.params;

    // - body
    // const { ma, hoTen } = req.body;
    const { ma2, hoTen2 } = body;

    // response
    // return { id, uName, email, phone, ma, hoTen };
    return { id2, uName2, email2, phone2, ma2, hoTen2 };
  }

  // viết API tính tổng 2 số nhận từ req.params
  // /tinh-tong/:soA/:soB
  @Get('/tinh-tong/:soA/:soB')
  getTong(@Param('soA') soA: string, @Param('soB') soB: string) {
    // return Number(soA) + Number(soB);
    // return +soA + +soB;
    this.appService.title;
    return this.appService.tinhTong(soA, soB);
  }
}
