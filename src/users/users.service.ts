import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from './repositories/users-repository';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private userService: UsersRepository) {}
  create(createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }

  findAll() {
    return this.userService.findAll();
  }

  findOne(id: string) {
    return this.userService.findOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userService.remove(id);
  }
}
