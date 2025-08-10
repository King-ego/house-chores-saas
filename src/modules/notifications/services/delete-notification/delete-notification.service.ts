import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../repositories/notifications/notifications.repository';
import { CustomerException } from '../../../../shared/errors/customerException';

@Injectable()
export class DeleteNotificationService {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  public async execute(notificationId: string): Promise<void> {
    const notification = await this.notificationsRepository.findByFilter({
      notification_id: notificationId,
    });

    if (!notification) {
      throw new CustomerException('Notification not found', 404);
    }

    await this.notificationsRepository.deleteNotification(notificationId);
  }
}
