import React from 'react';
import Summary from './Summary';
import TotalCost from './TotalCost';


export default class ShoppingCart extends React.Component {

  static defaultProps = {
    selected: {},
    currency: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }),
  }

  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <Summary 
          selected={this.props.selected}
          currency={this.props.currency}
        />
        <TotalCost 
          selected={this.props.selected}
          currency={this.props.currency}
        />
      </section>
    )
  }
}