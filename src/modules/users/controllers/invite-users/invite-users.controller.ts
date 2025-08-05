import { Body, Controller, Post, Param, UseGuards } from '@nestjs/common';
import { InviteUserPropertyDto } from '../../dto/invite-user-property.dto';
import { SendInviteUserService } from '../../services/send-invite-user/send-invite-user.service';
import { AcceptInviteService } from '../../services/accept-invite/accept-invite.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('invite-users')
export class InviteUsersController {
  constructor(
    private readonly sendInviteUserService: SendInviteUserService,
    private readonly acceptInviteService: AcceptInviteService,
  ) {}

  @Post('/')
  public async inviteUserByProperty(@Body() inviteUser: InviteUserPropertyDto) {
    const invite = {
      invited_by_id: inviteUser.invited_by_id,
      property_id: inviteUser.property_id,
      email: inviteUser.email,
    };

    await this.sendInviteUserService.execute(invite);

    return { message: 'This action invites a user by property' };
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('/accept/:invite_id')
  public async acceptInvite(@Param('invite_id') invite_id: string) {
    await this.acceptInviteService.execute(invite_id);
    return { message: 'Invite accepted successfully' };
  }
}
