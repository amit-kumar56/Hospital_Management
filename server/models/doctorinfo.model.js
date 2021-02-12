const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({

  username: { type: String },
  password: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  degination: { type: String },
  department: { type: String },
  gender: { type: String },
  number: { type: Number },
  dob: { type: String },
  city: { type: String },
  state: { type: String },
  pic: { type: String },

  schoolten: { type: String },
  schooltwelve: { type: String },
  graduation: { type: String },
},
);

const doctorsinfo = mongoose.model('doctorsinfo', doctorSchema);

module.exports = doctorsinfo;