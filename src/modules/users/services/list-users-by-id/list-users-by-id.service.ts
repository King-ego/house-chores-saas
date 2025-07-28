import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../repositories/users.repository';
import { User } from '../../../../../prisma/generated/client/postgres';

@Injectable()
export class ListUsersByIdService {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async execute(id: string): Promise<User> {
    return this.usersRepository.findByFilter({ id });
  }
}
