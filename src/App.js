import React, { Component } from 'react';
import './App.css';
import ContactCard from './ContactCard';

export default class App extends Component {

  state={
    contacts: []
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }

  render(){
    return (
      <div className='App'>
          {/* {console.log(this.state.contacts)} */}
        <ContactCard contacts={this.state.contacts} />
      </div>
    );
  }
}


