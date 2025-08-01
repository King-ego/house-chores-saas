import { Body, Controller, Post, Param } from '@nestjs/common';
import { InviteUserPropertyDto } from '../../dto/invite-user-property.dto';
import { SendInviteUserService } from '../../services/send-invite-user/send-invite-user.service';

@Controller('invite-users')
export class InviteUsersController {
  constructor(private readonly sendInviteUserService: SendInviteUserService) {}

  @Post('/')
  public async inviteUserByProperty(@Body() inviteUser: InviteUserPropertyDto) {
    const invite = {
      invited_by_id: inviteUser.invited_by_id,
      property_id: inviteUser.property_id,
      email: inviteUser.email,
    };

    await this.sendInviteUserService.execute(invite);

    return { message: 'This action invites a user by property 2' };
  }

  @Post('/accept/:invite_id')
  public acceptInvite(@Param('invite_id') invite_id: string) {
    /* await this.inviteUserService.acceptInvite(invite_id);*/
    console.log(invite_id);
    return { message: 'Invite accepted successfully' };
  }
}
