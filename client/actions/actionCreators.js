import * as types from './actionTypes';

export default {
  getAllFlavors: (flavors) => {
    return {
      type: types.GET_ALL_FLAVORS,
      flavors
    }
  },
  addToCart: (flavors, index, currentTotal) => {
    return {
      type: types.ADD_TO_CART,
      payload: {
        index,
        flavors,
        currentTotal
      }
    }
  },
  removeFromCart: (flavors, index, currentTotal) => {
    return {
      type: types.REMOVE_FROM_CART,
      payload: {
        index,
        flavors,
        currentTotal
      }
    }
  },
  removeProduct: (flavors, index, currentTotal) => {
    return {
      type: types.REMOVE_PRODUCT,
      payload: {
        index,
        flavors,
        currentTotal
      }
    }
  },
  getCreditCardInfo: (creditCardInfo) => {
    return {
      type: types.GET_CREDITCARD_INFO,
      payload: creditCardInfo
    }
  }
}
