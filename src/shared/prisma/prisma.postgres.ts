import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../prisma/generated/client/postgres';

@Injectable()
export class PrismaPostgres extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
