const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://amitreact:12345@cluster0-3bsdy.gcp.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

//const exercisesRouter = require('./routes/exercises');
//const usersRouter = require('./routes/users');
const appointmentRouter = require('./routes/appointment');
const docRouter = require('./routes/doctorsinfo');
const doctorRouter = require('./routes/logins');


//app.use('/exercises', exercisesRouter);
//app.use('/users', usersRouter);
app.use('/body',appointmentRouter);
app.use('/adddoc',docRouter);
app.use('/doc',doctorRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});