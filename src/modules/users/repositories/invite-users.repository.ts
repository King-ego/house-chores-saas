import { Injectable } from '@nestjs/common';
import { PostgresClient, PrismaOrm } from '../../../shared/prisma/prisma.orm';
import { CreateUserContractor } from '../contractors/create-user.contractor';
import { CreateInviteUserInput } from '../contractors/inputs/invite-user-property-inputs';

@Injectable()
export class InviteUsersRepository implements CreateUserContractor {
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
}
