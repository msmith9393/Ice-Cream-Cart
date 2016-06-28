import { GET_CREDITCARD_INFO } from './../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CREDITCARD_INFO:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}
