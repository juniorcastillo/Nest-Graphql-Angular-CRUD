import { Module } from '@nestjs/common';
import { EmployeeSchema } from './employee.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeResolver } from './employee.resolver';
import { EmployeeService } from './employee.service';
@Module({
    imports: [MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }])],
    providers: [EmployeeResolver, EmployeeService],
})
export class EmployeeModule {

    
}
