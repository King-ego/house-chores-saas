import { Injectable } from '@nestjs/common';

interface IRequestListNotificationsId {
  user_id: string;
}

@Injectable()
export class ListNotificationsIdService {
  public execute(data: IRequestListNotificationsId): string {
    return `List of notifications for user with ID: ${data.user_id}`;
  }
}
