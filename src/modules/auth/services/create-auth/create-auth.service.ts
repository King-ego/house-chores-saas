import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../../../users/repositories/users.repository';
import { CustomerException } from '../../../../shared/errors/customerException';
import { PasswordService } from '../../../users/services/password/password.service';

interface IUser {
  email: string;
  password: string;
}

@Injectable()
export class CreateAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersRepository: UsersRepository,
    private readonly passwordService: PasswordService,
  ) {}

  public async login(data: IUser) {
    const user = await this.usersRepository.findByFilter({
      email: data.email,
    });

    if (!user) {
      throw new CustomerException('Password or email is incorrect', 401);
    }

    const validPassword = await this.passwordService.comparePasswords(
      data.password,
      user.password,
    );
    if (!validPassword) {
      throw new CustomerException('Password or email is incorrect', 401);
    }

    const payload = { email: data.email, sub: user.id };
    return {
      user: {
        ...user,
        password: undefined,
      },
      token: this.jwtService.sign(payload),
    };
  }
}
