import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VacationResolver } from './vacation.resolver';
import { VacationService } from './vacation.service';
import { VacationSchema } from './vacation.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Vacation', schema: VacationSchema }])],
    providers: [VacationResolver, VacationService],
})
export class VacationModule {

    
}
