import React, { Component } from "react";
import { Dropdown,Form,Col,Container,InputGroup,Image,Button,ButtonGroup } from 'react-bootstrap';
import "./login.css";
import axios from 'axios';

import {Switch,Route, Link ,BrowserRouter,Router} from 'react-router-dom'
import ImageUploader from 'react-images-upload';
export default class Adddoc extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail= this.onChangeEmail.bind(this);
        this.onChangeDegination = this.onChangeDegination.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeSchoolten = this.onChangeSchoolten.bind(this);
        this.onChangeSchooltwelve = this.onChangeSchooltwelve.bind(this);
        this.onChangeGraduation = this.onChangeGraduation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username:'',
          password: '',
          firstname: '',
          lastname: '',
          email: '',
          degination:'',
          department:'',
          gender: '',
          number: '',
          dob: '',
          city: '',
          state: '',
          schoolten: '',
          schooltwelve: '',
          graduation: ''


        }
      }
      onChangeUsername(e) {
        this.setState({
          username: e.target.value,
        })
      }
      onChangePassword(e) {
        this.setState({
          password: e.target.value,
        })
      }
      onChangeFirstname(e) {
        this.setState({
          firstname: e.target.value,
        })
      }
      onChangeLastname(e) {
        this.setState({
          lastname: e.target.value,
        })
      }
      onChangeEmail(e) {
        this.setState({
          email: e.target.value,
        })
      }
      onChangeDegination(e) {
        this.setState({
          degination: e.target.value,
        })
      }
      onChangeDepartment(e) {
        this.setState({
          department: e.target.value,
        })
      }
      onChangeGender(e) {
        this.setState({
          gender: e.target.value,
        })
      }
      onChangeNumber(e) {
        this.setState({
          number: e.target.value,
        })
      }
      onChangeDob(e) {
        this.setState({
          dob: e.target.value,
        })
      }
      onChangeCity(e) {
        this.setState({
          city: e.target.value,
        })
      }
      onChangeState(e) {
        this.setState({
          state: e.target.value,
        })
      }
      onChangeSchoolten(e) {
        this.setState({
          schoolten: e.target.value,
        })
      }
      onChangeSchooltwelve(e) {
        this.setState({
          schooltwelve: e.target.value,
        })
      }
      onChangeGraduation(e) {
        this.setState({
          graduation: e.target.value,
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const doctors = {
          username: this.state.username,
          password: this.state.password,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          degination: this.state.degination,
          department: this.state.department,
          gender: this.state.gender,
          number: this.state.number,
          dob: this.state.dob,
          city: this.state.city,
          state: this.state.state,
          schoolten: this.state.schoolten,
          schooltwelve: this.state.schooltwelve,
          graduation: this.state.graduation
    
        }
    
        console.log(doctors);
    
        axios.post('/adddoc/add', doctors)
          .then(res => console.log(res.data));
    
        this.setState({
            username:'',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            degination:'',
            department:'',
            gender: '',
            number: '',
            dob: '',
            city: '',
            state: '',
            schoolten: '',
            schooltwelve: '',
            graduation: ''
  
        })
      }
    //onDrop(picture) {
      //  this.setState({
        //    pictures: this.state.pictures.concat(picture),
        //});
   // }
    render() {
        return (
            <div className="jumbotron .text-warning " style={{backgroundColor:"red" }}>
                <img src="images/hospital.png" className="img-rounded" alt="Cinque Terre" style={{blockSize:"130px",marginLeft:"280px" }}/><br/>
                <h style={{marginLeft:"150px" ,fontSize:"30px"}} className=" text-white">ADD DOCTOR'S INFORMATION</h>
                <div className="jumbotron fluid  text-white" style={{backgroundColor:"red" ,width:"500px" ,marginLeft:"130px"}}>
                    <form onSubmit={this.onSubmit}>
                        
                        <div className="form-group">
                         <label>Username</label>
                         <input type="text" className="form-control" 
                          value={this.state.username} 
                          onChange={this.onChangeUsername} 
                          />
                        </div>
                        <div className="form-group">
                         <label>Password</label>
                         <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} required="required"/>
                        </div>
                        <div className="form-group">
                         <label>First Name</label>The connection has timed out
                         <input type="text" className="form-control" placeholder="Enter Your First Name" value={this.state.firstname} onChange={this.onChangeFirstname} required="required"/>
                        </div>
                        
                        <div className="form-group">
                         <label>Last Name</label>
                         <input type="text" className="form-control" placeholder="Enter Your Last Name" value={this.state.lastname} onChange={this.onChangeLastname} required="required"/>
                        </div>
                        
                        <div className="form-group">
                         <label>Email</label>
                         <input type="email" className="form-control" placeholder="Enter Email" value={this.state.email} onChange={this.onChangeEmail} required="required"/>
                        </div>
                    
                        <div className="form-group">
                         <label>Degination</label>
                         <input type="text" className="form-control" placeholder="Enter Your Degination" value={this.state.degination} onChange={this.onChangeDegination} required="required"/>
                        </div>
                        <div className="form-group">
                         <label>Department</label>
                         <select className="browser-default custom-select" value={this.state.department} onChange={this.onChangeDepartment}>
                            <option>Choose your option</option>
                             <option value="1">Dentist</option>
                            <option value="2">Neurology</option>
                            <option value="3">Orthopedics</option>
                            <option value="3">Gynaecology</option>
                            <option value="3">Microbiology</option>
                            <option value="3">Radiotherapy</option>
                            <option value="3">Pharmacy</option>
                          </select>
                        </div>
                        <div className="form-group">
                         <label>Gender</label>
                         <select className="browser-default custom-select" value={this.state.gender} onChange={this.onChangeGender}>
                         <option>Choose your option</option>
                             <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="2">others</option>
                        </select>
                        </div>
                        <div className="form-group">
                         <label>Mobile Number</label>
                         <input type="number" className="form-control" placeholder="Enter Number" value={this.state.number} onChange={this.onChangeNumber} required="required"/>
                        </div>
                        <div className="form-group">
                         <label>Date Of Birth</label>
                         <input type="date" className="form-control" placeholder="Enter Date Of Birth" value={this.state.dob} onChange={this.onChangeDob} required="required"/>
                        </div>
                        <div className="form-group">
                         <label>City</label>
                         <input type="text" className="form-control" placeholder="Enter city" value={this.state.city} onChange={this.onChangeCity} required="required"/>
                        </div>
                        <div className="form-group">
                         <label>State</label>
                         <input type="text" className="form-control" placeholder="Enter State" value={this.state.state} onChange={this.onChangeState} />
                        </div>
                       
                        <h style={{marginLeft:"10px" ,fontSize:"30px"}}>EDUCATION DETAILS:</h>
                        <div className="form-group">
                         <label>10th School Name</label>
                         <input type="text" className="form-control" placeholder="Enter 10th School Name" value={this.state.schoolten} onChange={this.onChangeSchoolten} required="required"/>
                        </div>
                        <div className="form-group">
                         <label>12th School Name</label>
                         <input type="text" className="form-control" placeholder="Enter 12th School Name" value={this.state.schooltwelve} onChange={this.onChangeSchooltwelve} required="required"/>
                        </div>
                        <div className="form-group">
                         <label>Graduation College</label>
                         <input type="text" className="form-control" placeholder="Enter Graduation College Name" value={this.state.graduation} onChange={this.onChangeGraduation} required="required"/>
                        </div>
                        <div className="form-group">
                           <div className="custom-control custom-checkbox">
                             <input type="checkbox" className="custom-control-input" id="customCheck1"  required="required" />
                             <label className="custom-control-label" htmlFor="customCheck1"  required="required">Agree to terms and conditions</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <BrowserRouter>
                         <p className="forgot-password text-right text-white">
                         
                          DOCTOR <Link to="/doctor">See Profile?</Link>
                         </p>
                
                         </BrowserRouter>
                    </form>

                </div>
            </div>
        );
    }
}

