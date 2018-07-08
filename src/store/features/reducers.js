import { combineReducers } from 'redux';
import clickCounter from './clickCounter/reducers';
import company from './company/reducers';

const rootReducer = combineReducers({
  clickCounter,
  company
});
export default rootReducer;