import { Module } from '@nestjs/common';
import { UsersRepository } from './users/users.repository';
import { InviteUsersRepository } from './invite-users/invite-users.repository';

@Module({
  providers: [UsersRepository, InviteUsersRepository],
  exports: [UsersRepository, InviteUsersRepository],
})
export class UsersRepositoryModule {}
