import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersServicesModule } from './users.services.module';

@Module({
  controllers: [UsersController],
  providers: [],
  imports: [UsersServicesModule],
})
export class UsersModule {}
