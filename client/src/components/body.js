import React, { Component } from 'react';
import axios from 'axios';

export default class Appointment extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      age: '',
      gender:'',
      number:'',
    }
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
  onChangeAge(e) {
    this.setState({
      age: e.target.value,
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

  onSubmit(e) {
    e.preventDefault();

    const book = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      age: this.state.age,
      gender: this.state.gender,
      number: this.state.number

    }

    console.log(book);

    axios.post('/body/add', book)
      .then(res => console.log(res.data));

    this.setState({
      firstname: '',
      lastname: '',
      age: '',
      gender:'',
      number:''
    })
  }

  render() {
    return (
      <div className="jumbotron .text-warning " style={{backgroundColor:"red" }}>
        <img src="images/hospital.png" className="img-rounded" alt="Cinque Terre" style={{blockSize:"130px",marginLeft:"280px" }}/><br/>
        <h style={{marginLeft:"150px" ,fontSize:"30px"}} className=" text-white">BOOK APPOINTMENT</h>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>First Name: </label>
            <input  type="text"
               
                className="form-control"
                value={this.state.firstname}
                onChange={this.onChangeFirstname}
                />
          </div>
          <div className="form-group"> 
            <label>Last Name: </label>
            <input  type="text"
                
                className="form-control"
                value={this.state.lastname}
                onChange={this.onChangeLastname}
                />
          </div>
          <div className="form-group"> 
            <label>Age: </label>
            <input  type="number"
                
                className="form-control"
                value={this.state.age}
                onChange={this.onChangeAge}
                />
          </div>
          <div className="form-group"> 
            <label>Gender: </label>
            <select className="browser-default custom-select"   value={this.state.gender}  onChange={this.onChangeGender}>
                            <option>Choose your option</option>
                             <option  className="form-control">Male</option>
                            <option className="form-control">Female</option>
                            <option className="form-control">Others</option>
                 </select>
                
          </div>
          <div className="form-group">
          <label>Phone Number: </label>

            <input  type="number"
               
                className="form-control"
                value={this.state.number}
                onChange={this.onChangeNumber}
                />
                </div>
          <div className="form-group">
            <input type="submit" value="Book Appointment" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}