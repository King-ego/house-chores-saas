import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersRepositoryModule } from './repositories/users.repository.module';
import { ListUsersByIdService } from './services/list-users-by-id/list-users-by-id.service';
import { CreateUserService } from './services/create-user/create-user.service';
import { SendInviteUserService } from './services/send-invite-user/send-invite-user.service';
import { InviteUsersController } from './controllers/invite-users/invite-users.controller';
import { NotificationsRepositoryModule } from '../notifications/repositories/notifications.repository.module';
import { PasswordService } from './services/password/password.service';
import { AcceptInviteService } from './services/accept-invite/accept-invite.service';

@Module({
  controllers: [UsersController, InviteUsersController],
  providers: [
    ListUsersByIdService,
    CreateUserService,
    SendInviteUserService,
    PasswordService,
    AcceptInviteService,
  ],
  imports: [UsersRepositoryModule, NotificationsRepositoryModule],
})
export class UsersModule {}
