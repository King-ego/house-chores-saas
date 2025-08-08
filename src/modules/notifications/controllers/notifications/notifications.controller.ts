import { Controller, Get, Param, Delete } from '@nestjs/common';
import { ListNotificationsIdService } from '../../services/list-notifications-id/list-notifications-id.service';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly listNotificationsByIdServices: ListNotificationsIdService,
  ) {}

  @Get('/:userId')
  public notifications(@Param('userId') userId: string) {
    const notifications = this.listNotificationsByIdServices.execute({
      user_id: userId,
    });
    return notifications;
  }

  @Delete('/:notification_id')
  public notificationDetails(@Param('notification_id') notificationId: string) {
    return {
      message: 'Notification details endpoint',
      notificationId,
    };
  }
}
