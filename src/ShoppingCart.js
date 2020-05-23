import React from 'react';
import Summary from './Summary';
import TotalCost from './TotalCost';


export default class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <Summary />
        <TotalCost />
      </div>
    )
  }
}