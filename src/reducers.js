import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ask from './containers/Ask/reducer';


export default function createReducer(asyncReducers) {
  return combineReducers({
    ask,
    routing: routerReducer,
    ...asyncReducers,
  });
}
