export interface CreateInviteUserInput {
  email: string;
  property_id: string;
  expires_at: Date;
  invited_by_id: string;
}
