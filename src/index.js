// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Helmet } from 'react-helmet';

const Index = () => (
  <>
    <Helmet>
      <title>Slider Component - Demo</title>
      <meta name="description" content="A demo of a customizable slider component with continuous and discreet options." />
    </Helmet>
    <App />
  </>
);

ReactDOM.render(<Index />, document.getElementById('root'));
