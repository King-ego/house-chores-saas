import { Injectable } from '@nestjs/common';
import { PropertyRepositories } from '../../repositories/property.repositories';

interface CreatePropertyRequest {
  name: string;
  description?: string;
  created_by: string;
}

@Injectable()
export class CreatePropertiesServicesService {
  constructor(private readonly propertiesRepository: PropertyRepositories) {}

  public async execute(property: CreatePropertyRequest): Promise<void> {
    console.log(property);
    await this.propertiesRepository.create_property(property);
  }
}
