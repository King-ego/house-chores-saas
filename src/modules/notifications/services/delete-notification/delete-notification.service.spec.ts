import { Test, TestingModule } from '@nestjs/testing';
import { DeleteNotificationService } from './delete-notification.service';

describe('DeleteNotificationService', () => {
  let service: DeleteNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteNotificationService],
    }).compile();

    service = module.get<DeleteNotificationService>(DeleteNotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
