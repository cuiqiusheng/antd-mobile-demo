import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ask from './containers/Ask/reducer';
import {login} from './containers/Login/reducer'


export default function createReducer(asyncReducers) {
  return combineReducers({
    ask,
    login,
    routing: routerReducer,
    ...asyncReducers,
  });
}
