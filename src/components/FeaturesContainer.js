import React from 'react';
import FeatureList from './FeatureList';


export default class FeaturesContainer extends React.Component {

  static defaultProps = {
    features: {},
  }

  render() {
    return (
      <form className="main__form">
          <h2>Customize your laptop</h2>
          {
            Object.keys(this.props.features).map((feature, idx) => {
              const featureHash = feature + '-' + idx;
              return (
                <fieldset className="feature" key={featureHash}>
                  <legend className="feature__name">
                    <h3>{feature}</h3>
                  </legend>
                  <FeatureList 
                    feature={feature}
                    features={this.props.features}
                    selected={this.props.selected}
                    currency={this.props.currency}
                    handleUpdate={this.props.handleUpdate}
                  />
                </fieldset>
              );
            })
          }
      </form>
    )
  }
}