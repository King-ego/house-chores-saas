import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../../prisma/generated/client/postgres';

import { NotificationsContractors } from '../../contractors/notifications-contractors';
import {
  PostgresClient,
  PrismaOrm,
} from '../../../../shared/prisma/prisma.orm';
import { CreateNotificationInput } from '../../contractors/inputs/create.notification.input';

@Injectable()
export class NotificationsRepository implements NotificationsContractors {
  private readonly postgresOrm: PostgresClient;

  constructor() {
    this.postgresOrm = new PrismaOrm().prismaPostgres();
  }

  public async listNotificationsByUserId(
    userId: string,
  ): Promise<Notification[]> {
    return this.postgresOrm.notification.findMany({
      where: { receiver_id: userId },
    });
  }

  public async createNotification(
    data: CreateNotificationInput,
  ): Promise<void> {
    const { content, type, read, sender_id, receiver_id } = data;

    await this.postgresOrm.notification.create({
      data: {
        receiver_id,
        sender_id,
        content,
        type,
        read: read ?? false,
      },
    });
  }
}
