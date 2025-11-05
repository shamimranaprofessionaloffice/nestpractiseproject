import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseFilters,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { userDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesGuard } from 'src/guard/roles/Role.guard';
import { Role } from 'src/guard/roles/rolse.enum';
import { Roles } from 'src/guard/roles/roles.decorator';
import { UserFilterFilter } from './filters/user.filter/user.filter.filter';

@Controller('users')
@UseFilters(UserFilterFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: userDTO) {
    return await this.usersService.create(createUserDto);
  }

  @Get('/:shamim')
  eitayhobe(@Param('shamim', ParseIntPipe) shamim: number) {
    return 'thik ache';
  }

  @Get('/test')
  Testing() {
    return 'user geting succesfully ';
  }

  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.remove(id);
  }
}
 