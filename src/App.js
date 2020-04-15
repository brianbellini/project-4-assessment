import React, { Component } from 'react';
import './App.css';

import CircleSelector from './components/CircleSelector/CircleSelector'
import Circles from './components/Circles/Circles'

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCircle: 1,
    };
  }

  handleSelected = (selection) => {
    this.setState({selectedCircle: selection});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
              handleSelected={this.handleSelected}
              selected={this.state.selectedCircle} />
          <Circles selection={this.state.selectedCircle}/>
        </main>
      </div>
    );
  }
}

export default App;