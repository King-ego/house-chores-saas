import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './shared/prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { PropertiesModule } from './modules/properties/properties.module';
import { NotificationsModule } from './modules/notifications/notifications.module';

@Module({
  imports: [PrismaModule, UsersModule, PropertiesModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
