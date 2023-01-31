import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";

export abstract class UsersRepository {
  abstract create(createUserDto: CreateUserDto): Promise<any>;
  abstract findAll(): Promise<any[]>;
  abstract findOne(id: string): Promise<User>;
  abstract update(id: string, updateUserDto: any): Promise<String>;
}
