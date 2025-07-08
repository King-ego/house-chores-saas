import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'This action returns all users12';
  }

  @Get(':id')
  findOne(): string {
    return 'This action returns a user';
  }
}
