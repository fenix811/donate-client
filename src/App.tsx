import React, { Component } from 'react';
import './App.css';
import DonationForm from './components/DonateForm';

interface IAddProductProps {
  addProduct: Function;
}

//function App() {
  class App extends Component { //TODO convert to functional with HOOKS!!
    constructor(){
      super(props)
    }
  render(){
    return (
      <div className="App">
        <header className="centered">
          <h1>Donation</h1>
        </header>
        <hr  />
        <DonationForm></DonationForm>
      </div>
    );
  }
  }

export default App;
