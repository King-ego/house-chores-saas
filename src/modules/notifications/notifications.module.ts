import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications/notifications.controller';
import { ListNotificationsIdService } from './services/list-notifications-id/list-notifications-id.service';

@Module({
  controllers: [NotificationsController],
  providers: [ListNotificationsIdService]
})
export class NotificationsModule {}
