import { Body, Controller, Get, Post } from '@nestjs/common';
import { ListUsersByIdService } from './services/list-users-by-id/list-users-by-id.service';
import { User } from '../../../prisma/generated/client/postgres';
import { CreateUserService } from './services/create-user/create-user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUsersService: CreateUserService,
    private readonly listUsersService: ListUsersByIdService,
  ) {}

  @Get()
  findAll(): string {
    return 'This action returns all users12';
  }

  @Get(':id')
  public async findOne(): Promise<User> {
    const user = await this.listUsersService.execute('1');
    return user;
  }

  @Post('/create')
  public async createUser(@Body() createUser: CreateUserDto) {
    const user = {
      name: createUser.name,
      email: createUser.email,
    };

    await this.createUsersService.execute(user);
    return { message: 'This action creates a user' };
  }
}
