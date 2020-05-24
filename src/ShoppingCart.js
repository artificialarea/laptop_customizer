import React from 'react';
import Summary from './Summary';
import TotalCost from './TotalCost';


export default class ShoppingCart extends React.Component {

  static defaultProps = {
    features: {},
    selected: {},
    currency: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {/* <Summary /> */}
        {/* <TotalCost /> */}

        {/* Summary.js... */}
        {/* {summary} */}
        {
          Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {this.props.currency.format(selectedOption.cost)}
                </div>
              </div>
            )
          })
        }

        {/* Total.js... */}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {this.props.currency.format(Object.keys(this.props.selected).reduce(
              (acc, curr) => acc + this.props.selected[curr].cost,
              0
            ))}
          </div>
        </div>
      </section>
    )
  }
}