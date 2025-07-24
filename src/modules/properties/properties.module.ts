import { Module } from '@nestjs/common';
import { PropertiesController } from './controllers/properties/properties.controller';
import { CreatePropertiesService } from './services/create-properties/create-properties.service';
import { PropertiesRepositoryModule } from './repositories/properties.repository.module';

@Module({
  controllers: [PropertiesController],
  providers: [CreatePropertiesService],
  imports: [PropertiesRepositoryModule],
})
export class PropertiesModule {}
