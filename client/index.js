import React from 'react';
import { render } from 'react-dom';
import App from '../components/app.js';
require('./../stylesheets/main.scss');

render(
  <App className="container" />,
  document.getElementById('main-app')
);
