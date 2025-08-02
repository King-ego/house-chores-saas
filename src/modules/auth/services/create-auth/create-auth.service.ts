import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

interface IUser {
  email: string;
  password: string;
}

@Injectable()
export class CreateAuthService {
  constructor(private readonly jwtService: JwtService,) {}

  public async login(user: IUser) {
    /*const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };*/
  }
}
