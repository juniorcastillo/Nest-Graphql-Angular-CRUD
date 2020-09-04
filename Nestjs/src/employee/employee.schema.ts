import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  age: Number,
  occupation: String,
  address: String,
});
