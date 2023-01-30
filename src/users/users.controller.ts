import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "src/database/prisma.service";
import { UsersRepository } from "./repositories/users-repository";

@Controller("users")
export class UsersController {
  constructor(private userRepository: UsersRepository) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userRepository.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userRepository.findOne(id);
  }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userRepository.update(+id, updateUserDto);
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.userRepository.remove(+id);
  // }
}
