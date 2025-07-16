import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ListUsersByIdService } from '../services/list-users-by-id/list-users-by-id.service';
import { User } from '../../../../prisma/generated/client/postgres';
import { CreateUserService } from '../services/create-user/create-user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { InviteUserPropertyDto } from '../dto/invite-user-property.dto';
import { InviteUserService } from '../services/invite-user/invite-user.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUsersService: CreateUserService,
    private readonly listUsersService: ListUsersByIdService,
    private readonly inviteUserService: InviteUserService,
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
    };

    await this.createUsersService.execute(user);
    return { message: 'This action creates a user' };
  }

  @Post('/invite/property')
  public inviteUserByProperty(@Body() inviteUser: InviteUserPropertyDto) {
    const invite = {
      invited_by_id: inviteUser.invited_by_id,
      property_id: inviteUser.property_id,
      email: inviteUser.email,
    };

    this.inviteUserService.execute(invite);

    return { message: 'This action invites a user by property' };
  }
}
