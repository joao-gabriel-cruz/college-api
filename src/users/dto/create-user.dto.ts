import { IsString, IsEmail } from "class-validator";

export class CreateUserDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsString()
  role: "admin" | "teacher" | "student";
}
