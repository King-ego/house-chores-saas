import { Notification } from '../../../../prisma/generated/client/postgres';
import { CreateNotificationInput } from './inputs/create.notification.input';

export interface NotificationsContractors {
  listNotificationsByUserId(userId: string): Promise<Notification[]>;
  createNotification(_: CreateNotificationInput): Promise<void>;
}
