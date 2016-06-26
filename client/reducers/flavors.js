import { GET_ALL_FLAVORS, ADD_TO_CART } from './../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case GET_ALL_FLAVORS:
      return action.flavors;
    case ADD_TO_CART:
      var currentFlavors = action.payload.flavors.slice();
      var cF = currentFlavors[action.payload.index];
      if (cF.numberScoopsLeft > 0) {
        cF.numberScoopsLeft --;
        cF.numberScoopsInCart ++;
        cF.totalPrice = cF.numberScoopsInCart * cF.price;
      }
      return currentFlavors;
    default:
      return state;
  }
}
