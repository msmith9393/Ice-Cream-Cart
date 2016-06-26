import { GET_ALL_FLAVORS, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_PRODUCT } from './../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_FLAVORS:
      return action.flavors;
    case ADD_TO_CART:
      var currentFlavors = action.payload.flavors.slice();
      var cF = currentFlavors[action.payload.index];
      var currentTotal = action.payload.currentTotal;
      if (cF.numberScoopsLeft > 0) {
        cF.numberScoopsLeft --;
        cF.numberScoopsInCart ++;
        cF.totalPrice = cF.numberScoopsInCart * cF.price;
        currentTotal += cF.price;
      }
      return {
        flavors: currentFlavors,
        total: currentTotal
      };
    case REMOVE_FROM_CART:
      var currentFlavors = action.payload.flavors.slice();
      var cF = currentFlavors[action.payload.index];
      var currentTotal = action.payload.currentTotal;
      if (cF.numberScoopsLeft < 10) {
        cF.numberScoopsLeft ++;
        cF.numberScoopsInCart --;
        cF.totalPrice = cF.numberScoopsInCart * cF.price;
        currentTotal -= cF.price;
      }
      return {
        flavors: currentFlavors,
        total: currentTotal
      };
    case REMOVE_PRODUCT:
      var currentFlavors = action.payload.flavors.slice();
      var currentPrice = action.payload.currentTotal;
      var removePrice = currentFlavors[action.payload.index].totalPrice;
      currentFlavors.splice(action.payload.index, 1);
      return {
        flavors: currentFlavors,
        total: currentPrice - removePrice
      }
    default:
      return state;
  }
}
