import { Module } from '@nestjs/common';
import { PropertiesController } from './controllers/properties/properties.controller';
import { CreatePropertiesService } from './services/create-properties/create-properties.service';
import { PropertiesRepositoryModule } from './repositories/properties.repository.module';
import { ListPropertyByUserIdService } from './services/list-property-by-user-id/list-property-by-user-id.service';

@Module({
  controllers: [PropertiesController],
  providers: [CreatePropertiesService, ListPropertyByUserIdService],
  imports: [PropertiesRepositoryModule],
})
export class PropertiesModule {}
