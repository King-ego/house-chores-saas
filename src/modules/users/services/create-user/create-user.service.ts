import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../repositories/users.repository';
import { User } from '../../../../../prisma/generated/client/postgres';

interface CreateUserRequest {
  name: string;
  email: string;
}

@Injectable()
export class CreateUserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async execute(user: CreateUserRequest): Promise<User> {
    return this.usersRepository.createUser(user);
  }
}
