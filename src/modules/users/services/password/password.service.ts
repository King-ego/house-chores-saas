import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
  private readonly SALT_ROUNDS = 10;

  public async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.SALT_ROUNDS);
  }

  public async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    console.log('Password:', password);
    console.log('HashedPassword:', hashedPassword);

    const result = await bcrypt.compare(password, hashedPassword);
    console.log('Compare result:', result);
    return result;
  }
}
