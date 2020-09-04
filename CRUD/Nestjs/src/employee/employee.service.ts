import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeType } from './dto/create-employee.dto';
import { EmployeeInput } from './input-employee.input';
import { IEmployee } from './interfaces/employee.interface';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel('Employee') private employeeModel: Model<IEmployee>) {}

  async create(createEmployeeDto: EmployeeInput): Promise<EmployeeType> {
    const createdEmployee = new this.employeeModel(createEmployeeDto);
    return await createdEmployee.save();
  }

  async findAll(): Promise<EmployeeType[]> {
    return await this.employeeModel.find().exec();
  }

  async findOne(id: string): Promise<EmployeeType> {
    return await this.employeeModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<EmployeeType> {
    return await this.employeeModel.findByIdAndRemove(id);
  }

  async update(id: string, employee: IEmployee): Promise<EmployeeType> {
    return await this.employeeModel.findByIdAndUpdate(id, employee, { new: true });
  }
}








