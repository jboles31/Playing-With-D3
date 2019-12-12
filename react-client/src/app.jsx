import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header.jsx'
import ChartWrapper from './components/ChartWrapper.jsx'
import $ from 'jquery'
import Background from './images/background.jpg'
import style from './main.scss';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      example: []
    }
  }

  //
  // Render App and Comps to index.html
  //

  render() {
    return (
      <div className="app-wrapper">
        <div className='bg'>
          <img className="background" src={Background} ></img>
        </div>
        <div className="comps-wrapper">
          <Header 
            example={this.state.example}
            />
          <ChartWrapper />
        </div>        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
