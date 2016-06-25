import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/rootReducer.js';
import App from './components/app.js';
import actions from './actions/actionCreators';
const middleware = [];

const finalCreateStore = compose(
  applyMiddleware(...middleware)
)(createStore);

let getRandomPrice = () => Math.ceil(Math.random() * 5);

var flavors = [
  {
    name: 'Vanilla',
    price: getRandomPrice(),
    numberScoops: 10
  },
  {
    name: 'Pistachio',
    price: getRandomPrice(),
    numberScoopsLeft: 10,
    numberScoopsInCart: 0
  },
  {
    name: 'Coffee',
    price: getRandomPrice(),
    numberScoopsLeft: 10,
    numberScoopsInCart: 0
  },
  {
    name: 'Chocolate',
    price: getRandomPrice(),
    numberScoopsLeft: 10,
    numberScoopsInCart: 0
  },
  {
    name: 'Mint',
    price: getRandomPrice(),
    numberScoopsLeft: 10,
    numberScoopsInCart: 0
  },
];

const store = finalCreateStore(reducer,
  window.devToolsExtension ? window.devToolsExtension() : undefined);

store.dispatch(actions.getAllFlavors(flavors));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main-app')
);
