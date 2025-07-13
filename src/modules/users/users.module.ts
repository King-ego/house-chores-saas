import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersRepositoryModule } from './repositories/users.repository.module';
import { ListUsersByIdService } from './services/list.users.by.id.service';

@Module({
  controllers: [UsersController],
  providers: [ListUsersByIdService],
  exports: [ListUsersByIdService],
  imports: [UsersRepositoryModule],
})
export class UsersModule {}
