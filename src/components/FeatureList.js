import React from 'react';
import FeatureItem from './FeatureItem';


export default class FeatureList extends React.Component {

  static defaultProps = {
    feature: [], // incl. inline Conditional Rendering
  }

  render() {
    return (
      <div className="feature__list">

        {/* REVISIT to understand need for 'Conditional Rendering' for .map to pass smoke test
        per https://www.debuggr.io/react-map-of-undefined/#wrapping-up
        and https://reactjs.org/docs/conditional-rendering.html 
        */}

        {this.props.feature.length > 0 && 
          this.props.features[this.props.feature].map((item, index) => {
            return (
              <FeatureItem 
                key={item.name + "-" + index}
                item={item}
                feature={this.props.feature}
                features={this.props.features}
                selected={this.props.selected}
                currency={this.props.currency}
                handleUpdate={this.props.handleUpdate}
              />
            );
          })
        }
      </div>
    )
  }
}