import { Test, TestingModule } from '@nestjs/testing';
import { InviteUserService } from './invite-user.service';

describe('InviteUserService', () => {
  let service: InviteUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InviteUserService],
    }).compile();

    service = module.get<InviteUserService>(InviteUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
