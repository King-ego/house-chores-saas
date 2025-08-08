import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications/notifications.controller';
import { ListNotificationsIdService } from './services/list-notifications-id/list-notifications-id.service';
import { NotificationsRepositoryModule } from './repositories/notifications.repository.module';
import { DeleteNotificationService } from './services/delete-notification/delete-notification.service';

@Module({
  controllers: [NotificationsController],
  providers: [ListNotificationsIdService, DeleteNotificationService],
  imports: [NotificationsRepositoryModule],
})
export class NotificationsModule {}
