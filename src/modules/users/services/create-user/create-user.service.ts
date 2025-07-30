import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../repositories/users.repository';
import { User } from '../../../../../prisma/generated/client/postgres';
import { PasswordService } from '../password/password.service';

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
    user.password = await this.passwordService.hashPassword(user.password);
    return this.usersRepository.createUser(user);
  }
}
