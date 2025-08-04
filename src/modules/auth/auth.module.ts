import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { CreateAuthService } from './services/create-auth/create-auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersRepositoryModule } from '../users/repositories/users.repository.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret_key',
      signOptions: { expiresIn: '1d' },
    }),
    UsersRepositoryModule,
  ],
  controllers: [AuthController],
  providers: [CreateAuthService],
  exports: [CreateAuthService],
})
export class AuthModule {}
