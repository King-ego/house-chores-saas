import { Controller, Post, Body } from '@nestjs/common';
import { UserSessionDto } from '../../dto/user-session.dto';
import { CreateAuthService } from '../../services/create-auth/create-auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly createAuthService: CreateAuthService) {}

  @Post('/login')
  public async login(@Body() userAuth: UserSessionDto) {
    const user = {
      email: userAuth.email,
      password: userAuth.password,
    };

    const auth = await this.createAuthService.login(user);

    return auth;
  }
}
