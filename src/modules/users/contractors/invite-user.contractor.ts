import { CreateInviteUserInput } from './inputs/invite-user-property-inputs';

export interface InviteUserContractor {
  createInviteUser: (createInvite: CreateInviteUserInput) => Promise<void>;
}
