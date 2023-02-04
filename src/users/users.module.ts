import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../database/prisma.service';
import { UsersRepository } from './repositories/users-repository';
import { PrismaUserRepository } from './repositories/prisma/users-repository';

@Module({
  controllers: [UsersController],
  providers: [
    PrismaService,
    UsersService,
    {
      provide: UsersRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UsersModule {}
