import { Test, TestingModule } from '@nestjs/testing';
import { ListNotificationsIdService } from './list-notifications-id.service';

describe('ListNotificationsIdService', () => {
  let service: ListNotificationsIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListNotificationsIdService],
    }).compile();

    service = module.get<ListNotificationsIdService>(ListNotificationsIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
