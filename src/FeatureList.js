import React from 'react';
import FeatureItem from './FeatureItem';

//////////////////////////////////////
// duped from <App /> 
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
//////////////////////////////////////

export default class FeatureList extends React.Component {

  static defaultProps = {
    features: {},
    selected: {},
    onChange: () => {},
  }

  render() {

    const features = Object.keys(this.props.features).map((feature, idx) => {

      const featureHash = feature + '-' + idx; // NOTE: Migrate to <FeatureItem/> ??

      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));

        return (
          <>
            <FeatureItem 
            features={this.props.features}
            selected={this.props.selected}
            handleUpdate={this.props.handleUpdate}
            />
          </>
        );
      });

      
      // console.log(featureHash);
      // const options = this.props.features[feature].map(item => {
      //   const itemHash = slugify(JSON.stringify(item));
      //   // const itemHash = JSON.stringify(item);
      //   // const itemHash = item;
      //   // console.log(itemHash);
      //   return (
      //     <div key={itemHash} className="feature__item">
      //       <input
      //         type="radio"
      //         id={itemHash}
      //         className="feature__option"
      //         name={slugify(feature)}
      //         checked={item.name === this.props.selected[feature].name}
      //         onChange={e => this.props.handleUpdate(feature, item)}
      //       />
      //       <label htmlFor={itemHash} className="feature__label">
      //         {item.name} ({USCurrencyFormat.format(item.cost)})
      //       </label>
      //     </div>
      //   );
      // });

      // return (
      //   <fieldset className="feature" key={featureHash}>
      //     <legend className="feature__name">
      //       <h3>{feature}</h3>
      //     </legend>
      //     {options}
      //   </fieldset>
      // );

      
    });

    return (
      <>
        {features}
      </>
    )
  }
}