// create your App component here
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then((json) => json.people)
    .then(peeps => this.setState({people: peeps}))
    .then(() => console.log("STATE", this.state))
  }


  render() {
    return (
      <div>
        {this.state.people.map(person => <p key={person.name}>{person.name}</p>)}
      </div>
    );
  }
}
