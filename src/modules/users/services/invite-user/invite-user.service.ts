import { Injectable } from '@nestjs/common';
import { InviteUsersRepository } from '../../repositories/invite-users.repository';

interface InviteUserRequest {
  email: string;
  property_id: string;
  invited_by_id: string;
}

@Injectable()
export class InviteUserService {
  constructor(private readonly inviteUsersRepository: InviteUsersRepository) {}

  public async execute(inviteUser: InviteUserRequest): Promise<void> {
    const expires_at = new Date();

    await this.inviteUsersRepository.createInviteUser({
      ...inviteUser,
      expires_at,
    });
  }
}
