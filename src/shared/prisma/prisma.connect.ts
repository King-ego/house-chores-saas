import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../prisma/generated/client/postgres';

@Injectable()
export class PrismaConnect extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    console.log('Postgres connected');
  }
}
