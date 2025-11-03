import { Injectable } from '@nestjs/common';
import { userDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export let users: any[] = [];

@Injectable()
export class UsersService {
  create(createUserData: userDTO): userDTO {
    users.push(createUserData);
    return createUserData;
  } 

  findAll() {
    return users;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
