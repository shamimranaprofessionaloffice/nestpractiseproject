import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './guard/roles/roles.decorator';
import { RolesGuard } from './guard/roles/Role.guard';
import { Role } from './guard/roles/rolse.enum';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
