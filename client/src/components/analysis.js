
import React, { Component } from "react";
import Chart from "react-apexcharts";

class Analysis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
             
            />
          </div>
          <Donut/>
          <Line/>
          <Axisro/>
        </div>
      </div>
    );
  }
}

export default Analysis;

class Donut extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
      }
    }
  
    render() {
  
      return (
        <div className="donut">
          <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
        </div>
      );
    }
  }
  
  class Line extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      };
    }
  
    render() {
      return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
             
  <Chart
    options={this.state.options}
    series={this.state.series}
    type="line"
    width="500"
  />

            </div>
           
          </div>
        </div>
      );
    }
  }
  

  class Axisro extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [
                'Apples',
                'Strawberries',
                'Pineapples',
                ['Sugar', 'Baby', 'Watermelon'],
                ['Prickly', 'Pear'],
                'Pears',
                ['Quararibea', 'cordata'],
                'Pomegranates',
                'Tangerines'
              ]
             
        
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
        
      };
    }
  
    render() {
      return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
             
  <Chart
    options={this.state.options}
    series={this.state.series}
    type="line"
    width="500"
  />

            </div>
           
          </div>
        </div>
      );
    }
  }
  
  /*
  #update only series data;
  const newSeries = [];

this.state.series.map((s) => {
  const data = s.data.map(() => {
    return Math.floor(Math.random() * (180 - min + 1)) + min
  })
  newSeries.push({ data, name: s.name })
})

this.setState({
  series: newSeries
})*/