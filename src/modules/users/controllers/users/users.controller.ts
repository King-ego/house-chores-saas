import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ListUsersByIdService } from '../../services/list-users-by-id/list-users-by-id.service';
import { User } from '../../../../../prisma/generated/client/postgres';
import { CreateUserService } from '../../services/create-user/create-user.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UserSessionDto } from '../../dto/user-session.dto';

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
  public async findOne(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<User> {
    const user = await this.listUsersService.execute(id);
    return user;
  }

  @Post('/create')
  public async createUser(@Body() createUser: CreateUserDto) {
    const user = {
      name: createUser.name,
      email: createUser.email,
      password: createUser.password,
    };

    const newUser = await this.createUsersService.execute(user);
    return { user: newUser };
  }

  @Post('/session')
  public createSession(@Body() userSession: UserSessionDto) {
    // This method is not implemented yet
    console.log(userSession);
    return { message: 'This action creates a session for a user' };
  }
}
