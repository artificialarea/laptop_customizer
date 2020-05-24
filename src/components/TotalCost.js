import React from 'react';


export default class TotalCost extends React.Component {

  static defaultProps = {
    selected: {},
    currency: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }),
  }
  
  render() {
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {this.props.currency.format(Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          ))}
        </div>
      </div>
    )
  }
}