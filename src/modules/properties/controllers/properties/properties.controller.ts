import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { CreatePropertyDto } from '../../dto/createPropertyDto';
import { CreatePropertiesService } from '../../services/create-properties/create-properties.service';
import { ListPropertyByUserIdService } from '../../services/list-property-by-user-id/list-property-by-user-id.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('properties')
export class PropertiesController {
  constructor(
    private readonly createPropertiesServicesService: CreatePropertiesService,
    private readonly listPropertyByUserId: ListPropertyByUserIdService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
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

  @Get('/users/:user_id')
  public async listPropertiesByUserId(@Param('user_id') user_id: string) {
    const user = {
      user_id,
    };

    const properties = await this.listPropertyByUserId.execute(user);
    return { properties };
  }
}
