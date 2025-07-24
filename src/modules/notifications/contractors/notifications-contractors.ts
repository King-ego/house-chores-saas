import { Notification } from '../../../../prisma/generated/client/postgres';

export interface NotificationsContractors {
  listNotificationsByUserId(userId: string): Promise<Notification[]>;
}
