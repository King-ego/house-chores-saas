import { Controller, Post } from '@nestjs/common';

@Controller('properties')
export class PropertiesController {
  @Post('')
  createProperty() {
    // Logic to create a property
    return { message: 'Property created successfully' };
  }
}
