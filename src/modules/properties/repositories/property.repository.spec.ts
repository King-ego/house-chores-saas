import { Test, TestingModule } from '@nestjs/testing';
import { PropertyRepositories } from './property.repositories';

describe('PropertyRepositories', () => {
  let service: PropertyRepositories;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyRepositories],
    }).compile();

    service = module.get<PropertyRepositories>(PropertyRepositories);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
