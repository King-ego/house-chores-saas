import { Injectable } from '@nestjs/common';
import { PrismaOrm, PostgresClient } from '../../../shared/prisma/prisma.orm';
import { User } from '../../../../prisma/generated/client/postgres';

@Injectable()
export class UsersRepository {
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
}
