import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  getHello() {
    const user = this.prisma.users.create({
      data: {
        name: 'João',
        email: 'joao@test.com',
        id: '1',
        password: '123456',
        role: 'ADMIN',
      },
    });
    return user;
  }
}
