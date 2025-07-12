import CreatePropertyInput from './inputs/create.property.input';

export default interface PropertyContractor {
  create_property: (propertyData: CreatePropertyInput) => Promise<void>;
}
