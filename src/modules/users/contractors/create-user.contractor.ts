import { CreateInviteUserInput } from './inputs/invite-user-property-inputs';

export interface CreateUserContractor {
  createInviteUser: (createInvite: CreateInviteUserInput) => Promise<void>;
}
