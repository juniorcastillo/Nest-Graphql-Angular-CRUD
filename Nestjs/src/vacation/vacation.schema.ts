import * as mongoose from 'mongoose';

export const VacationSchema = new mongoose.Schema({
  datefrom: String,
  dateto: String,
  datemodified: String,
  availabledays: Number,
  employeeid: Number,
});
