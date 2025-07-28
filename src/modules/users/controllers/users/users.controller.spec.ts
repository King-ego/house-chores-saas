import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { CreateUserService } from '../../services/create-user/create-user.service';
import { ListUsersByIdService } from '../../services/list-users-by-id/list-users-by-id.service';
import { randomUUID } from 'crypto';

describe('UsersController', () => {
  let controller: UsersController;
  let createUsersService: jest.Mocked<CreateUserService>;
  let listUsersByIdService: jest.Mocked<ListUsersByIdService>;

  const idMock = randomUUID();
  const createdAtMock = new Date();
  const updatedAtMock = new Date();
  const mockCreatedUser = {
    id: idMock,
    name: 'John Doe',
    email: 'jhondoe@gmail.com',
    created_at: createdAtMock,
    updated_at: updatedAtMock,
  };
  beforeEach(async () => {
    const mockCreateUserService = {
      execute: jest.fn().mockResolvedValue(mockCreatedUser), // Mocking the return value
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
    const createUserDto = {
      name: mockCreatedUser.name,
      email: mockCreatedUser.email,
    };

    const result = await controller.createUser({ ...createUserDto });

    expect(createUsersService.execute).toHaveBeenCalledWith(createUserDto);

    expect(result).toEqual({ user: mockCreatedUser });
  });
});
