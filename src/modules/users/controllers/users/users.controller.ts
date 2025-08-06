import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { ListUsersByIdService } from '../../services/list-users-by-id/list-users-by-id.service';
import { User } from '../../../../../prisma/generated/client/postgres';
import { CreateUserService } from '../../services/create-user/create-user.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUsersService: CreateUserService,
    private readonly listUsersService: ListUsersByIdService,
  ) {}

  @Get('/:user_id')
  @UseGuards(AuthGuard('jwt'))
  public async findOne(
    @Param('user_id', new ParseUUIDPipe({ version: '4' })) user_id: string,
  ): Promise<User> {
    const user = await this.listUsersService.execute(user_id);

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
}
