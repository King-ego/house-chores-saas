import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersRepositoryModule } from './repositories/users.repository.module';
import { ListUsersByIdService } from './services/list-users-by-id/list-users-by-id.service';
import { CreateUserService } from './services/create-user/create-user.service';

@Module({
  controllers: [UsersController],
  providers: [ListUsersByIdService, CreateUserService],
  exports: [ListUsersByIdService],
  imports: [UsersRepositoryModule],
})
export class UsersModule {}
