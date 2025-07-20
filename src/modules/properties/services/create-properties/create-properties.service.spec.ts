import { Test, TestingModule } from '@nestjs/testing';
import { CreatePropertiesServicesService } from './create-properties.service';

describe('CreatePropertiesServicesService', () => {
  let service: CreatePropertiesServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatePropertiesServicesService],
    }).compile();

    service = module.get<CreatePropertiesServicesService>(CreatePropertiesServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
