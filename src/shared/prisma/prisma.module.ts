import { Module } from '@nestjs/common';
import { PrismaConnect } from './prisma.connect';

@Module({
  providers: [PrismaConnect],
})
export class PrismaModule {}
