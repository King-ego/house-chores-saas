import CreatePropertyInput from './inputs/create.property.input';
import { Property } from '../../../../prisma/generated/client/postgres';

export default interface PropertyContractor {
  create_property: (propertyData: CreatePropertyInput) => Promise<Property>;
}
