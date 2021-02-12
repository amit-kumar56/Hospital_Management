import React, { Component } from "react";
import {Switch,Route, Link ,BrowserRouter,Router} from 'react-router-dom'
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
    
        
        this.onChangeUsename = this.onChangeUsename.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          password: '',
         message:'',
        }
      }
      onChangeUsename(e) {
        this.setState({
          username: e.target.value,
        })
      }
      onChangePassword(e) {
        this.setState({
          password: e.target.value,
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const logs = {
          username: this.state.username,
          password: this.state.password,
          
    
        }    
        axios.post('/doc/logins', logs)
        .then(res => res.json())
        .then(message => this.setState({message}));
  
         this.setState({
             username:'',
             password:'',
         })
       
      }



    render() {
        return (
            <div className="jumbotron .text-warning " style={{backgroundColor:"red" }}>
                <img src="images/hospital.png" className="img-rounded" alt="Cinque Terre" style={{blockSize:"130px",marginLeft:"280px" }}/><br/>
                <h style={{marginLeft:"300px" ,fontSize:"30px"}} className=" text-white">LOG IN</h>
                <div className="jumbotron fluid  text-white" style={{backgroundColor:"red" ,width:"500px" ,marginLeft:"130px"}}>
                    <form  onSubmit={this.onSubmit}>
                       
                        <div className="form-group">
                         <label>Username</label>
                         <input type="text"  className="form-control" name="username" placeholder="Enter email" value={this.state.username} onChange={this.onChangeUsename} />
                        </div>
                       <div>{this.state.message}</div>
                        <div className="form-group">
                         <label>Password</label>
                         <input type="password" name ="password" className="form-control" placeholder="Enter Password" value={this.state.password} onChange={this.onChangePassword} />
                        </div>
                        <div className="form-group">
                           <div className="custom-control custom-checkbox">
                             <input type="checkbox" className="custom-control-input" id="customCheck1"  required="required" />
                             <label className="custom-control-label" htmlFor="customCheck1"  required="required">Agree to terms and conditions</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <h>{this.state.username}</h>
                        <BrowserRouter>
                         <p className="forgot-password text-right text-white">
                         
                          Forgot <Link to="/password">Password?</Link>
                         </p>
                
                         </BrowserRouter>
                    </form>

                </div>
            </div>
        );
    }
}



/*<form>
                <h3>Sign In</h3>
               
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>*/