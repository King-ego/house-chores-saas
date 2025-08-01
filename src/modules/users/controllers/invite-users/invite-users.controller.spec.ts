import { Test, TestingModule } from '@nestjs/testing';
import { InviteUsersController } from './invite-users.controller';
import { SendInviteUserService } from '../../services/send-invite-user/send-invite-user.service';
import { randomUUID } from 'crypto';

describe('InviteUsersController', () => {
  let controller: InviteUsersController;
  let inviteUserService: jest.Mocked<SendInviteUserService>;

  beforeEach(async () => {
    const mockInviteUserService = {
      execute: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [InviteUsersController],
      providers: [
        {
          provide: SendInviteUserService,
          useValue: mockInviteUserService,
        },
      ],
    }).compile();

    controller = module.get<InviteUsersController>(InviteUsersController);
    inviteUserService =
      module.get<jest.Mocked<SendInviteUserService>>(SendInviteUserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should success create invite user', async () => {
    const invited_by_id = randomUUID();
    const property_id = randomUUID();
    const email = 'jhonDue@gmail.com';
    const inviteUserDto = { invited_by_id, property_id, email };

    const result = await controller.inviteUserByProperty(inviteUserDto);

    expect(inviteUserService.execute).toHaveBeenCalledWith(inviteUserDto);

    expect(result).toEqual({
      message: 'This action invites a user by property 2',
    });
  });
});
