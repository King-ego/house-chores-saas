import { Module } from '@nestjs/common';
import { UsersRepositoryModule } from './repositories/users.repository.module';
import { CreateUsersService } from './services/create.users.service';

@Module({
  imports: [UsersRepositoryModule],
  providers: [CreateUsersService],
  exports: [CreateUsersService],
})
export class UsersServicesModule {}
