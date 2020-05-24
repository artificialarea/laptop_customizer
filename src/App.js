import React, { Component } from 'react';
import './App.css';
import STORE from './STORE';
import FeaturesContainer from './components/FeaturesContainer';
import ShoppingCart from './components/ShoppingCart';


// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


export default class App extends Component {

  state = {
    features: STORE,
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    console.log(this.features)
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <FeaturesContainer 
            features={this.state.features}
            selected={this.state.selected}
            currency={USCurrencyFormat}
            handleUpdate={this.updateFeature}
          />
          <ShoppingCart 
            selected={this.state.selected}
            currency={USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}