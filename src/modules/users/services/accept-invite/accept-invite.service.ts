import { Injectable } from '@nestjs/common';
import { InviteUsersRepository } from '../../repositories/invite-users.repository';

@Injectable()
export class AcceptInviteService {
  constructor(private readonly inviteUserRepository: InviteUsersRepository) {}

  public async execute(invite_id: string) {
    //continuar aqui
    const invite = await this.inviteUserRepository.inviteUserById(invite_id);

  }
}
