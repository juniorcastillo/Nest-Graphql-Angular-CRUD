import { Document } from 'mongoose';

export interface IVacation extends Document {
    readonly datefrom: string;
    readonly dateto: string;
    readonly datemodified: string;
    readonly availabledays: number;
    readonly employeeid: number;

}
