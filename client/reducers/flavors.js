import { GET_ALL_FLAVORS } from './../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case GET_ALL_FLAVORS:
      return action.flavors;
    default:
      return state;
  }
}
