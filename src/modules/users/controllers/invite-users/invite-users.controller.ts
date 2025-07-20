import { Body, Controller, Post } from '@nestjs/common';
import { InviteUserPropertyDto } from '../../dto/invite-user-property.dto';
import { InviteUserService } from '../../services/invite-user/invite-user.service';

@Controller('invite-users')
export class InviteUsersController {
  constructor(private readonly inviteUserService: InviteUserService) {}

  @Post('/invite/property')
  public inviteUserByProperty(@Body() inviteUser: InviteUserPropertyDto) {
    const invite = {
      invited_by_id: inviteUser.invited_by_id,
      property_id: inviteUser.property_id,
      email: inviteUser.email,
    };

    this.inviteUserService.execute(invite);

    return { message: 'This action invites a user by property' };
  }
}
