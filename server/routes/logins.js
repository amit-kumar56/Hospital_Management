const router = require('express').Router();
const express = require('express');

const bcrypt = require('bcrypt');
const app = express();

const saltRounds = 10;
let Doctorinfo = require('../models/doctorinfo.model');
let success;
let targetUrl;
router.route('/logins').post((req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
    Doctorinfo.findOne({username: req.body.username},function(err,user){
       if(err){
           console.log("not matched");
       }else{
           console.log(user.password);
        bcrypt.compare(req.body.password,user.password, function(err, result) {
            if(result==true){
              console.log("connected");
              targetUrl='/body';
             
            }else{
              console.log("not connected");
              targetUrl='/doctor';
             
            }
    });
       }
    });
    
  });

function handleRedirect(req, res) {
    
    res.redirect(targetUrl);
  }
app.get('*', handleRedirect);

module.exports = router;

/*
bcrypt.compare(req.body.password,user.password, function(err, result) {
            // result == true
            if (result) {
                
                  console.log("Error registering new user please try again.");
              } else {
                console.log("Welcome to the club!");
              }
    });*/