import { Injectable } from '@nestjs/common';
import { InviteUsersRepository } from '../../repositories/invite-users/invite-users.repository';
import { NotificationsRepository } from '../../../notifications/repositories/notifications/notifications.repository';
import { UsersRepository } from '../../repositories/users/users.repository';
import { CustomerException } from '../../../../shared/errors/customerException';

interface InviteUserRequest {
  email: string;
  property_id: string;
  invited_by_id: string;
}

@Injectable()
export class SendInviteUserService {
  constructor(
    private readonly inviteUsersRepository: InviteUsersRepository,
    private readonly notificationsRepository: NotificationsRepository,
    private readonly usersRepository: UsersRepository,
  ) {}

  public async execute(inviteUser: InviteUserRequest): Promise<void> {
    const expires_at = new Date();

    await this.inviteUsersRepository.createInviteUser({
      ...inviteUser,
      expires_at,
    });

    const user = await this.usersRepository.findByFilter({
      email: inviteUser.email,
    });

    if (!user) {
      throw new CustomerException(`User not found`, 404);
    }

    await this.notificationsRepository.createNotification({
      sender_id: inviteUser.invited_by_id,
      content: 'Você foi convidado para participar de um imóvel',
      receiver_id: user.id,
      type: 'info',
      read: false,
    });
  }
}
