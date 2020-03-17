const listItemSrting = ['rank','name', 'githubId', 'role', 'location', 'score', 'registration',  'registrationGetTime'];
const getSearch = (dataSearch, value) => dataSearch.filter((user) => listItemSrting.some(item => user[item].toString().toLowerCase().includes(value.toLowerCase())));

const actions = {
  updateInput: (input) => (
    {
      type: 'UPDATE_INPUT',
      payload: {txt: input, length: input.length},
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
