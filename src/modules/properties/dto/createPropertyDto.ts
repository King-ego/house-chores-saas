import { IsString, IsUUID, IsOptional } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  name: string;

  @IsString()
  @IsUUID()
  created_by: string;

  @IsString()
  @IsOptional()
  description?: string;
}
