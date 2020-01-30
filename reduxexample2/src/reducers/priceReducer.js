import { FETCH_PRICES, NEW_PRICE } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRICES:
      console.log('reducer');
      return {
        ...state,
        items: action.payload
      };
    case NEW_PRICE:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
