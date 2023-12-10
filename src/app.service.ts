import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public title = 'Abc'; // ko để public thì mặc định là private
  getHello(): string {
    return 'Node 37';
  }
  tinhTong(soA: string, soB: string) {
    return Number(soA) + Number(soB);
  }
}
