import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications/notifications.controller';
import { ListNotificationsIdService } from './services/list-notifications-id/list-notifications-id.service';
import { NotificationsRepositoryModule } from './repositories/notifications.repository.module';

@Module({
  controllers: [NotificationsController],
  providers: [ListNotificationsIdService],
  imports: [NotificationsRepositoryModule],
})
export class NotificationsModule {}
