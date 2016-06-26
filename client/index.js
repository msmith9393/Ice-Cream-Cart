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

var state = {
  total: 0,
  flavors: [
    {
      name: 'Vanilla',
      price: getRandomPrice(),
      numberScoopsLeft: 10,
      numberScoopsInCart: 0,
      totalPrice: 0
    },
    {
      name: 'Strawberry',
      price: getRandomPrice(),
      numberScoopsLeft: 10,
      numberScoopsInCart: 0,
      totalPrice: 0
    },
    {
      name: 'Coffee',
      price: getRandomPrice(),
      numberScoopsLeft: 10,
      numberScoopsInCart: 0,
      totalPrice: 0
    },
    {
      name: 'Chocolate',
      price: getRandomPrice(),
      numberScoopsLeft: 10,
      numberScoopsInCart: 0,
      totalPrice: 0
    },
    {
      name: 'Mint',
      price: getRandomPrice(),
      numberScoopsLeft: 10,
      numberScoopsInCart: 0,
      totalPrice: 0
    }
  ]
}

const store = finalCreateStore(reducer,
  window.devToolsExtension ? window.devToolsExtension() : undefined);

store.dispatch(actions.getAllFlavors(state));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main-app')
);
