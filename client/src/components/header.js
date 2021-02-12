import React, { Component, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import './header.css';
import SideNavPage from "./sidebar";
import {Switch,Route, Link ,BrowserRouter,Router} from 'react-router-dom'

import { Dropdown,Button,ButtonGroup } from 'react-bootstrap';

class Header extends React.Component 
{
    render(){
        return(
            <div className="container" id="po">
                <div className="row navbar navbar-expand-sm bg-dark" id="pp" >
                    
                    <div className="col-sm-4" >
                        
                        <h className="navbar navbar-expand-xl bg-lg col bg-success">MY CLINICs</h>
                    </div>
                    <div className="col-sm-8" >
                        <ul className="row">
                            <li className="nav-item">
                                <input className="form-control"  type="text" placeholder="Search" aria-label="Search" />                                 
                             </li><br/>
                           <BrowserRouter>
                             <li id="sd">
                             
                             <Dropdown as={ButtonGroup}>
                                <Button variant="success">                              
                                < i className="fas fa-user"/>Profile
                               </Button>

                                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                                   <Dropdown.Menu>
                                    </Dropdown.Menu>
                                </Dropdown>
                               
                                
                                
                             </li>
                            
                             </BrowserRouter>
                             
                        </ul>
                    </div>
                </div>
             <SideNavPage />
             
            </div>
            
        );
    }
}
export default Header;


/*
<div className="btn-group">
        		                 <button type="button" className="btn btn-primary">
                                 < i className="fas fa-user"/>Profile
                                 </button>
        		                 <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        		                 <span class="sr-only">Click Me!</span>
                                 </button>
                                       <Dropdown.Item ><Link to="/login">LogIn</Link></Dropdown.Item>
                                     <Dropdown.Item ><Link to="/logout">LogOut</Link></Dropdown.Item>
                                     <Dropdown.Item ><Link to="/adddoc">Add Doctor</Link></Dropdown.Item>
                                  
        		                 <div className="dropdown-menu">
        			                <a className="dropdown-item" href="http://sonarsystems.co.uk">Button 1</a>
        			                <a className="dropdown-item" href="http://sonarsystems.co.uk">Button 2</a>
        			                <a className="dropdown-item" href="http://sonarsystems.co.uk">Button 3</a>
        			                <div className="dropdown-divider"></div>
        			                <a className="dropdown-item" href="http://sonarsystems.co.uk">Sign Out</a>
        		                 </div>
        	                 </div>*/