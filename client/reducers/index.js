import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { helloReducer } from './hello';

const reducers = combineReducers({
  routeReducer,
  helloReducer
});

export default reducers;
