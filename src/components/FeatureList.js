import React from 'react';
import FeatureItem from './FeatureItem';


export default class FeatureList extends React.Component {

  static defaultProps = {
    feature: [], // incl with Conditional Rendering
  }

  render() {
    return (
      <div>

        {/* REVISIT
        still not really sure why, but in order to pass smoke test 
        needed to add 'Conditional Rendering' to .map
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