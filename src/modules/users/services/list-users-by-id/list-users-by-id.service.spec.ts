import { Test, TestingModule } from '@nestjs/testing';
import { ListUsersByIdService } from './list-users-by-id.service';

describe('ListUsersByIdService', () => {
  let service: ListUsersByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListUsersByIdService],
    }).compile();

    service = module.get<ListUsersByIdService>(ListUsersByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
