import { PrismaService } from "src/database/prisma.service";
import { randomUUID } from "crypto";
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/entities/user.entity";
import { UsersRepository } from "../users-repository";

@Injectable()
export class PrismaUserRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
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
