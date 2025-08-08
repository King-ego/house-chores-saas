import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../repositories/notifications/notifications.repository';

@Injectable()
export class DeleteNotificationService {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  public async execute(notificationId: string): Promise<void> {
    await this.notificationsRepository.deleteNotification(notificationId);
  }
}
