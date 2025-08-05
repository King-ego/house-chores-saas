import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../repositories/users.repository';
import { User } from '../../../../../prisma/generated/client/postgres';
import { PasswordService } from '../password/password.service';
import { CustomerException } from '../../../../shared/errors/customerException';

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class CreateUserService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly passwordService: PasswordService,
  ) {}

  public async execute(user: CreateUserRequest): Promise<User> {
    const existingUser = await this.usersRepository.findByFilter({
      email: user.email,
    });
    if (existingUser) {
      throw new CustomerException('User with this email already exists', 400);
    }
    user.password = await this.passwordService.hashPassword(user.password);
    return this.usersRepository.createUser(user);
  }
}
