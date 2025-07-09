import { Controller, Get } from '@nestjs/common';
import { CreateUsersService } from './services/create.users.service';
import { User } from '../../../prisma/generated/client/postgres';

@Controller('users')
export class UsersController {
  constructor(private readonly createUsersService: CreateUsersService) {}

  @Get()
  findAll(): string {
    return 'This action returns all users12';
  }

  @Get(':id')
  public async findOne(): Promise<User> {
    const user = await this.createUsersService.execute('1');
    return user;
  }
}
