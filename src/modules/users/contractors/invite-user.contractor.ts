import { CreateInviteUserInput } from './inputs/invite-user-property-inputs';
import { InviteUser } from '../../../../prisma/generated/client/postgres';

export interface InviteUserContractor {
  createInviteUser: (createInvite: CreateInviteUserInput) => Promise<void>;
  inviteUserById: (invite_id: string) => Promise<InviteUser | null>;
  deleteInviteUser: (invite_id: string) => Promise<void>;
}
