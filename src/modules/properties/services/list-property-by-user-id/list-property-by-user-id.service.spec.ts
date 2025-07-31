import { Test, TestingModule } from '@nestjs/testing';
import { ListPropertyByUserIdService } from './list-property-by-user-id.service';

describe('ListPropertyByUserIdService', () => {
  let service: ListPropertyByUserIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListPropertyByUserIdService],
    }).compile();

    service = module.get<ListPropertyByUserIdService>(ListPropertyByUserIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
