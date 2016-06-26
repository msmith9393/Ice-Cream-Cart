import * as types from './actionTypes';

export default {
  getAllFlavors: (flavors) => {
    return {
      type: types.GET_ALL_FLAVORS,
      flavors: flavors
    }
  },
  addToCart: (flavors, index) => {
    return {
      type: types.ADD_TO_CART,
      payload: {
        index,
        flavors
      }
    }
  }
}
