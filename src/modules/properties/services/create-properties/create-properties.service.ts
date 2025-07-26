import { Injectable } from '@nestjs/common';
import { PropertyRepositories } from '../../repositories/properties/property.repositories';

interface CreatePropertyRequest {
  name: string;
  description?: string;
  created_by: string;
}

@Injectable()
export class CreatePropertiesService {
  constructor(private readonly propertiesRepository: PropertyRepositories) {}

  public async execute(property: CreatePropertyRequest): Promise<void> {
    await this.propertiesRepository.create_property(property);
  }
}
