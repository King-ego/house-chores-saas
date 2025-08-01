import { Injectable } from '@nestjs/common';
import { PostgresClient, PrismaOrm } from '../../../shared/prisma/prisma.orm';
import { InviteUserContractor } from '../contractors/invite-user.contractor';
import { CreateInviteUserInput } from '../contractors/inputs/invite-user-property-inputs';
import { InviteUser } from '../../../../prisma/generated/client/postgres';
import { AcceptInviteInput } from '../contractors/inputs/accept-invite-input';

@Injectable()
export class InviteUsersRepository implements InviteUserContractor {
  private readonly postgresOrm: PostgresClient;

  constructor() {
    this.postgresOrm = new PrismaOrm().prismaPostgres();
  }

  public async createInviteUser(data: CreateInviteUserInput): Promise<void> {
    const { email, invited_by_id, property_id, expires_at } = data;
    await this.postgresOrm.inviteUser.create({
      data: {
        email,
        invited_by_id,
        property_id,
        expires_at,
      },
    });
  }

  public async inviteUserById(invite_id: string): Promise<InviteUser | null> {
    return this.postgresOrm.inviteUser.findUnique({
      where: { id: invite_id },
    });
  }

  public async deleteInviteUser(invite_id: string): Promise<void> {
    await this.postgresOrm.inviteUser.delete({
      where: { id: invite_id },
    });
  }

  public async acceptInvite(data: AcceptInviteInput) {
    const { user_id, property_id } = data;
    await this.postgresOrm.$executeRaw`
      INSERT INTO "_UserProperties" ("A", "B")
      VALUES (${property_id}, ${user_id})
      ON CONFLICT DO NOTHING;
    `;
  }
}
