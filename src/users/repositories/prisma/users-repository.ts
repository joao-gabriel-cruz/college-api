import { PrismaService } from 'src/database/prisma.service';
import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersRepository } from '../users-repository';

@Injectable()
export class PrismaUserRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  async remove(id: string): Promise<String> {
    await this.prisma.users.delete({
      where: {
        id,
      },
    });
    return 'User deleted';
  }

  async update(id: string, updateUserDto: any): Promise<String> {
    try {
      this.prisma.users.update({
        where: {
          id,
        },
        data: updateUserDto,
      });
      return 'User updated';
    } catch (error) {
      return 'User not found';
    }
  }
  findOne(id: string): Promise<any> {
    return this.prisma.users.findUnique({
      where: {
        id,
      },
    });
  }

  async create(createUserDto: CreateUserDto): Promise<void> {
    await this.prisma.users.create({
      data: {
        id: randomUUID(),
        ...createUserDto,
      },
    });
  }
  async findAll(): Promise<any[]> {
    return await this.prisma.users.findMany();
  }
}
