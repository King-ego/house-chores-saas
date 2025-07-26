import { Injectable } from '@nestjs/common';
import {
  PostgresClient,
  PrismaOrm,
} from '../../../../shared/prisma/prisma.orm';
import PropertyContractor from '../../contractors/property.contractor';
import CreatePropertyInput from '../../contractors/inputs/create.property.input';
import { Property } from '../../../../../prisma/generated/client/postgres';

@Injectable()
export class PropertyRepositories implements PropertyContractor {
  private readonly postgresOrm: PostgresClient;

  constructor() {
    this.postgresOrm = new PrismaOrm().prismaPostgres();
  }

  public async create_property(
    property: CreatePropertyInput,
  ): Promise<Property> {
    return this.postgresOrm.property.create({
      data: {
        ...property,
        users: {
          connect: { id: property.created_by },
        },
      },
      include: { users: true },
    });
  }
}
