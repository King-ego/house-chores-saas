export interface CreateNotificationInput {
  sender_id: string;
  receiver_id: string;
  content: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read?: boolean;
}
