import { Injectable } from '@nestjs/common';
import { PrismaOrm, PostgresClient } from '../../../shared/prisma/prisma.orm';
import { User } from '../../../../prisma/generated/client/postgres';
import { UserContractor } from '../contractors/user.contractor';
import { CreateUserInput } from '../contractors/inputs/create-user-input';
import { FindByFilterUserInput } from '../contractors/inputs/find-by-filter-user-input';

@Injectable()
export class UsersRepository implements UserContractor {
  private readonly postgresOrm: PostgresClient;

  constructor() {
    this.postgresOrm = new PrismaOrm().prismaPostgres();
  }

  public async findByFilter(data: FindByFilterUserInput): Promise<User> {
    const { id, email } = data;
    const user = await this.postgresOrm.$queryRaw<User[]>`
      SELECT *
      FROM users
      WHERE users.id = ${id}
         OR users.email = ${email}
      LIMIT 1
    `;

    return user[0];
  }

  public async createUser(user: CreateUserInput): Promise<User> {
    return this.postgresOrm.user.create({
      data: user,
    });
  }
}
