import { Test, TestingModule } from '@nestjs/testing';
import { InviteUsersController } from './invite-users.controller';
import { InviteUserService } from '../../services/invite-user/invite-user.service';

describe('InviteUsersController', () => {
  let controller: InviteUsersController;
  let inviteUserService: jest.Mock<InviteUserService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InviteUsersController],
    }).compile();

    controller = module.get<InviteUsersController>(InviteUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
