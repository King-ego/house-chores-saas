import { Injectable } from '@nestjs/common';
import { InviteUsersRepository } from '../../repositories/invite-users/invite-users.repository';
import { CustomerException } from '../../../../shared/errors/customerException';
import { UsersRepository } from '../../repositories/users/users.repository';

@Injectable()
export class AcceptInviteService {
  constructor(
    private readonly inviteUserRepository: InviteUsersRepository,
    private readonly userRepository: UsersRepository,
  ) {}

  public async execute(invite_id: string) {
    const invite = await this.inviteUserRepository.inviteUserById(invite_id);
    if (!invite) {
      throw new CustomerException(`Invite with id ${invite_id} not found`, 404);
    }
    const user = await this.userRepository.findByFilter({
      email: invite.email,
    });

    await this.inviteUserRepository.acceptInvite({
      user_id: user.id,
      property_id: invite.property_id,
    });

    await this.inviteUserRepository.deleteInviteUser(invite_id);
  }
}
