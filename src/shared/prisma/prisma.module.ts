import { Module } from '@nestjs/common';
import { PrismaPostgres } from './prisma.postgres';

@Module({
  providers: [PrismaPostgres],
})
export class PrismaModule {}
