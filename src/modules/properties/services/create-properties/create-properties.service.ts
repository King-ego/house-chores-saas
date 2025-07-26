import { Injectable } from '@nestjs/common';
import { PropertyRepositories } from '../../repositories/properties/property.repositories';
import { Property } from '../../../../../prisma/generated/client/postgres';

interface CreatePropertyRequest {
  name: string;
  description?: string;
  created_by: string;
}

@Injectable()
export class CreatePropertiesService {
  constructor(private readonly propertiesRepository: PropertyRepositories) {}

  public async execute(property: CreatePropertyRequest): Promise<Property> {
    return this.propertiesRepository.create_property(property);
  }
}
