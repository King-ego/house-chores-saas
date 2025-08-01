import { Test, TestingModule } from '@nestjs/testing';
import { SendInviteUserService } from './send-invite-user.service';

describe('SendInviteUserService', () => {
  let service: SendInviteUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendInviteUserService],
    }).compile();

    service = module.get<SendInviteUserService>(SendInviteUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
