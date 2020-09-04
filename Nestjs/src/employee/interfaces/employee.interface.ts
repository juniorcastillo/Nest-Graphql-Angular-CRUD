import { Document } from 'mongoose';

export interface IEmployee extends Document {
    readonly name: string;
    readonly lastname: string;
    readonly age: number;
    readonly occupation: string;
    readonly address: string;
}
