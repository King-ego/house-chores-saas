export interface CreateNotificationInput {
  userId: string;
  content: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read?: boolean;
}
