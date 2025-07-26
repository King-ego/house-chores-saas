import { Controller, Post, Body } from '@nestjs/common';
import { CreatePropertyDto } from '../../dto/createPropertyDto';
import { CreatePropertiesService } from '../../services/create-properties/create-properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(
    private readonly createPropertiesServicesService: CreatePropertiesService,
  ) {}

  @Post('')
  public async createProperty(@Body() createPropertyDto: CreatePropertyDto) {
    const property = {
      name: createPropertyDto.name,
      description: createPropertyDto.description,
      created_by: createPropertyDto.created_by,
    };

    const newProperty =
      await this.createPropertiesServicesService.execute(property);

    return { property: newProperty };
  }
}
