import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IVacation } from './interfaces/vacation.interface';
import { VacationInput } from './input-vacation.input';
import { VacationType } from './dto/create-vacation.dto';



@Injectable()
export class VacationService {
  constructor(@InjectModel('Vacation') private vacationModel: Model<IVacation>) {}

  async create(createVacationDto: VacationInput): Promise<VacationType> {
    const createdVacation = new this.vacationModel(createVacationDto);
    return await createdVacation.save();
  }

  async findAll(): Promise<VacationType[]> {
    return await this.vacationModel.find().exec();
  }

  async findOne(id: string): Promise<VacationType> {
    return await this.vacationModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<VacationType> {
    return await this.vacationModel.findByIdAndRemove(id);
  }

  async update(id: string, vacation: IVacation): Promise<VacationType> {
    return await this.vacationModel.findByIdAndUpdate(id, vacation, { new: true });
  }
}








