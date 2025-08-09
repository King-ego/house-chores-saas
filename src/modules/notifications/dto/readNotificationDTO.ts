import { IsBoolean } from 'class-validator';

export default class ReadNotificationDTO {
  @IsBoolean()
  read: boolean;
}
