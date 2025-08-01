import { CreateInviteUserInput } from './inputs/invite-user-property-inputs';
import { InviteUser } from '../../../../prisma/generated/client/postgres';
import { AcceptInviteInput } from './inputs/accept-invite-input';

export interface InviteUserContractor {
  createInviteUser: (createInvite: CreateInviteUserInput) => Promise<void>;
  inviteUserById: (invite_id: string) => Promise<InviteUser | null>;
  deleteInviteUser: (invite_id: string) => Promise<void>;
  acceptInvite: (_: AcceptInviteInput) => Promise<void>;
}
