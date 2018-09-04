import React from 'react';
// import Greeting from './components/Greeting.js'

export default class App extends React.Component{

  state = {
    people: []
  }

  componentDidMount = () => {
    fetch('http://api.open-notify.org/astros.json')
      .then(r => r.json())
      .then(list => {
        this.setState({
          people: list.people
        })
      }
    )
  }

  mountPeople = () => {
    return this.state.people.map((person) => {
      console.log(person)
      return (
        <div key={`${person.name}-${person.craft}`}>
        <p>Name: {person.name}</p>
        <p>Craft: {person.craft}</p>
      </div>
      )
    })
  }

  render () {
    return (
      <div>
        {this.mountPeople()}
      </div>
    )
  }

}
