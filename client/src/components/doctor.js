import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card} from 'react-bootstrap';
import './doctor.css';

export default class Doctor extends Component {
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
        <div className="container">
             <span className="border">

         <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="images/amit1.jpg" />
              <Card.Body>
                  <Card.Title>xxxxxx</Card.Title>
              <Card.Text>
              DENTIST
              </Card.Text>

             <Button variant="primary" onClick={this.handleClick}>Go Profile</Button>
    
            </Card.Body>
 
</Card>
</span>
<span className="border  .text-danger">

<div  style={{display: this.state.isToggle ? 'block': 'none'}}> 
  <h>Name:</h><br/>
  <h>Name:</h><br/>
  <h>Name:</h><br/>
  <h>Name:</h><br/>
  <h>Name:</h><br/>
  <h>Name:</h><br/>
  <h>Name:</h><br/>
  <h>Name:</h><br/>
  <h>Name:</h><br/>
  <h>Name:</h><br/>
   </div>

   </span>
      </div>
      
    );
  }
}