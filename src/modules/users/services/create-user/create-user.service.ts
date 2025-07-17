import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../repositories/users.repository';

interface CreateUserRequest {
  name: string;
  email: string;
}

@Injectable()
export class CreateUserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async execute(user: CreateUserRequest): Promise<string> {
    await this.usersRepository.createUser(user);
    return 'create user successfully';
  }
}
