import React, { Component } from "react";
import { Dropdown,Form,Col,Container,InputGroup,Image,Button,ButtonGroup } from 'react-bootstrap';
import "./login.css";
import {Switch,Route, Link ,BrowserRouter,Router} from 'react-router-dom'

export default class Password extends Component {
    
    render() {
        return (
            <div className="jumbotron .text-warning " style={{backgroundColor:"red" }}>
                <img src="images/hospital.png" className="img-rounded" alt="Cinque Terre" style={{blockSize:"130px",marginLeft:"290px" }}/><br/>
                <h style={{marginLeft:"250px" ,fontSize:"30px"}} className=" text-white">SET PASSWORD</h>
                <div className="jumbotron fluid  text-white" style={{backgroundColor:"red" ,width:"500px" ,marginLeft:"130px"}}>
                    <form>
                       
                        <div className="form-group">
                         <label>Username</label>
                         <input type="email" className="form-control" placeholder="Enter email"  required="required"/>
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
                         
                          Log In <Link to="/login">LogIn?</Link>
                         </p>
                         
                         </BrowserRouter>
                    </form>

                </div>
            </div>
        );
    }
}


