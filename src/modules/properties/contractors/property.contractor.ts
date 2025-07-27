import CreatePropertyInput from './inputs/create.property.input';
import { Property } from '../../../../prisma/generated/client/postgres';

export default interface PropertyContractor {
  create_property: (propertyData: CreatePropertyInput) => Promise<Property>;
  get_property_by_id: (_: { user_id: string }) => Promise<Property | null>;
}
