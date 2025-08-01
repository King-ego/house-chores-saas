import { Test, TestingModule } from '@nestjs/testing';
import { AcceptInviteService } from './accept-invite.service';

describe('AcceptInviteService', () => {
  let service: AcceptInviteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcceptInviteService],
    }).compile();

    service = module.get<AcceptInviteService>(AcceptInviteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
