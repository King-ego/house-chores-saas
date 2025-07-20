import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller';
import { PropertyRepositories } from './repositories/property.repositories';
import { CreatePropertiesService } from './services/create-properties/create-properties.service';

@Module({
  controllers: [PropertiesController],
  providers: [PropertyRepositories, CreatePropertiesService],
})
export class PropertiesModule {}
