import { Test, TestingModule } from '@nestjs/testing';
import { ReadNotificationService } from './read-notification.service';

describe('ReadNotificationService', () => {
  let service: ReadNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadNotificationService],
    }).compile();

    service = module.get<ReadNotificationService>(ReadNotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
