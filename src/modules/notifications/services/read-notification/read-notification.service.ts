import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../repositories/notifications/notifications.repository';

interface CreateNotificationInput {
  notificationId: string;
  read: boolean;
}

@Injectable()
export class ReadNotificationService {
  constructor(
    private readonly notificationRepository: NotificationsRepository,
  ) {}

  public async execute(data: CreateNotificationInput): Promise<void> {
    const { notificationId, read } = data;

    await this.notificationRepository.readNotification({
      notificationId,
      read,
    });
  }
}
