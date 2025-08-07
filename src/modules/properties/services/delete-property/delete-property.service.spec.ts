import { Test, TestingModule } from '@nestjs/testing';
import { DeletePropertyService } from './delete-property.service';

describe('DeletePropertyService', () => {
  let service: DeletePropertyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeletePropertyService],
    }).compile();

    service = module.get<DeletePropertyService>(DeletePropertyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
