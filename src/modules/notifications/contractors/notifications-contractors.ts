import { Notification } from '../../../../prisma/generated/client/postgres';
import { CreateNotificationInput } from './inputs/create.notification.input';
import { ReadNotificationInput } from './inputs/read-notification.input';

export interface NotificationsContractors {
  listNotificationsByUserId(userId: string): Promise<Notification[]>;
  createNotification(_: CreateNotificationInput): Promise<void>;
  deleteNotification(notificationId: string): Promise<void>;
  readNotification(_: ReadNotificationInput): Promise<void>;
}
