import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../../prisma/generated/client/postgres';

import {
  PostgresClient,
  PrismaOrm,
} from '../../../../shared/prisma/prisma.orm';

@Injectable()
export class NotificationsService {
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
