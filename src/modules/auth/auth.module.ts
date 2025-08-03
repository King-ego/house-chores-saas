import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { CreateAuthService } from './services/create-auth/create-auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret_key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [CreateAuthService],
  exports: [CreateAuthService],
})
export class AuthModule {}
