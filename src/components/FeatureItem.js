import React from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';


export default class FeatureItem extends React.Component {

  static defaultProps = {
    item: '',
    feature: '',
    selected: {}, // incl. inline Conditional Rendering
    currency: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }),
    onChange: () => {},
  }

  render() {
    const itemHash = slugify(JSON.stringify(this.props.item));
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(this.props.feature)}
          /* REVISIT to understand need for 'Conditional Rendering' to pass smoke test: checked={this.props.selected.length > 0 && ...
          yet can't include conditional because then it stops persistant visual rendering of checked FeatureItems in the DOM....
          */
          checked={
            this.props.item.name === this.props.selected[this.props.feature].name}
          onChange={e => this.props.handleUpdate(this.props.feature, this.props.item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {this.props.item.name} ({this.props.currency.format(this.props.item.cost)})
        </label>
      </div>
    );
  }
}