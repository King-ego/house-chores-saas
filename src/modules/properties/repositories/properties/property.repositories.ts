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

  public async get_property_by_user_id(data: {
    user_id: string;
  }): Promise<Property[]> {
    const { user_id } = data;

    return this.postgresOrm.$queryRaw<Property[]>`
      SELECT *
      FROM properties p
             LEFT JOIN "_UserProperties" pu ON pu."B" = p.id
      WHERE p.created_by = ${user_id}
         OR pu."A" = ${user_id}
    `;
  }

  public async delete_property(data: { property_id: string }): Promise<void> {
    const { property_id } = data;

    await this.postgresOrm.$executeRaw`
      DELETE
      FROM "_UserProperties"
      WHERE "A" = ${property_id}
         OR "B" = ${property_id}
    `;

    await this.postgresOrm.$executeRaw`
      DELETE
      FROM properties
      where property_id = ${property_id}`;
  }
}
