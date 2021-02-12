import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
  
class Car extends Component {

  render() {
    return (
     <div >
              <Carousel >
      <Carousel.Item  >
        <img  style={{height:'500px',width:"100%"}}
          
          src="images/amit1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
    <img
      style={{height:'500px',width:"100%"}}
      src="images/amit2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      style={{height:'500px',width:"100%"}}
      src="images/amit1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
     
    </Carousel>  
    </div>
    );
  }
};

export default Car;

/**/