const router = require('express').Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
let Doctorinfo = require('../models/doctorinfo.model');

router.route('/add').post((req, res) => {

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
        // Store hash in your password DB.
   
  const newUser = new Doctorinfo({
     
   username : req.body.username,
   password : hash,
   firstname : req.body.firstname,
   lastname :req.body.lastname,
   email : req.body.email,
   degination : req.body.degination,
   department : req.body.department,
   gender : req.body.gender,
   number : req.body.number,
   dob : req.body.dob,
   city : req.body.city,
   state : req.body.state,
   pic : req.body.pic,
   schoolten : req.body.schoolten,
   schooltwelve : req.body.schooltwelve,
   graduation : req.body.graduation
    });

  newUser.save()
    .then(() => res.json('Doctor added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
});
});
module.exports = router;