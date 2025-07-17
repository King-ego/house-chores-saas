import { Injectable } from '@nestjs/common';
import { PrismaOrm, PostgresClient } from '../../../shared/prisma/prisma.orm';
import { User } from '../../../../prisma/generated/client/postgres';
import { UserContractor } from '../contractors/user.contractor';
import { CreateUserInput } from '../contractors/inputs/create-user-input';

@Injectable()
export class UsersRepository implements UserContractor {
  private readonly postgresOrm: PostgresClient;

  constructor() {
    this.postgresOrm = new PrismaOrm().prismaPostgres();
  }

  public async findByFilter(id: string): Promise<User> {
    return this.postgresOrm.$queryRaw`
      SELECT *
      FROM users
      WHERE users.id = ${id};
    `;
  }

  public async createUser(user: CreateUserInput): Promise<void> {
    await this.postgresOrm.user.create({
      data: user,
    });
  }
}
