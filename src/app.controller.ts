import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {

    const a = (a,b) =>{
      console.log(...b);
    }
    a(1,[1,2,3]);

    return "ok"
  }
}
