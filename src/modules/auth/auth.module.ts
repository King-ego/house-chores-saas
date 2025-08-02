import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { CreateAuthService } from './services/create-auth/create-auth.service';

@Module({

  controllers: [AuthController],

  providers: [CreateAuthService]
})
export class AuthModule {}
