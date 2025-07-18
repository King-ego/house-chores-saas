import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller';
import { PropertyRepositories } from './repositories/property.repositories';
import { CreatePropertiesServicesService } from './services/create-properties/create-properties-services.service';

@Module({
  controllers: [PropertiesController],
  providers: [PropertyRepositories, CreatePropertiesServicesService],
})
export class PropertiesModule {}
