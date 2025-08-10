export interface CreateNotificationInput {
  sender_id: string;
  receiver_id: string;
  content: string;
  type: 'INFO' | 'warning' | 'error' | 'success';
  read?: boolean;
}
