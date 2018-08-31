// create your App component here
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    astrosData: []
  }

  render() {
    return (
      <div>
        {this.state.astrosData}
      </div>
    )
  }

  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
      .then(res => res.json())
      .then(console.log)
  }



}
