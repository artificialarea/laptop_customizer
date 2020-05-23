import React from 'react';
import FeatureList from './FeatureList';


export default class FeaturesContainer extends React.Component {

  render() {

    return (
      <div>
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <FeatureList 
              features={this.props.features}
              selected={this.props.selected}
              handleUpdate={this.props.handleUpdate}
            />
        </form>
        
      </div>
    )
  }
}