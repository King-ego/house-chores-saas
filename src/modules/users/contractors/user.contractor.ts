import { User } from '../../../../prisma/generated/client/postgres';
import { CreateUserInput } from './inputs/create-user-input';
import { FindByFilterUserInput } from './inputs/find-by-filter-user-input';

export class UserContractor {
  findByFilter: (_: FindByFilterUserInput) => Promise<User>;
  createUser: (userData: CreateUserInput) => Promise<User>;
}
