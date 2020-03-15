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


const initialFilter = {
  filter: 'rank',
  isClickArrayUp: false,
  isClickArrayDown: false,
  selectValue: 'All',
  listSelectRole: [],
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

const getFilter = (state = initialFilter, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.filter,
        isClickArrowUp: action.typeClickArrow === 'arrowAp' ? true : false,
        isClickArrowDown: action.typeClickArrow === 'arrowDown' ? true : false,
      }
    case 'SET_SELECT':
      return {...state, selectValue: action.selectValue }
    case 'SET_SELECT_ROLE':
      return {...state, listSelectRole: action.listSelectRole }
    default:
      return state
  }
}

export default combineReducers({
  table,
  input,
  getFilter
})

