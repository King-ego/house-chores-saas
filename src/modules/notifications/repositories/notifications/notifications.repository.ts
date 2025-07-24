import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../../prisma/generated/client/postgres';

import { NotificationsContractors } from '../../contractors/notifications-contractors';
import {
  PostgresClient,
  PrismaOrm,
} from '../../../../shared/prisma/prisma.orm';

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
      where: { user_id: userId },
    });
  }
}
