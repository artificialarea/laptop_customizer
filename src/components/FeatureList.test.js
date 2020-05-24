import React from 'react';
import ReactDOM from 'react-dom';

import FeatureList from './FeatureList';


describe('<FeatureList />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FeatureList />, div)
    ReactDOM.unmountComponentAtNode(div)
  });
  
});