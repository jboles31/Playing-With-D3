import React, { Component } from 'react';
import D3Chart from './D3Chart.js';

class ChartWrapper extends Component {
  componentDidMount() {
    new D3Chart(this.refs.chart)
  }

  render() {
    return <div className="chart" ref="chart"></div>
  }

}

export default ChartWrapper