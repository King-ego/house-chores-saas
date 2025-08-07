import { Injectable } from '@nestjs/common';
import { PropertyRepositories } from '../../repositories/properties/property.repositories';
import { CustomerException } from '../../../../shared/errors/customerException';

@Injectable()
export class DeletePropertyService {
  constructor(private readonly propertiesRepository: PropertyRepositories) {}

  public async execute(property_id: string): Promise<void> {
    const property = await this.propertiesRepository.findByFilter({
      property_id,
    });

    if (!property) {
      throw new CustomerException('Property not found', 404);
    }

    await this.propertiesRepository.delete_property({ property_id });
  }
}
