import getSearch from '../utils/getSearch';

const actions = {
  updateInput: (inputValue) => (
    {
      type: 'UPDATE_INPUT',
      payload: inputValue,
    }
  ),
  search: (dataSearch, value) => (
    {
      type: 'SEARCH',
      payload: getSearch(dataSearch, value),
    }
  ),

  setFilter: (filter, typeClickArrow) => ({
    type: 'SET_FILTER',
    filter,
    typeClickArrow,
  }),

  setSelect: (selectValue) => ({
    type: 'SET_SELECT',
    selectValue,
  }),

  setSelectRole: (listSelectRole) => ({
    type: 'SET_SELECT_ROLE',
    listSelectRole,
  })

}


export default actions;

export const nameFilters = {
  RANK: 'rank',
  NAME: 'name',
  GITHUB_ID: 'githubId',
  LOCATION: 'location',
  SCORE: 'score',
  IS_ACTIVE: 'isActive',
  REGISTRATION: 'registration',
  REGISTRATION_GET_TIME: 'registrationGetTime',
}
