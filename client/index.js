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

var state = {
  total: 0,
  flavors: [
    {
      name: 'Vanilla',
      price: null,
      numberScoopsLeft: 9,
      numberScoopsInCart: 1,
      totalPrice: null,
      description: 'Temporary description about ice cream flavor. I am going to make it extra long.'
    },
    {
      name: 'Strawberry',
      price: null,
      numberScoopsLeft: 9,
      numberScoopsInCart: 1,
      totalPrice: null,
      description: 'Temporary description about ice cream flavor. I am going to make it extra long.'
    },
    {
      name: 'Coffee',
      price: null,
      numberScoopsLeft: 9,
      numberScoopsInCart: 1,
      totalPrice: null,
      description: 'Temporary description about ice cream flavor. I am going to make it extra long.'
    },
    {
      name: 'Chocolate',
      price: null,
      numberScoopsLeft: 9,
      numberScoopsInCart: 1,
      totalPrice: null,
      description: 'Temporary description about ice cream flavor. I am going to make it extra long.'
    },
    {
      name: 'Mint',
      price: null,
      numberScoopsLeft: 9,
      numberScoopsInCart: 1,
      totalPrice: null,
      description: 'Temporary description about ice cream flavor. I am going to make it extra long.'
    }
  ]
}

let getRandomPrice = () => Math.ceil(Math.random() * 5);
var copy = state.flavors.slice();
var total = state.total;
state.flavors = copy.map((flavor) => {
  var random = getRandomPrice();
  flavor.price = random;
  flavor.totalPrice = random;
  total += random;
  return flavor;
});
state.total = total;

const store = finalCreateStore(reducer,
  window.devToolsExtension ? window.devToolsExtension() : undefined);

store.dispatch(actions.getAllFlavors(state));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main-app')
);
