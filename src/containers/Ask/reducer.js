import * as at from '../../constants/actionTypes';

const initialState = {
  data: {},
};

export default function someReducer(state = initialState, action) {
  console.log('askreducer');
  switch (action.type) {
    case at.PAYMENT_AND_RELEASE:
      return Object.assign({}, state, {data: action.data});
    default:
      return state;
  }
}
