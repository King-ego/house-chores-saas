import { Controller, Get, Param, Delete } from '@nestjs/common';
import { ListNotificationsIdService } from '../../services/list-notifications-id/list-notifications-id.service';
import { DeleteNotificationService } from '../../services/delete-notification/delete-notification.service';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly listNotificationsByIdServices: ListNotificationsIdService,
    private readonly deleteNotificationService: DeleteNotificationService,
  ) {}

  @Get('/:userId')
  public async notifications(@Param('userId') userId: string) {
    const notifications = await this.listNotificationsByIdServices.execute({
      user_id: userId,
    });
    return notifications;
  }

  @Delete('/:notification_id')
  public async notificationDetails(
    @Param('notification_id') notificationId: string,
  ) {
    await this.deleteNotificationService.execute(notificationId);

    return {
      message: 'Notification was delete',
    };
  }
}
