const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  age: { type: Number },
  gender: { type: String },
  number: { type: Number },
},
);

const bookappointment = mongoose.model('bookappointment', bookSchema);

module.exports = bookappointment;