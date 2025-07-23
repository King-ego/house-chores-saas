import { Controller, Get, Param } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {
  @Get('/:userId')
  public notifications(@Param('userId') userId: string) {
    return {
      message: 'Notifications endpoint',
      userId,
    };
  }
}
