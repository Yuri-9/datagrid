import { combineReducers } from 'redux';
import { data } from '../data/dataUser';

const initialData = {
  count: 0,
  data,
  isSortName: false,
  dataSearch: [],
};

const initialInput = {
  input: {},
};

const table = (state = initialData, action) => {
    switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SEARCH':
      return { ...state, dataSearch: action.payload };
    default:
      return state;
  }
};

const input = (state = initialInput, action) => {
   switch (action.type) {
    case('UPDATE_INPUT'):
      return { input: action.payload }
    default:
      return state;
  }
};

const filter = (state = 'rank', action) => {
  console.log(action.type)
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export default combineReducers({
  table,
  input,
  filter
})

