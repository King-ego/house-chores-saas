import { Injectable } from '@nestjs/common';
import { PrismaClient as PostgresClient } from '../../../prisma/generated/client/postgres';

@Injectable()
export class PrismaOrm {
  private readonly postgresClient: PostgresClient;

  constructor() {
    this.postgresClient = new PostgresClient();
  }

  public prismaPostgres(): PostgresClient {
    return this.postgresClient;
  }
}

export { PostgresClient };
