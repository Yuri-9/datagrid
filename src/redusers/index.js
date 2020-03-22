import { combineReducers } from 'redux';
import { data } from '../data/dataUser';
import getSearch from '../utils/getSearch';

const inputValue = localStorage.getItem('inputValue') || "";

const initialData = {
  data,
  dataSearch: getSearch(data, inputValue),
  listColumns: ['name', 'gitHub', 'role', 'location', 'score', 'registration', 'registrationGetTime', 'active'],
};

const initialInput = {
  inputValue: inputValue,
};


const initialFilter = {
  filter: localStorage.getItem('filter') || 'rank',
  isClickArrowUp: localStorage.getItem('isClickArrowUp') ? (localStorage.getItem('isClickArrowUp') === 'true') : true,
  isClickArrowDown: (localStorage.getItem('isClickArrowDown') === 'true') || false,
  selectValue: localStorage.getItem('selectValue') || 'All',
  listSelectRole: localStorage.getItem('listSelectRole') || [],
};


const table = (state = initialData, action) => {
    switch (action.type) {
    case 'SEARCH':
      return { ...state, dataSearch: action.payload};
      case 'SHOW_COLUMN':
      return { ...state, listColumns: action.listColumns};
    default:
      return state;
  }
};

const input = (state = initialInput, action) => {
   switch (action.type) {
    case('UPDATE_INPUT'):
      return { inputValue: action.payload }
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
        isClickArrowUp: action.typeClickArrow === 'arrowUp' ? true : false,
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

