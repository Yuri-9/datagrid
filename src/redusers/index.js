import { combineReducers } from 'redux';
import { data } from '../data/dataUser';

const initialData = {
  data,
  dataSearch: [],
};

const initialInput = {
  input: {},
};


const initialFilter = {
  filter: 'score',
  isClickArrayUp: false,
  isClickArrayDown: false,
  selectValue: 'All',
  listSelectRole: [],
};


const table = (state = initialData, action) => {
    switch (action.type) {
    case 'SEARCH':
      return { ...state, dataSearch: action.payload};
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

