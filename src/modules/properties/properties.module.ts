import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller';
import { PropertyRepositoriesService } from './repositories/property.repositories.service';

@Module({
  controllers: [PropertiesController],
  providers: [PropertyRepositoriesService],
})
export class PropertiesModule {}
