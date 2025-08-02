import { IsEmail, IsString } from 'class-validator';

export class UserSessionDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  password: string;
}
