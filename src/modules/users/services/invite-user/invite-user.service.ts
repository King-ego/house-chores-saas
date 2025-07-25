import { Injectable } from '@nestjs/common';
import { InviteUsersRepository } from '../../repositories/invite-users.repository';
import { NotificationsRepository } from '../../../notifications/repositories/notifications/notifications.repository';

interface InviteUserRequest {
  email: string;
  property_id: string;
  invited_by_id: string;
}

@Injectable()
export class InviteUserService {
  constructor(
    private readonly inviteUsersRepository: InviteUsersRepository,
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  public async execute(inviteUser: InviteUserRequest): Promise<void> {
    const expires_at = new Date();

    await this.inviteUsersRepository.createInviteUser({
      ...inviteUser,
      expires_at,
    });
  }
}
