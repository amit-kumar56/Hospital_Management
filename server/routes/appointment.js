const router = require('express').Router();
let Book = require('../models/bookappointment.model');

router.route('/').get((req, res) => {
  Book.find()
    .then(appointment => res.json(appointment))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const age = Number(req.body.age);
  const gender = req.body.gender;
  const number = Number(req.body.number);

  const newAppointment = new Book({
      firstname,
      lastname,
      age,
      gender,
      number
      
    });

  newAppointment.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;