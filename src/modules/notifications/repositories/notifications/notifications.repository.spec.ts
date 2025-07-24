import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsRepository } from './notifications.repository';

describe('NotificationsRepository', () => {
  let service: NotificationsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationsRepository],
    }).compile();

    service = module.get<NotificationsRepository>(NotificationsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
