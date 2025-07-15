import { User } from '../../../../prisma/generated/client/postgres';
import { CreateUserInput } from './inputs/create-user-input';

export class UserContractor {
  findByFilter: (userId: string) => Promise<User>;
  createUser: (userData: CreateUserInput) => Promise<void>;
}
