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
import { UsergurdGuard } from './usergurd/usergurd.guard';
import { RolesGuard } from 'src/guard/roles/Role.guard';
import { Role } from 'src/guard/roles/rolse.enum';
import { Roles } from 'src/guard/roles/roles.decorator';
import { UserFilterFilter } from './filters/user.filter/user.filter.filter';

@Controller('users')
@UseFilters(UserFilterFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: userDTO) {
    return this.usersService.create(createUserDto);
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
  findAll() {
    return this.usersService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
