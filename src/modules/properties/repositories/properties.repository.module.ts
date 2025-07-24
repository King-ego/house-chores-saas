import { Module } from '@nestjs/common';
import { PropertyRepositories } from './properties/property.repositories';

@Module({
  providers: [PropertyRepositories],
  exports: [PropertyRepositories],
})
export class PropertiesRepositoryModule {}
