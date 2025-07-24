import { Injectable } from '@nestjs/common';
import { PostgresClient, PrismaOrm } from '../../../../shared/prisma/prisma.orm';
import PropertyContractor from '../../contractors/property.contractor';
import CreatePropertyInput from '../../contractors/inputs/create.property.input';

@Injectable()
export class PropertyRepositories implements PropertyContractor {
  private readonly postgresOrm: PostgresClient;

  constructor() {
    this.postgresOrm = new PrismaOrm().prismaPostgres();
  }

  public async create_property(property: CreatePropertyInput): Promise<void> {
    await this.postgresOrm.property.create({
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
