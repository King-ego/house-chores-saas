import { Injectable } from '@nestjs/common';
import { PropertyRepositories } from '../../repositories/properties/property.repositories';
import { Property } from '../../../../../prisma/generated/client/postgres';

type CreatePropertyInput = {
  user_id: string;
};

@Injectable()
export class ListPropertyByUserIdService {
  constructor(private readonly propertiesRepository: PropertyRepositories) {}

  public async execute({ user_id }: CreatePropertyInput): Promise<Property[]> {
    return this.propertiesRepository.get_property_by_user_id({ user_id });
  }
}
