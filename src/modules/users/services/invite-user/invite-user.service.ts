import { Injectable } from '@nestjs/common';

interface InviteUserRequest {
  email: string;
  property_id: string;
  invited_by_id: string;
}

@Injectable()
export class InviteUserService {
  constructor() {}

  execute(inviteUser: InviteUserRequest): void {
    console.log({ inviteUser });
  }
}
