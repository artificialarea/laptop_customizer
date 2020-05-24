import React from 'react';
import ReactDOM from 'react-dom';

import FeaturesContainer from './FeaturesContainer';


describe('<FeaturesContainer />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FeaturesContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  });

});