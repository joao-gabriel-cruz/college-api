import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from './repositories/users-repository';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}
  create(createUserDto: CreateUserDto) {
    this.userRepository.create(createUserDto);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.remove(id);
  }
}
