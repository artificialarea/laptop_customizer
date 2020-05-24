import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// assignment per: 
// https://courses.thinkful.com/react-v1/checkpoint/12#assignment

// COMPONENT COMPOSITION ////////////////
//
// index
// App ................... { stateful }
//// STORE
//// FeaturesContainer
//////// FeatureList
//////////// FeatureItem
//// ShoppingCart
//////// Summary
//////// TotalCost
//
/////////////////////////////////////////

ReactDOM.render(<App />, document.getElementById('root'));
