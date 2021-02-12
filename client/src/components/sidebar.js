import React from 'react';
import {Switch,Route, Link ,Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import Appointment from "./body";
import Car from "./home";
import Home from "./Marker";
import Profile from "./profile";
import Doctor from "./doctor";
import Analysis from "./analysis";
import Login from "./login";
import Logout from "./logout";
import Adddoc from "./adddoc";
import Password from "./password";
import './sidebar.css';


class SideNavPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggle: true};
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(e) {
        this.setState({isToggle: !this.state.isToggle});
      }
    
  
  render() {
      return (
        <div className="container" id="j" >
        <BrowserRouter>
          <div className="row" >
            
        <div className="col-sm-2" id="lp"> 
        
        <div  >  
        
        <div className="wrapper"> 
        
          <div className="sidebar" >
          
            <ul >
                <li><Link to="/home"><i className="fas fa-home"></i>Home</Link></li>
                <li><Link to="/body"><i className="fas fa-project-diagram"></i>Appointment</Link></li>
                <li><Link to="/doctor"><i className="fas fa-address-card"></i>Doctor</Link></li>

                <li><Link to="/profile"><i className="fas fa-user"></i>About</Link></li>
                <li><Link to="/analysis"><i className="fas fa-blog"></i>Analysis</Link></li>
                <li><Link to="/login"><i className="fas fa-address-book"></i>Login</Link></li>
                <li><Link to="/Marker"><i className="fas fa-map-pin"></i>Map</Link></li>
                <li></li>
            </ul> 
            <div class="social_media">
              <Link to="/fb"><i className="fab fa-facebook-f"></i></Link>
              <Link to="/twit"><i className="fab fa-twitter"></i></Link>
              <Link to="/insta"><i className="fab fa-instagram"></i></Link>
            </div>
            </div>
            </div>
        </div>
        <div ><button className="btn btn-primary" onClick={this.handleClick}>
             <span className="spinner-border spinner-border-sm"></span>
             </button></div>
             
             </div>
        
           <div className="col-sm-9">
             <li className="nav-item" style={{left:"0px"}}>
               <div className="container p-3 my-3 border jumbotron"  style={{height:"auto"}} >welcomme!!!!
               
               <div>

                <Switch>
                <Route path="/body" component = {Appointment} /> 
                <Route path="/home" component = {Car} /> 
                <Route path="/Marker" component = {Home} /> 
                <Route path="/profile" component = {Profile} /> 
                <Route path="/doctor" component = {Doctor} /> 
                <Route path="/analysis" component = {Analysis} /> 
                <Route path="/login" component={Login}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/adddoc" component={Adddoc}/>
                <Route path="/password" component={Password}/>
                <Route path="/adddoc" component={Adddoc}/>

               
                </Switch>
                
             
                </div>
                </div>
             </li>
             </div>
             </div> 
             </BrowserRouter>
            
        </div>
      );
    }
  }
  
  export default SideNavPage;
  
  