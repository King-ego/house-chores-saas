import { Controller, Get, Param, Delete } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {
  @Get('/:userId')
  public notifications(@Param('userId') userId: string) {
    return {
      message: 'Notifications endpoint',
      userId,
    };
  }

  @Delete('/:notification_id')
  public notificationDetails(@Param('notification_id') notificationId: string) {
    return {
      message: 'Notification details endpoint',
      notificationId,
    };
  }
}
