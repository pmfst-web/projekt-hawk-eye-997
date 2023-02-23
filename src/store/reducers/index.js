import {combineReducers} from 'redux';
import transactionReducer from './Transakcija';

export default combineReducers({
  transakcije: transactionReducer,

});
