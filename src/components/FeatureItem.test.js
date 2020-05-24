import React from 'react';
import ReactDOM from 'react-dom';

import FeatureItem from './FeatureItem';


describe('<FeatureItem />', () => {

  it.skip('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FeatureItem />, div)
    ReactDOM.unmountComponentAtNode(div)
  });

});