import { Module } from '@nestjs/common';
import { UsersRepositoryModule } from './repositories/users.repository.module';
import { ListUsersByIdService } from './services/list.users.by.id.service';

@Module({
  imports: [UsersRepositoryModule],
  providers: [ListUsersByIdService],
  exports: [ListUsersByIdService],
})
export class UsersServicesModule {}
