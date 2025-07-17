import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { CreateUserService } from '../../services/create-user/create-user.service';
import { ListUsersByIdService } from '../../services/list-users-by-id/list-users-by-id.service';

describe('UsersController', () => {
  let controller: UsersController;
  let createUsersService: jest.Mocked<CreateUserService>;
  let listUsersByIdService: jest.Mocked<ListUsersByIdService>;

  beforeEach(async () => {
    const mockCreateUserService = {
      execute: jest.fn(),
    };
    const mockListUsersByIdService = {
      execute: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: CreateUserService,
          useValue: mockCreateUserService,
        },
        {
          provide: ListUsersByIdService,
          useValue: mockListUsersByIdService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    createUsersService =
      module.get<jest.Mocked<CreateUserService>>(CreateUserService);

    listUsersByIdService =
      module.get<jest.Mocked<ListUsersByIdService>>(ListUsersByIdService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('successfully created user', async () => {
    const createUserDto = { name: 'John Doe', email: 'jhondoe@gmail.com' };
    const result = await controller.createUser({ ...createUserDto });

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(createUsersService.execute).toHaveBeenCalledWith(createUserDto);

    expect(result).toEqual({ message: 'This action creates a user' });
  });
});
