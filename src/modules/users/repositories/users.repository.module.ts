import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { InviteUsersRepository } from './invite-users.repository';

@Module({
  providers: [UsersRepository, InviteUsersRepository],
  exports: [UsersRepository, InviteUsersRepository],
})
export class UsersRepositoryModule {}
