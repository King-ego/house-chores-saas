import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../../../users/repositories/users.repository';

interface IUser {
  email: string;
  password: string;
}

@Injectable()
export class CreateAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersRepository: UsersRepository,
  ) {}

  public async login(data: IUser) {
    const user = await this.usersRepository.findByFilter({
      email: data.email,
    });
    const payload = { email: data.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
