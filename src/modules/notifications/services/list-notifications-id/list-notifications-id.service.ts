import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../repositories/notifications/notifications.repository';
import { Notification } from '../../../../../prisma/generated/client/postgres';

interface IRequestListNotificationsId {
  user_id: string;
}

@Injectable()
export class ListNotificationsIdService {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  public async execute(
    data: IRequestListNotificationsId,
  ): Promise<Notification[]> {
    const notifications =
      await this.notificationsRepository.listNotificationsByUserId(
        data.user_id,
      );
    return notifications;
  }
}
