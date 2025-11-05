import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';

import { userDTO } from 'src/users/dto/create-user.dto';
import { ConfigService } from '@nestjs/config';
import * as bcryptjs from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { userLoginDTO } from './dto/loginUser.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private env: ConfigService,
    private userService: UsersService,
  ) {}

  @Post('register')
  async create(@Body() userData: userDTO) {
    const HashPassword = await bcryptjs.hash(
      userData.password,
      Number(this.env.get('SALT')),
    );
    const { password, ...withoutPassword } = userData;
    const newUser = {
      ...withoutPassword,
      password: HashPassword,
    };
    return this.userService.create(newUser);
  }

  @Post('login')
  async(@Body() userData:userLoginDTO) {
    
  }
  // @Get('/envcheck')
  // checkingenv() {
  //   return this.env.get('port');
  // }

  // @Post()
  // testForJoining(@Body() userEmail: userDTO): string {
  //   return 'shaim';
  // }

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
