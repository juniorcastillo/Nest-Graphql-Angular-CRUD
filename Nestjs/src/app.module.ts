import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';
import { VacationModule } from './vacation/vacation.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
  GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
  }),
  ItemsModule,
  MongooseModule.forRoot('mongodb://localhost/nestgraphql'),
  EmployeeModule,
  VacationModule,
  AuthModule,
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
