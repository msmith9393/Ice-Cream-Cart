import { combineReducers } from 'redux';
import flavors from './flavors.js';
import creditCardInfo from './creditCardInfo.js';

export default combineReducers({
  state: flavors,
  creditCardInfo: creditCardInfo
});
