import * as types from './actionTypes';

export default {
  getAllFlavors: (flavors) => {
    return {
      type: types.GET_ALL_FLAVORS,
      flavors: flavors
    }
  }
}
