import { IsEmail, IsString, IsUUID } from 'class-validator';

export class InviteUserPropertyDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsUUID()
  property_id: string;

  @IsString()
  @IsUUID()
  invited_by_id: string;
}
